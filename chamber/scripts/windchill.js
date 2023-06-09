// Get the temperature and wind speed values
const temperature = 8; 
const windSpeed = 8; 

// Check if the values meet the specification limits for wind chill calculation
const elements = {
    temperature: document.getElementById("temperature"),
    windSpeed: document.getElementById("wind-speed"),
    windChill: document.getElementById("wind-chill")
};

elements.temperature.textContent = temperature;
elements.windSpeed.textContent = windSpeed;

elements.windChill.textContent = (temperature <= 10 && windSpeed > 4.8) ? calculateWindChill(temperature, windSpeed).toFixed(1) : "N/A";

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}