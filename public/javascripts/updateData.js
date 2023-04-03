const getDataToUpdate = async(data)=>{
    const oldData = await data

    oldData.forEach(old => {
        updateAPI(old._id,old.city);
    })

    appInformation.innerHTML = ''
    reloadData()
}