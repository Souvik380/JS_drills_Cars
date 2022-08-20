function carDetails(inventory){
    let arr=[]
    for(let i=0;i<inventory.length;i++){
        arr.push(inventory[i].car_model)
    }

    arr.sort()
    return arr
}

module.exports=carDetails