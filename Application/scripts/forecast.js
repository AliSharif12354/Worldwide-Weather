const key = "fVg1CpPmDX9d0HAaeIa7bzcDdKlGeBUk"

const getWeather = async (Key) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${Key}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}

const getCity = async(city) => {
    const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(baseURL + query);
    const data = await response.json();
    return data[0]
}

/*getCity("Toronto")
    .then(data => {getWeather(data.Key).then(data => {console.log(data)})})
    .catch(err => {console.log(err);})*/


