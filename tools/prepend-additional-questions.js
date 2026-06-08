const fs = require("fs");
const path = require("path");

const sourcePath = process.argv[2];

if (!sourcePath) {
  console.error("Usage: node tools/prepend-additional-questions.js <pasted-text.txt>");
  process.exit(1);
}

const rootDir = path.resolve(__dirname, "..");
const questionsDir = path.join(rootDir, "questions");
const source = fs.readFileSync(sourcePath, "utf8").replace(/\r\n/g, "\n");
const lines = source.split("\n").map((line) => line.trimEnd());
const answerMap = {
  "①": 0,
  "②": 1,
  "③": 2,
  "④": 3
};
const choiceSymbols = Object.keys(answerMap);
const additionalUnits = parseAdditionalQuestions(lines);

global.window = global;
global.QUESTION_UNITS = [];

for (const unitNumber of [9, 10, 11, 12, 13, 14]) {
  require(path.join(questionsDir, `unit${unitNumber}.js`));
}

for (const unit of global.QUESTION_UNITS) {
  const unitNumber = Number(unit.id.replace("unit", ""));
  const additionalQuestions = additionalUnits.get(unitNumber) || [];

  if (additionalQuestions.length !== 10) {
    throw new Error(`${unit.title} additional question count is ${additionalQuestions.length}, expected 10`);
  }

  const additionalQuestionTexts = new Set(additionalQuestions.map((question) => question.question));
  const existingQuestions = unit.questions
    .filter((question) => !additionalQuestionTexts.has(question.question))
    .map((question, index) => ({
    ...question,
    id: `${unit.id}-${String(index + 11).padStart(2, "0")}`
  }));

  const renumberedAdditional = additionalQuestions.map((question, index) => ({
    ...question,
    id: `${unit.id}-${String(index + 1).padStart(2, "0")}`
  }));

  const mergedUnit = {
    ...unit,
    questions: [...renumberedAdditional, ...existingQuestions]
  };

  const filePath = path.join(questionsDir, `${unit.id}.js`);
  const contents = [
    "window.QUESTION_UNITS = window.QUESTION_UNITS || [];",
    "",
    `window.QUESTION_UNITS.push(${JSON.stringify(mergedUnit, null, 2)});`,
    ""
  ].join("\n");

  fs.writeFileSync(filePath, contents);
  console.log(`${unit.title}: ${mergedUnit.questions.length}문제`);
}

function parseAdditionalQuestions(inputLines) {
  const units = new Map();
  let index = 0;

  while (index < inputLines.length) {
    const header = inputLines[index].trim().match(/^(\d+)-(\d+)\.\s*(.*)$/);

    if (!header) {
      index += 1;
      continue;
    }

    const unitNumber = Number(header[1]);
    const questionNumber = Number(header[2]);
    const questionParts = [header[3].trim()];
    index += 1;

    while (index < inputLines.length && !isChoice(inputLines[index])) {
      const line = inputLines[index].trim();
      if (line) questionParts.push(line);
      index += 1;
    }

    const choices = choiceSymbols.map((symbol) => {
      if (!inputLines[index] || !inputLines[index].trim().startsWith(symbol)) {
        throw new Error(`Expected ${symbol} for ${unitNumber}-${questionNumber}`);
      }

      const parts = [inputLines[index].trim().replace(new RegExp(`^${symbol}\\s*`), "")];
      index += 1;

      while (
        index < inputLines.length &&
        !isChoice(inputLines[index]) &&
        !isAnswer(inputLines[index]) &&
        !isQuestionHeader(inputLines[index])
      ) {
        const line = inputLines[index].trim();
        if (line) parts.push(line);
        index += 1;
      }

      return normalizeInline(parts);
    });

    while (index < inputLines.length && !inputLines[index].trim()) {
      index += 1;
    }

    const answerLine = (inputLines[index] || "").trim();
    const answer = answerLine.match(/^정답:\s*([①②③④])(?:\s*해설:\s*(.*))?$/);
    if (!answer) {
      throw new Error(`Could not parse answer for ${unitNumber}-${questionNumber}`);
    }

    const explanationParts = [];
    if (answer[2]) explanationParts.push(answer[2]);
    index += 1;

    while (index < inputLines.length && !isQuestionHeader(inputLines[index])) {
      const line = inputLines[index].trim();
      const explanationLine = line.replace(/^해설:\s*/, "");
      if (explanationLine) explanationParts.push(explanationLine);
      index += 1;
    }

    if (!units.has(unitNumber)) units.set(unitNumber, []);
    units.get(unitNumber).push({
      id: `unit${unitNumber}-${String(questionNumber).padStart(2, "0")}`,
      question: normalizeInline(questionParts),
      choices,
      answerIndex: answerMap[answer[1]],
      explanation: normalizeInline(explanationParts)
    });
  }

  return units;
}

function isChoice(line) {
  return /^[①②③④]\s*/.test((line || "").trim());
}

function isAnswer(line) {
  return /^정답:\s*[①②③④]/.test((line || "").trim());
}

function isQuestionHeader(line) {
  return /^\d+-\d+\.\s*/.test((line || "").trim());
}

function normalizeInline(parts) {
  return parts
    .map((part) => part.trim())
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ");
}
