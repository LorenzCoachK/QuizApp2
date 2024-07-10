// phew… not a lot going on here. Please add some code!
document.querySelectorAll(".card__button-answer").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.classList.toggle("card__answer--active");
    button.textContent = answer.classList.contains("card__answer--active")
      ? "Hide answer"
      : "Show answer";
  });
});
