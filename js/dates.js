let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let date = document.querySelector("#date");
let day = now.getDay();
let hours = now.getHours();
let minutes = now.getMinutes();

date.innerHTML = `${days[day]} ${hours}:${minutes}`;

if (hours.length === 0) {
  hours = `0${hours}`;
}

if (minutes.length === 0) {
  minutes = `0${minutes}`;
}
