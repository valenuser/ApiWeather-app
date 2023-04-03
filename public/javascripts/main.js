
const newCity = document.getElementById('newCity')
const BackMainButton = document.getElementById('BackMainButton')
const sectionMain = document.getElementById('Main-APP')
const sectionNewCityForm = document.getElementById('addCity-Form')
const addCityButton = document.getElementById('addCityButton')
const NameNewCity = document.getElementById('NameNewCity')
const ButtonRefresh = document.getElementById('ButtonRefresh')


BackMainButton.addEventListener('click',()=>{
    sectionMain.style.display = 'flex'
    sectionNewCityForm.style.display = 'none'
})


newCity.addEventListener('click',()=>{
    sectionMain.style.display = 'none'
    sectionNewCityForm.style.display = 'flex'
})

//button add new city in the app

addCityButton.addEventListener('click',()=>{
    getAPI(NameNewCity.value)
    NameNewCity.value = ''
})

//button refresh all data

ButtonRefresh.addEventListener('click',() =>{
    updateData()
})