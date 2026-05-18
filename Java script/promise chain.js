////////////////////////////////  Promise chain  ////////////////////////////////////////
function asyncfunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("some data1");
            resolve("succes");
        },4000)
    })
}


function asyncfunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("some data2");
            resolve("succes");
        },4000)
    })
}

console.log("geting data 1");
let p1 = asyncfunction1();
p1.then((res)=>{
    console.log("geting data 2");
let p2 = asyncfunction2();
})
console.log("geting data 2");
let p2 = asyncfunction2();
p1.then((res)=>{
    console.log(res)
})




function getData(dataId,) {
    return new Promise((resolve,reject) =>{
     
    setTimeout(() =>{
        resolve("succes");
        console.log("data =" , dataId);
    },2000)})
}

//     Promis chain   //////

getData(1)
.then(() =>{
    return getData(2);
})
.then(() =>{
    return getData(3);
    
})
.then(() =>{
    console.log("succes");
})


//     Callback hell //////
getData(1,()=>{
    getData(2,() =>{
        getData(3,() =>{
            getData(4)
        })
    })
})
