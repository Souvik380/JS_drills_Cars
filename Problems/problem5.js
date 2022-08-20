
function carDetails(inventory){
    let arr=[]
    let count=0

    for(let i=0;i<inventory.length;i++){
        arr.push(inventory[i].car_year)
    }
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]<2000){
            count+=1
        }
    }
    return count
}

module.exports=carDetails
