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