const tabButtons = document.querySelectorAll(".tabs");
const tabContents = document.querySelectorAll(".item");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    clearActiveTabs();
    clearActiveContents();
    button.classList.add("active");

    const correspondingContent = document.querySelector(`#${button.id}-detail`);
    if (correspondingContent) {
      correspondingContent.classList.add("active");
    }
  });
});

function clearActiveTabs() {
  tabButtons.forEach((button) => {
    button.classList.remove("active");
  });
}

function clearActiveContents() {
  tabContents.forEach((button) => {
    button.classList.remove("active");
  });
}
