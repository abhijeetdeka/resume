// script.js
document.getElementById("getWeatherBtn").addEventListener("click", getWeather);

function getWeather() {
    const location = document.getElementById("location").value;
    
    if (!location) {
        alert("Please enter a location.");
        return;
    }

    const apiKey = "bf02aea398bc4ed1aa134155252802";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert("Location not found. Please try again.");
            } else {
                const cityName = data.location.name;
                const temperature = data.current.temp_c;
                const description = data.current.condition.text;
                
                document.getElementById("cityName").textContent = `Weather in ${cityName}`;
                document.getElementById("temperature").textContent = `Temperature: ${temperature}°C`;
                document.getElementById("description").textContent = `Condition: ${description}`;
            }
        })
        .catch(error => {
            alert("There was an error fetching the weather data. Please try again.");
        });
}
