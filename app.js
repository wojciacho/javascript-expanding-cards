const cards = document.querySelectorAll(".card");
const button = document.querySelector(".dark-mode");

button.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
  if (document.documentElement.classList.contains("dark-theme")) {
    button.innerText = "Light theme";
  } else {
    button.innerText = "Dark theme";
  }
});

cards.forEach((item) => {
  item.addEventListener("click", () => {
    cards.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});
