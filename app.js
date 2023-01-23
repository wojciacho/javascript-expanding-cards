const cards = document.querySelectorAll(".card");
const buttonEl = document.querySelector(".dark-mode");

let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  document.documentElement.classList.add("dark-theme");
  buttonEl.classList.remove("dark-theme");
  buttonEl.innerText = "Light Theme";
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  document.documentElement.classList.remove("dark-theme");
  buttonEl.classList.add("dark-theme");
  buttonEl.innerText = "Dark Theme";
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode();
}

buttonEl.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
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
