const addData = async(data)=>{
    const dataID = await data

    const dataCity = {
        icon:dataID.current.condition.icon,
        country:dataID.location.country,
        city:dataID.location.name,
        temperature:dataID.current.temp_c,
        humidity:dataID.current.humidity,
        localTime:dataID.location.localtime,
        region:dataID.location.region
    }
    //console.log(dataCity);
    PostCity(dataCity)
}

const fetchDataUpdated = async(id,data)=>{
    const dataID = await data
    console.log(dataID);
    const newDataCity = {
        icon:dataID.current.condition.icon,
        country:dataID.location.country,
        city:dataID.location.name,
        temperature:dataID.current.temp_c,
        humidity:dataID.current.humidity,
        localTime:dataID.location.localtime,
        region:dataID.location.region
    }

    UpdateCity(id,newDataCity)
}


const getAPI = (city) =>{
    const URL = 'http://api.weatherapi.com/v1/current.json?key=4965630f88784ec399585713233103&q='+city+'&aqi=yes'
    fetch(URL)
        .then(response => addData(response.json()))
        .catch(error => console.log(error))
}    


const updateAPI = (id,city) =>{
    const URL = 'http://api.weatherapi.com/v1/current.json?key=4965630f88784ec399585713233103&q='+city+'&aqi=yes'
    fetch(URL)
        .then(response =>  fetchDataUpdated(id,response.json()))
        .catch(error => console.log(error))
}


