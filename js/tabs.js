const tabs = document.querySelectorAll(".foodTabs");
const items = document.querySelectorAll(".foodItem");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    // Remove active from all tabs
    tabs.forEach((t) => t.classList.remove("active"));

    // Hide all content
    items.forEach((item) => item.classList.remove("active"));

    // Add active to clicked tab
    this.classList.add("active");

    // Show matching content
    const target = this.id + "-details";
    document.getElementById(target).classList.add("active");
  });
});
