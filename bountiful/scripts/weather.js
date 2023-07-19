const currentweather = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=b0560e33a2a4e47b4de1d7ac806338f4';
const forecastweather = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&units=imperial&appid=b0560e33a2a4e47b4de1d7ac806338f4';

async function displayCurrentWeather(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      await createCurrentWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

async function displayWeatherForecast(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      await createWeatherForecastCard(data, 10);
      await createWeatherForecastCard(data, 18);
      await createWeatherForecastCard(data, 26);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

async function createCurrentWeather(weatherData) {
  const weatherSummary = document.querySelector('.weatherScript');

  let currentWeatherSection = document.createElement('div');
  currentWeatherSection.classList.add('currentWeather');

  let weatherIcon = document.createElement('img');
  let temperature = document.createElement('p');
  let weatherDesc = document.createElement('p');
  let humidity = document.createElement('p');

  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);

  const t = weatherData.main.temp;
  const h = weatherData.main.humidity;

  temperature.innerHTML = `${t.toFixed(0)} &deg;F`;
  weatherDesc.textContent = desc;
  humidity.innerHTML = `Humedity ${h} %`;

  currentWeatherSection.appendChild(weatherIcon);
  currentWeatherSection.appendChild(weatherDesc);
  currentWeatherSection.appendChild(temperature);
  currentWeatherSection.appendChild(humidity);

  weatherSummary.appendChild(currentWeatherSection);
}

async function createWeatherForecastCard(forecastData, index) {
  const weatherSummary = document.querySelector('.weatherScript');

  let weatherForecastSection = document.createElement('div');
  weatherForecastSection.classList.add('weatherForecast');

  let cardDay = document.createElement('p');
  let cardDesc = document.createElement('p');
  let cardTemp = document.createElement('p');

  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const d = new Date(forecastData.list[index].dt_txt);
  let day = weekday[d.getDay()];

  cardDay.innerHTML = day;

  const desc = forecastData.list[index].weather[0].description;
  cardDesc.textContent = desc;

  cardTemp.innerHTML = `${forecastData.list[index].main.temp.toFixed(0)} &deg;F`;
  weatherForecastSection.appendChild(cardDay);
  weatherForecastSection.appendChild(cardDesc);
  weatherForecastSection.appendChild(cardTemp);

  weatherSummary.appendChild(weatherForecastSection);
}

displayCurrentWeather(currentweather);
displayWeatherForecast(forecastweather);