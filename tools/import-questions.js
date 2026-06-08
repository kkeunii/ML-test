const fs = require("fs");
const path = require("path");

const sourcePath = process.argv[2];

if (!sourcePath) {
  console.error("Usage: node tools/import-questions.js <pasted-text.txt>");
  process.exit(1);
}

const rootDir = path.resolve(__dirname, "..");
const questionsDir = path.join(rootDir, "questions");
const text = fs.readFileSync(sourcePath, "utf8").replace(/\r\n/g, "\n");
const lines = text.split("\n").map((line) => line.trimEnd());
const answerMap = {
  "①": 0,
  "②": 1,
  "③": 2,
  "④": 3
};
const choiceSymbols = Object.keys(answerMap);
const units = new Map();

let index = 0;

while (index < lines.length) {
  const header = lines[index].trim().match(/^\[(\d+) 주차-(\d+)\]\s*(.*)$/);

  if (!header) {
    index += 1;
    continue;
  }

  const unitNumber = Number(header[1]);
  const questionNumber = Number(header[2]);
  const questionParts = [header[3].trim()];
  index += 1;

  while (index < lines.length && !isChoice(lines[index])) {
    const line = lines[index].trim();
    if (line) questionParts.push(line);
    index += 1;
  }

  const choices = choiceSymbols.map((symbol) => {
    if (!lines[index] || !lines[index].trim().startsWith(symbol)) {
      throw new Error(`Expected ${symbol} for unit ${unitNumber}, question ${questionNumber}`);
    }

    const parts = [lines[index].trim().replace(new RegExp(`^${symbol}\\s*`), "")];
    index += 1;

    while (
      index < lines.length &&
      !isChoice(lines[index]) &&
      !isAnswer(lines[index]) &&
      !isQuestionHeader(lines[index]) &&
      !isUnitHeader(lines[index])
    ) {
      const line = lines[index].trim();
      if (line) parts.push(line);
      index += 1;
    }

    return normalizeInline(parts);
  });

  if (!isAnswer(lines[index])) {
    throw new Error(`Expected answer for unit ${unitNumber}, question ${questionNumber}`);
  }

  const answer = lines[index].trim().match(/^정답:\s*([①②③④])\s*해설:\s*(.*)$/);
  if (!answer) {
    throw new Error(`Could not parse answer for unit ${unitNumber}, question ${questionNumber}`);
  }

  const explanationParts = [answer[2]];
  index += 1;

  while (index < lines.length && !isQuestionHeader(lines[index]) && !isUnitHeader(lines[index])) {
    const line = lines[index].trim();
    if (line) explanationParts.push(line);
    index += 1;
  }

  const unitKey = `unit${unitNumber}`;
  if (!units.has(unitKey)) {
    units.set(unitKey, {
      id: unitKey,
      title: `${unitNumber}단원`,
      questions: []
    });
  }

  units.get(unitKey).questions.push({
    id: `${unitKey}-${String(questionNumber).padStart(2, "0")}`,
    question: normalizeQuestion(questionParts),
    choices,
    answerIndex: answerMap[answer[1]],
    explanation: normalizeInline(explanationParts)
  });
}

for (const [unitKey, unit] of units) {
  const filePath = path.join(questionsDir, `${unitKey}.js`);
  const contents = [
    "window.QUESTION_UNITS = window.QUESTION_UNITS || [];",
    "",
    `window.QUESTION_UNITS.push(${JSON.stringify(unit, null, 2)});`,
    ""
  ].join("\n");

  fs.writeFileSync(filePath, contents);
}

for (const unit of units.values()) {
  console.log(`${unit.title}: ${unit.questions.length}문제`);
}

function isChoice(line) {
  return /^[①②③④]\s*/.test(line.trim());
}

function isAnswer(line) {
  return /^정답:\s*[①②③④]\s*해설:/.test((line || "").trim());
}

function isQuestionHeader(line) {
  return /^\[\d+ 주차-\d+\]/.test((line || "").trim());
}

function isUnitHeader(line) {
  return /^\d+ 주차 문제$/.test((line || "").trim());
}

function normalizeInline(parts) {
  return parts
    .map((part) => part.trim())
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ");
}

function normalizeQuestion(parts) {
  if (parts.length === 1) return normalizeInline(parts);

  const [title, ...body] = parts;
  const hasCodeLikeBody = body.some((line) => /[=()[\]{}]|^from |^import |^\w+\./.test(line));
  if (hasCodeLikeBody) {
    return [normalizeInline([title]), ...body].join("\n");
  }

  return normalizeInline(parts);
}
