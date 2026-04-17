//Faluty calculator

let a = prompt("Enter first number");
let c = prompt("Enter a opration");
let b = prompt("Enter second number");


let random = Math.random();

let obj ={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if (random>0.1) {
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
} else {
    c =obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}