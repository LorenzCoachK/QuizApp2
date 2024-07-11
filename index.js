// phew… not a lot going on here. Please add some code!
// document.querySelectorAll(".card__button-answer").forEach((button) => {
//   button.addEventListener("click", () => {
//     const answer = button.nextElementSibling;
//     answer.classList.toggle("card__answer--active");
//     button.textContent = answer.classList.contains("card__answer--active")
//       ? "Hide answer"
//       : "Show answer";
//   });
// });

let bookmarks = [];
// Feature to update bookmarks
function updateBookmarks() {
  const bookmarkedSection = document.querySelector("bookmarkedCards");
  if (bookmarkedSection) {
    bookmarkedSection.innerHTML = bookmarks
      .map((bookmark) => bookmark.cardHTML)
      .join("");
    addAnswerToggleEventListeners();
    addBookmarkToggleEventlisteners();
  }
}

// function to add answer toggle event-listener
function addAnswerToggleEventListeners() {
  document.querySelectorAll(".card__button-answer").forEach((button) => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      if (answer.style.display === "block") {
        answer.style.display = "none";
        button.textContent = "Show answer";
      } else {
        answer.style.display = "block";
        button.textContent = "Hide answer";
      }
    });
  });
}

// function to add Bookmark-toggle.listener
function addBookmarkToggleEventlisteners() {
  document.querySelectorAll(".bookmark").forEach((button, index) => {
    button.addEventListener("click", () => {
      const card = button.closest(".card");
      const question = card.querySelector(".card__question").textContent;

      // toggle bookmark button color
      button.classList.toggle("bookmark--active");

      // add or remove bookmark buton color
      if (button.classList.contains("bookmark--active")) {
        bookmarks.push({ cardHTML: card.outerHTML, question });
      } else {
        bookmarks = bookmarks.filter(
          (bookmark) => bookmark.question !== question
        );
      }
      // update bookmarks
      updateBookmarks();
    });
  });
}
// add initial eventlistener
addAnswerToggleEventListeners();
addBookmarkToggleEventlisteners();
