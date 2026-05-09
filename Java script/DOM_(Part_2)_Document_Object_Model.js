// let blue = document.querySelector("#a1");
// blue.onclick = (e) =>{
//     console.log("blue has been clicked");
//     console.log(e);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
//     console.log(e.type);

//     // blue.style.height = "400px";
//     // blue.style.width = "400px";
    
// }

// let button = document.querySelector("#b1");

// button.addEventListener("click",(ev) =>{
// console.log("hello");
// console.log(ev);
// })

// button.addEventListener("click",(ev) =>{
// console.log("hello2");
// console.log(ev);
// })

// const hello3 =  button.addEventListener("click",(ev) =>{
// console.log("hello3");
// console.log(ev);
// })

// button.addEventListener("click",(ev) =>{
// console.log("hello4");
// console.log(ev);
// })

// button.removeEventListener("click",hello3);




///////////////// project 1///////////////////////////////////////

// let body = document.querySelector("body");

// let button = document.querySelector("button");


// let mode = "light";
// button.addEventListener("click",()=>{
// if(mode === "light"){
//     mode = "dark"
//     body.classList.add("dark");
//     body.classList.remove("light")
// }else{
//     mode = "light";
//     body.classList.remove("light");
//     body.classList.remove("dark");
// }
// })

// let mode = "light";
// button.addEventListener("click",()=>{
// if(mode === "light"){
//     mode = "dark"
//     body.style.backgroundColor="black"
// }else{
//     mode = "light";
//     body.style.backgroundColor="white"
// }
// })

// button.addEventListener("click",(e) =>{
// body.style.backgroundColor="black";
// // alert("darkmode");
// console.log("darkmode");
// })
// button.addEventListener("dblclick",(e) =>{
// body.style.backgroundColor="white";
// // alert("lightmode");
// console.log("lightmode");
// })

let d1 = document.querySelector("#d1");
let d2 = document.querySelector("#d2");

d1.addEventListener("click",()=>{
 d1.style.height = "400px";
 d1.style.width = "400px";
})

d2.addEventListener("click",()=>{
     d2.style.height = "400px";
 d2.style.width = "400px";
})