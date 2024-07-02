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
