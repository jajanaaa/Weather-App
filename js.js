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

if (hours < 10) {
  hours = `0${hours}`;
}

if (minutes < 10) {
  minutes = `0${minutes}`;
}

date.innerHTML = `${days[day]} ${hours}:${minutes}`;
//

let input = document.querySelector(".city");
let form = document.querySelector("#location-form");
let title = document.querySelector("#title");
let temperatureElement = document.querySelector("#weather-temperature");
let weatherDescription = document.querySelector("#weather-description");
let cityHumidity = document.querySelector("#humidity");
let cityWind = document.querySelector("#wind");
let weatherIcon = document.querySelector("#weather-icon");

function showCityTemperature(response) {
  console.log(response);

  temperatureC = Math.round(response.data.main.temp);
  //  let temp = Math.round(response.data.main.temp);
  let humidity = response.data.main.humidity;
  let description = response.data.weather[0].main;
  let wind = Math.round(response.data.wind.speed);
  let weather = response.data.weather[0].icon;

  temperatureElement.innerHTML = `${temperatureC}`;
  weatherDescription.innerHTML = `${description}`;
  cityHumidity.innerHTML = `Humidity: ${humidity}%`;
  cityWind.innerHTML = `Wind: ${wind} km/h`;
  weatherIcon.src = `http://openweathermap.org/img/wn/${weather}@2x.png`;
  getForecast(response.data.coord);
}

function showCity(event) {
  event.preventDefault();
  city = input.value;
  title.innerHTML = input.value;
  let units = "metric";
  let apiKey = "0db8ad6210652fd3a85cc58f74987b5a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showCityTemperature);
}

form.addEventListener("submit", showCity);

//

let button = document.querySelector("#current-location");

function showTemperature(response) {
  console.log(response);
  temperatureC = Math.round(response.data.main.temp);
  let humidity = response.data.main.humidity;
  let description = response.data.weather[0].main;
  let wind = Math.round(response.data.wind.speed);
  let cityName = response.data.name;
  let weather = response.data.weather[0].icon;
  console.log(response.data.name);

  title.innerHTML = `${cityName}`;
  temperatureElement.innerHTML = `${temperatureC}`;
  weatherDescription.innerHTML = `${description}`;
  cityHumidity.innerHTML = `Humidity: ${humidity}%`;
  cityWind.innerHTML = `Wind: ${wind} km/h`;
  weatherIcon.src = `http://openweathermap.org/img/wn/${weather}@2x.png`;
}

let latitude = null;
let longitude = null;

function showPosition(position) {
  console.log(position);
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "0db8ad6210652fd3a85cc58f74987b5a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showTemperature);
}

function buttonShowPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

button.addEventListener("click", buttonShowPosition);

//

linkC = document.querySelector("#link-c");
linkF = document.querySelector("#link-f");

let temperatureC = null;

function showF(event) {
  // multiply by 1.8 (or 9/5) and add 32.
  event.preventDefault();
  linkC.classList.remove("inactive");
  linkF.classList.add("inactive");
  tempF = Math.round(temperatureC * 1.8 + 32);
  temperatureElement.innerHTML = `${tempF}`;
}

function showC(event) {
  event.preventDefault();
  linkC.classList.add("inactive");
  linkF.classList.remove("inactive");
  temperatureElement.innerHTML = temperatureC;
}

linkF.addEventListener("click", showF);
linkC.addEventListener("click", showC);

// Forecast

//function showForecastCity(event) {
//  event.preventDefault();
//  city = input.value;
//  latitude = coords.latitude;
//  longitude = coords.longitude;
//  let units = "metric";
//  let apiKey = "0db8ad6210652fd3a85cc58f74987b5a";
//  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
// console.log(apiUrl);
//}

//form.addEventListener("submit", showForecastCity);

forecastDays = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

weekDay1 = document.querySelector("#week-day1");
weekDay2 = document.querySelector("#week-day2");
weekDay3 = document.querySelector("#week-day3");
weekDay4 = document.querySelector("#week-day4");
weekDay5 = document.querySelector("#week-day5");

function changeDays() {
  weekDay = [
    `${forecastDays[day + 1]}`,
    `${forecastDays[day + 2]}`,
    `${forecastDays[day + 3]}`,
    `${forecastDays[day + 4]}`,
    `${forecastDays[day + 5]}`,
  ];

  weekDay1.innerHTML = weekDay[0];
  weekDay2.innerHTML = weekDay[1];
  weekDay3.innerHTML = weekDay[2];
  weekDay4.innerHTML = weekDay[3];
  weekDay5.innerHTML = weekDay[4];
  console.log(weekDay[4]);
}

changeDays();

function showForecast(response) {
  console.log(response.data);
  console.log(response.data.list[0].main.temp_min);
  console.log(response.data.list[0].main.temp_max);
  //days[day]
  console.log(`response.data.list${days[day + 1]}.main.temp_max`);
  weekDay = [
    `${days[day + 1]}`,
    `${days[day + 2]}`,
    `${days[day + 3]}`,
    `${days[day + 4]}`,
    `${days[day + 5]}`,
  ];
  console.log(weekDay);
  weekDay1.innerHTML = days[day + 1];
}

function getForecast(coordinates) {
  console.log(coordinates);
  latitude = coordinates.lat;
  longitude = coordinates.lon;
  let units = "metric";
  let apiKey = "0db8ad6210652fd3a85cc58f74987b5a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showForecast);
}
