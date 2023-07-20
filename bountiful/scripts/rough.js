const currentweather = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=db9906a97dca16acb8595cd219ca129b';

const forecastweather = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&units=imperial&appid=db9906a97dca16acb8595cd219ca129b';

async function displayCurrentWeather(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
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
            // console.log(data);
            await createWeatherForecast();
            await createWeatherForecastCard(data, 10); // taking forecast at 3pm for Day Icons instead of night
            await createWeatherForecastCard(data, 18);
            await createWeatherForecastCard(data, 26);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function createCurrentWeather (weatherData) {
    const weatherSummary = document.querySelector('.weatherScript');
    const currentWeatherSection = document.createElement('div');

    let h3 = document.createElement('h3');
    let weatherIcon = document.createElement('img');
    let temperature = document.createElement('p');
    let weatherDesc = document.createElement('p');
    let humidity = document.createElement('p');

    h3.textContent = `Today`;

    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    const t = weatherData.main.temp;
    const h = weatherData.main.humidity;

    temperature.innerHTML = `${t.toFixed(0)} &deg;F`;
    weatherDesc.textContent = desc;
    humidity.innerHTML = `💧 ${h} %`;

    currentWeatherSection.appendChild(h3);
    currentWeatherSection.appendChild(weatherIcon);
    currentWeatherSection.appendChild(weatherDesc);
    currentWeatherSection.appendChild(temperature);
    currentWeatherSection.appendChild(humidity);

    weatherSummary.appendChild(currentWeatherSection);
}

async function createWeatherForecast () {
    const weatherSummary = document.querySelector('.weatherScript');
    const forecastWeatherSection = document.createElement('div');
    forecastWeatherSection.setAttribute('class',"weatherForecast");

    let h3 = document.createElement('h3');

    h3.textContent = `3-Day Forecast`;
    forecastWeatherSection.appendChild(h3);
    weatherSummary.appendChild(forecastWeatherSection);
}

async function createWeatherForecastCard (forecastData, index) {
    const weatherForecastSection = document.querySelector('.weatherForecast')
    const weatherForecastCard = document.createElement('div');

    let h4 = document.createElement('h4');
    let cardIcon = document.createElement('img');
    let cardTemp = document.createElement('p');

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d = new Date(forecastData.list[index].dt_txt);
    let day = weekday[d.getDay()];

    h4.innerHTML = day;

    const icon = `https://openweathermap.org/img/wn/${forecastData.list[index].weather[0].icon}@2x.png`;
    const desc = forecastData.list[index].weather[0].description;
    cardIcon.setAttribute('src', icon);
    cardIcon.setAttribute('alt', desc);

    cardTemp.innerHTML = `${forecastData.list[index].main.temp.toFixed(0)} &deg;F`;
    weatherForecastCard.appendChild(h4);
    weatherForecastCard.appendChild(cardIcon);
    weatherForecastCard.appendChild(cardTemp);

    weatherForecastSection.appendChild(weatherForecastCard);
}

displayCurrentWeather(currentweather);

displayWeatherForecast(forecastweather);