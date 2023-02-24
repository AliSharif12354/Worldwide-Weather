const form = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')

form.addEventListener('submit', e => {
    e.preventDefault();

    const city = form.city.value.trim();
    form.reset();

    updateCity(city).then(data => {
        updateUI(data);
    }).catch(err => {
        console.log(err);
    })
})

const updateCity = async (city) => {

    //Async function, use await
    const cityDetails = await getCity(city)
    const weatherDetails = await getWeather(cityDetails.Key)
    return {
        cityDetails: cityDetails,
        weatherDetails: weatherDetails
    }
}

const updateUI = data => {
    const city = data.cityDetails
    const weather = data.weatherDetails

    // Update city and weather information
    details.innerHTML = `
        <h5 class="my-3">${city.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `
    card.classList.remove('d-none')

    //Add either night or day image

    if(data.weatherDetails.IsDayTime) {
        time.src = 'icons/day.svg'
    }
    else {
        time.src = 'icons/night.svg'
    }

    // Set icon
    icon.src = `icons/icons/${weather.WeatherIcon}.svg`
}