

const apiKey = '4822f1a008820050312b41e40d586afa'; 

function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    document.getElementById('city').textContent = cityName;
    document.getElementById('temperature').textContent = temperature + '°C';
    document.getElementById('description').textContent = description;
}

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city-input').value.trim();
    if (city) {
        getWeather(city);
    }
});
