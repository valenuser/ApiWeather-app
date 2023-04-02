const appInformation = document.getElementById('appInformation')


const cardStructure = (data) =>{
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="cardWeather">
        <div class="headCard">
            <p class="titleCard">${data.city}</p><i class="fa-solid fa-location-dot"></i>
        </div>
        <div id="containerIcon">
            <img src="${data.icon}" alt="" id="iconCard">
        </div>
        <div class="dataCard">
            <p>Country: ${data.country}</p>
            <p>Temperature:${data.temperature}º</p>
            <p>Humidity: ${data.humidity}%</p>
        </div>
        <div id="dateCard">
            <p>Date:${data.localTime}</p>
        </div>
    </div> `

    return div
}

const loadCard = (data)=>{
    if(data.length == 0){
        appInformation.innerHTML = '<p class="MensajeDBVacia">Here you will see the added cities</p>'
    }else{
        data.forEach((d)=>{
            appInformation.append(cardStructure(d))
        })
    }
}