// Get the temperature and wind speed values
const temperature = 8; 
const windSpeed = 8; 

// Check if the values meet the specification limits for wind chill calculation
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);

    document.getElementById("temperature").textContent = temperature;
    document.getElementById("wind-speed").textContent = windSpeed;
    document.getElementById("wind-chill").textContent = windChill.toFixed(1);
} else {
    document.getElementById("temperature").textContent = temperature;
    document.getElementById("wind-speed").textContent = windSpeed;
    document.getElementById("wind-chill").textContent = "N/A";
}

function calculateWindChill(temperature, windSpeed) {
    const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    return windChill;
}