const updateTimeAndDay = () => {
  const currentTimeUTC = document.getElementById("currentTimeUTC");
  const currentDay = document.getElementById("currentDay");

  const now = new Date();
  currentTimeUTC.textContent = now.toISOString().split("T")[1].split(".")[0];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  currentDay.textContent = days[now.getUTCDay()];
};
setInterval(updateTimeAndDay, 1000);
updateTimeAndDay();

// Tooggle theme
let switchButton = document.querySelector('input[type="checkbox"]');
let modeText = document.querySelector(".mode");

console.log(switchButton);

function darkMode() {
  modeText.textContent = "Dark Mode";
}
function lightMode() {
  modeText.textContent = "Light Mode";
}

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("dark-mode", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("dark-mode", "light");
    lightMode();
  }
}

switchButton.addEventListener("click", switchTheme);
