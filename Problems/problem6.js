
function carDetails(inventory){
    let arr=[]
    for(let i=0;i<inventory.length;i++){
        if(inventory[i]==="BMW" || inventory[i]==="Audi"){
            arr.push(inventory[i])
        }
    }
    return arr
}


module.exports=carDetails
// let ans=carDetails()

// if(ans.length==0){
//     console.log("No such cars")
// }else{
//     console.log(ans)
// }
