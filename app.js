(function () {
  const STORAGE_KEY = "examQuizProgress.v1";
  const questionUnits = window.QUESTION_UNITS || [];
  const state = {
    view: "all",
    progress: loadProgress()
  };

  const unitNav = document.querySelector("#unitNav");
  const questionList = document.querySelector("#questionList");
  const emptyMessage = document.querySelector("#emptyMessage");
  const scoreText = document.querySelector("#scoreText");
  const answeredText = document.querySelector("#answeredText");
  const wrongText = document.querySelector("#wrongText");
  const viewLabel = document.querySelector("#viewLabel");
  const viewTitle = document.querySelector("#viewTitle");
  const resetButton = document.querySelector("#resetButton");

  const allQuestions = questionUnits.flatMap((unit) =>
    unit.questions.map((question, index) => ({
      ...question,
      unitId: unit.id,
      unitTitle: unit.title,
      number: index + 1
    }))
  );

  render();

  resetButton.addEventListener("click", function () {
    const shouldReset = window.confirm("모든 풀이 기록을 리셋할까요?");
    if (!shouldReset) return;

    state.progress = {};
    saveProgress();
    render();
  });

  function render() {
    renderNavigation();
    renderSummary();
    renderQuestions();
  }

  function renderNavigation() {
    const navItems = [
      { id: "all", label: "전체 문제", count: allQuestions.length },
      ...questionUnits.map((unit) => ({
        id: unit.id,
        label: unit.title,
        count: unit.questions.length
      })),
      { id: "wrong", label: "틀린 문제만", count: getWrongQuestions().length }
    ];

    unitNav.innerHTML = "";

    navItems.forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "unit-button";
      button.classList.toggle("active", state.view === item.id);
      button.innerHTML = `
        <span>${escapeHtml(item.label)}</span>
        <span class="unit-count">${item.count}문제</span>
      `;
      button.addEventListener("click", function () {
        state.view = item.id;
        render();
      });
      unitNav.appendChild(button);
    });
  }

  function renderSummary() {
    const answered = Object.keys(state.progress).length;
    const correct = Object.values(state.progress).filter((item) => item.isCorrect).length;
    const wrong = Object.values(state.progress).filter((item) => !item.isCorrect).length;

    scoreText.textContent = `${correct} / ${allQuestions.length} 정답`;
    answeredText.textContent = `푼 문제 ${answered}개`;
    wrongText.textContent = `틀린 문제 ${wrong}개`;

    if (state.view === "all") {
      viewLabel.textContent = "전체";
      viewTitle.textContent = "전체 문제";
      return;
    }

    if (state.view === "wrong") {
      viewLabel.textContent = "오답";
      viewTitle.textContent = "틀린 문제만";
      return;
    }

    const unit = questionUnits.find((item) => item.id === state.view);
    viewLabel.textContent = "단원별";
    viewTitle.textContent = unit ? unit.title : "문제";
  }

  function renderQuestions() {
    const questions = getVisibleQuestions();
    questionList.innerHTML = "";
    emptyMessage.hidden = questions.length > 0;

    questions.forEach((question) => {
      questionList.appendChild(createQuestionCard(question));
    });
  }

  function createQuestionCard(question) {
    const saved = state.progress[question.id];
    const card = document.createElement("article");
    card.className = "question-card";

    const statusClass = saved ? (saved.isCorrect ? "correct" : "wrong") : "";
    const statusText = saved ? (saved.isCorrect ? "정답" : "오답") : "미풀이";

    card.innerHTML = `
      <div class="question-meta">
        <span>${escapeHtml(question.unitTitle)}</span>
        <span>문제 ${question.number}</span>
        <span class="status-pill ${statusClass}">${statusText}</span>
      </div>
      <p class="question-text">${escapeHtml(question.question)}</p>
      <div class="options"></div>
      <div class="result"></div>
    `;

    const options = card.querySelector(".options");
    const result = card.querySelector(".result");

    question.choices.forEach((choice, index) => {
      const option = document.createElement("button");
      const isSelected = saved && saved.selectedIndex === index;
      const isAnswer = saved && question.answerIndex === index;

      option.type = "button";
      option.className = "option-button";
      option.classList.toggle("selected", Boolean(isSelected));
      option.classList.toggle("correct", Boolean(isSelected && saved.isCorrect));
      option.classList.toggle("wrong", Boolean(isSelected && !saved.isCorrect));
      option.classList.toggle("answer", Boolean(isAnswer));
      option.innerHTML = `
        <span class="option-index">${index + 1}</span>
        <span>${escapeHtml(choice)}</span>
      `;

      option.addEventListener("click", function () {
        answerQuestion(question, index);
      });

      options.appendChild(option);
    });

    if (saved) {
      const answerText = question.choices[question.answerIndex];
      result.innerHTML = `
        <div class="result-box ${saved.isCorrect ? "correct" : "wrong"}">
          <p class="result-title">${saved.isCorrect ? "맞았습니다." : "틀렸습니다."} 정답: ${question.answerIndex + 1}. ${escapeHtml(answerText)}</p>
          <p class="result-explanation">${escapeHtml(question.explanation)}</p>
        </div>
      `;
    }

    return card;
  }

  function answerQuestion(question, selectedIndex) {
    state.progress[question.id] = {
      selectedIndex,
      isCorrect: selectedIndex === question.answerIndex
    };
    saveProgress();
    render();
  }

  function getVisibleQuestions() {
    if (state.view === "all") return allQuestions;
    if (state.view === "wrong") return getWrongQuestions();
    return allQuestions.filter((question) => question.unitId === state.view);
  }

  function getWrongQuestions() {
    return allQuestions.filter((question) => {
      const saved = state.progress[question.id];
      return saved && !saved.isCorrect;
    });
  }

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (error) {
      return {};
    }
  }

  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
})();
