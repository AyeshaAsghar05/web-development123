//call back
//ensure data from database
//data is async (not arrive ata same time)
console.log("one");
setTimeout(() => {
        console.log("two");
}, 5000);
console.log("3");

//promises
//
const mypro=new Promise((res,rej)=>{
    
    const x =false;//if true then resolve
    if(x){
    setTimeout(()=>{
        res("promise is resolved");
    },5000);
}
    else{
        rej("promise is rejected")
    }
});
//how to use promises
mypro
.then((successMessage)=>{
    console.log(successMessage)
})
.catch((errorMessage)=>{
    console.log(errorMessage)
})