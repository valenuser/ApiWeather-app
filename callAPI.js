



const getAPI = (city) =>{
    const URL = 'http://api.weatherapi.com/v1/current.json?key='+env.config().parsed.apiKey+'&q='+city+'&aqi=yes'
    fetch(URL)
        .then(response =>  addData(response.json()))
        .catch(error => console.log(error))
}    


