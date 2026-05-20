// console.log("1");
// console.log("2");
// console.log("3");

//  console.log("1");
//  console.log("2");

// function hello  (){
//  console.log("hello")
// }
// setTimeout(hello, 4000);
// console.log("3");
// console.log("4");

// function sum(a,b) {
//     console.log(a+b);
// }

// function calculator(a,b,sum) {
//     sum(a,b);
// }

// calculator(1,2,sum)

//////////////////////////// call back hell  ///////////////////////////////////////

// function getData(dataId,getNextData) {
//     setTimeout(() =>{
//         console.log("data =" , dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     },2000)
// }


// // Callback hell
// getData(1,()=>{
//     getData(2,() =>{
//         getData(3,() =>{
//             getData(4)
//         })
//     })
// })

////////////////////////////////////// Promises //////////////////////////////////////////////

// let promise = new Promise((resolve,reject) =>{
//     console.log("hello");
//     // resolve("u are welcome");
//     reject("some erro occured sorry");
// });


// function getData(dataId,getNextData) {
//     return  new Promise((resolve ,reject) => {
//     setTimeout(() =>{
//         console.log("data =" , dataId);
//         resolve("succes")
//         if (getNextData) {
//             getNextData();
//         }
//     },5000)
// })}

// const getPromise = () =>{
//     return new Promise((resolve,reject) =>{
//     console.log("hello");
//     // resolve("succes");
//     reject("network error")
// });
// }

// let promise = getPromise();
// promise.then((res) =>{
//     console.log("promise fulfiled",res)
// });

// promise.catch((err) =>{
//     console.log("reject",err)
// })

////////////////////////////////  Promise chain  ////////////////////////////////////////

// function asyncfunction1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("some data1");
//             resolve("succes");
//         },4000)
//     })
// }


// function asyncfunction2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("some data2");
//             resolve("succes");
//         },4000)
//     })
// }

// console.log("geting data 1");
// let p1 = asyncfunction1();
// p1.then((res)=>{
//     console.log("geting data 2");
// let p2 = asyncfunction2();
// })
// console.log("geting data 2");
// let p2 = asyncfunction2();
// p1.then((res)=>{
//     console.log(res)
// })




// function getData(dataId,) {
//     return new Promise((resolve,reject) =>{
     
//     setTimeout(() =>{
//         resolve("succes");
//         console.log("data =" , dataId);
//     },2000)})
// }

// //     Promis chain   //////

// getData(1)
// .then(() =>{
//     return getData(2);
// })
// .then(() =>{
//     return getData(3);
    
// })
// .then(() =>{
//     console.log("succes");
// })


// //     Callback hell //////
// getData(1,()=>{
//     getData(2,() =>{
//         getData(3,() =>{
//             getData(4)
//         })
//     })
// })

/////////////////////////// Async Await /////////////////////////////////////////////

// function api () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("wether data",);
//             resolve("200")
//         } ,2000)
//     })
// }

// async function getWeather() {
//     await api();
//     await api();
// } 


// function getData(dataId,) {
//     return new Promise((resolve,reject) =>{
     
//     setTimeout(() =>{
//         resolve("succes");
//         console.log("data =" , dataId);
//     },2000)})
// }

//////////// Async Await /////////////////

// async function getAllData() {
//     console.log("geting data 1 .......");
//     await getData(1);
//     console.log("geting data 2 .......");
//     await getData(2);
//     console.log("geting data 3 .......");
//     await getData(3);
// }

/////////////// IIFE

// (async function () {
//     console.log("geting data 1 .......");
//     await getData(1);
//     console.log("geting data 2 .......");
//     await getData(2);
//     console.log("geting data 3 .......");
//     await getData(3);
// }) ();



// //     Promis chain   //////
//console.log("geting data 1 .......");
// getData(1)
// .then(() =>{
    // console.log("geting data 2 .......");
//     return getData(2);
// })
// .then(() =>{
    // console.log("geting data 3 .......");
//     return getData(3);
// })
// .then(() =>{
//     console.log("succes");
// })


// //     Callback hell //////
//console.log("geting data 1 .......");
// getData(1,()=>{
    // console.log("geting data 2 .......");
//     getData(2,() =>{
    // console.log("geting data 3 .......");
//         getData(3,() =>{
    // console.log("geting data 4 .......");
//             getData(4)
//         })
//     })
// })