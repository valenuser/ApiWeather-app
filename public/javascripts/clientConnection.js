axios.get('/api')
    .then(response => loadCard(response.data))
    .catch(error => console.log(error))

const reloadData = ()=>{
    axios.get('/api')
    .then(response => loadCard(response.data))
    .catch(error => console.log(error))  
}

const PostCity = (data) =>{
    console.log(data);
    axios.post('/api',data)
        .then((response)=>{console.log(response);})
        .catch((error)=>{console.log(error);})

    appInformation.innerHTML = ''
    reloadData()
}