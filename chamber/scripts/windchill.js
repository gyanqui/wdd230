const currentTemp = document.querySelector('#current-temp');
const weatherFigure = document.querySelector('.weather-figure');
const captionDesc = document.querySelector('.fig-p');
const windSpeedElement = document.getElementById('windSpeed');
const windChillElement = document.getElementById('windChill');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=cusco&units=metric&appid=b0560e33a2a4e47b4de1d7ac806338f4';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw new Error('Error fetching weather data:', response.status);
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function capitalizeEachWord(string) {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function displayResults(weatherData) {
    const celsiusTemp = Math.round(weatherData.main.temp);
    const kmPerHour = (weatherData.wind.speed * 3.6).toFixed(1);

    currentTemp.innerHTML = `<strong>${celsiusTemp}</strong>°C`;

    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    const desc = capitalizeEachWord(weatherData.weather[0].description);

    const weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('id', 'weather-icon');

    weatherFigure.appendChild(weatherIcon);
    captionDesc.textContent = desc;

    const windSpeed = kmPerHour;
    const temperature = celsiusTemp;
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed).toFixed(1);
        windChillElement.textContent = `${windChill}°C`;
    } else {
        windChillElement.textContent = 'N/A';
    }

    windSpeedElement.textContent = `${windSpeed} km/h`;
}

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}
