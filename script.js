function checkAnswer(answer, resultId, correctAnswer) {

  const result = document.getElementById(resultId);
  const quiz = result.closest(".quiz");
  const explanation = quiz.querySelector(".quiz-explanation");

  if (answer === correctAnswer) 
  {
    result.textContent = "大正解！";
    result.className = "correct";
  } 
  else 
  {
    result.textContent = "残念、不正解";
    result.className = "incorrect";
  }

  explanation.classList.add("show");
}