// Get the weather forecast for the user's current location
function getWeatherForecast(latitude, longitude) {
    // Replace 'YOUR_API_KEY' with your actual weatherapi.com API key
    const apiKey = '8f18ba35dbe94dae83454619230509'; // Replace with your API key
    const weatherInfo = document.getElementById("weather-info");

    // Fetch weather data
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`)
        .then((response) => response.json())
        .then((data) => {
            const temperature = data.current.temp_c;
            const description = data.current.condition.text;
            const location = data.location.name;

            // Display weather information in the card
            weatherInfo.innerHTML = `Location: ${location}<br>Temperature: ${temperature}°C<br>Weather: ${description}`;
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = 'Unable to fetch weather data.';
        });
}

// Get the user's current location
function getCurrentLocation() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Call the function to get weather forecast with the obtained coordinates
            getWeatherForecast(latitude, longitude);
        }, (error) => {
            console.error('Error getting location:', error);
            document.getElementById("weather-info").innerHTML = 'Unable to retrieve location.';
        });
    } else {
        console.error('Geolocation is not available.');
        document.getElementById("weather-info").innerHTML = 'Geolocation is not available.';
    }
}

// Call the function to get the user's current location and weather forecast
getCurrentLocation();
