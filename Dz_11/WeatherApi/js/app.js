const dom = {
    input: document.querySelector(".input_text"),
    button: document.querySelector(".submit"),

};
const form = {
    city: document.querySelector(".city"),
    temp: document.querySelector(".temp"),
    feels_like: document.querySelector(".feels-like"),
    condition: document.querySelector(".condition"),
    wind: document.querySelector(".wind"),
    humidity: document.querySelector(".humidity"),
    pressure: document.querySelector(".pressure"),
    visibility: document.querySelector(".visibility"),
}

const API_KEY = "17bf105a13d90eb3adeab683a1b260c8";

dom.button.addEventListener("click", () => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${dom.input.value}&appid=${API_KEY}`
    )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderWeather(data);
        })

        .catch(err => {
            alert("Wrong city name, enter the new one.");
            dom.input.value = "";
        });
});

renderWeather = (d) => {
    const cityName = d.name;
    const tempValue = (d.main.temp - 273).toFixed(1);
    const feelsValue = (d.main.feels_like - 273).toFixed(1);
    const conditionValue = d.weather[0].description;
    const windValue = d.wind.speed;
    const humidityValue = d.main.humidity;
    const pressureValue = d.main.pressure;
    const visibilityValue = (d.visibility / 1000).toFixed(1);
    
    form.city.innerHTML = `${cityName}`;
    form.temp.innerHTML = `${tempValue}°C`;
    form.condition.innerHTML = `${conditionValue}`;
    form.feels_like.innerHTML = `Feels like: ${feelsValue}°C`;
    form.wind.innerHTML = `Wind: ${windValue}m/s`;
    form.humidity.innerHTML = `Humidity: ${humidityValue}%`;
    form.pressure.innerHTML = `Pressure: ${pressureValue}hPa`;
    form.visibility.innerHTML = `Visibility: ${visibilityValue}km`;
    dom.input.value = "";
}
