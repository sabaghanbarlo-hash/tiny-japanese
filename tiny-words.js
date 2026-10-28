// Small, dependency-free quiz interactions for Tiny Words.
document.addEventListener("click", (event) => {
  const button = event.target.closest(".word-opts button[data-option], .word-retry");
  if (!button) return;
  const quiz = button.closest(".word-quiz");
  if (!quiz) return;
  if (button.classList.contains("word-retry")) {
    quiz.querySelectorAll(".word-opts button").forEach((b) => { b.disabled = false; b.classList.remove("right", "wrong"); });
    quiz.querySelector(".word-feedback").textContent = "";
    button.hidden = true;
    return;
  }
  if (quiz.dataset.done === "true") return;
  quiz.dataset.done = "true";
  const answer = Number(quiz.dataset.answer), selected = Number(button.dataset.option);
  const correct = selected === answer;
  quiz.querySelectorAll(".word-opts button").forEach((b) => {
    b.disabled = true;
    if (Number(b.dataset.option) === answer) b.classList.add("right");
  });
  if (!correct) button.classList.add("wrong");
  quiz.querySelector(".word-feedback").textContent = `${correct ? "Correct! " : "Not quite. Try again if you like. "}${quiz.dataset.explanation}`;
  quiz.querySelector(".word-retry").hidden = false;
  // Enable another attempt when the visitor presses Try again.
  button.closest(".word-quiz").querySelector(".word-retry").addEventListener("click", () => { quiz.dataset.done = "false"; }, { once: true });
});
