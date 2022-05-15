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
}

function showCity(event) {
  event.preventDefault();
  let city = input.value;
  title.innerHTML = input.value;
  let units = "metric";
  let apiKey = "0db8ad6210652fd3a85cc58f74987b5a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showCityTemperature);
}

form.addEventListener("submit", showCity);

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

function showPosition(position) {
  console.log(position);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
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
