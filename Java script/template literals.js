
// For Loop

// for(let i=0;i<16;i++){
//     console.log("umar");
// }

// let sum = 0;
// let n =10;
// for(let i = 1;i<=n;i++){
//     sum=sum + i;
// }
// console.log(sum)

// While loop
// let i =0;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// do while loop
// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i<=10);

// For-of loop
// let str="umar";
// let size = 0;
// for(let i of str){
//     console.log(i);
//     size++;
// }
// console.log("size =",size);

// for-in loop
// let student={
//     class : 8,
//     rollno : 24,
//     position : 1
// }
// for(let key in student){
//     console.log("key =" ,key,"value =",student[key]);
// }

//project 1

// for(let i = 0;i<=100;i++){
//     if(i%2==0){
//     console.log(i);
//     }
// }

//project 2
// let gamenum=25;
// let user = number(prompt("guss the number :"));
 
// while(user != gamenum){
//     user=prompt("u lose try again")
// }
// console.log("u win");
// let gamenum = 25;
// let user = Number(prompt("guess the number"));

// while (user !== gamenum) {
//     user = Number(prompt("Wrong! Try again:"));
// }

// console.log("You win!");

//string

// let str = "umar";
// console.log(str.length);
// console.log(str[0],str[3])


// //Template litrals
// let string = `hello`;
// let a = `the valu of x = ${2+2*4}`;
// console.log(a)
// console.log(string);

// let obj = {
//     pen : "ballpen",
//     pencolor : "black",
//     price : 100 ,
// }
// console.log("the price of",obj.pen,"is",obj.price,"rupes"); // string method
// console.log(`the price of ${obj.pen} is ${obj.price} rupes`); //Template litrals


// Escape characters    example: \n , \t, \" , \' , \r , \b , \\,
// let str ="how are\nyou";
// let str ="how are\byou";
// let str ="how are\ryou";
// console.log(str);



// Strings method
// let str = "M.UMAR habib";
// let a = str.toUpperCase();
// let b = str.toLowerCase();
// console.log(a);
// console.log(b);

// let string = "               how are you umar"               ;
// let x = string.trim();
// console.log(x);

// let a = "0123456";
// console.log(a.slice(0 , 4))

// let str1 = "m.umar";
// let str2 = "habib";
// console.log(str1 + str2)
// res = str1.concat(str2);
// console.log(res);

// let a = "hello"
// console.log(a.replace("h","y"))

// let e = "redSeep";
// console.log(e.charAt(3));


// Project 1

let p = prompt("Enter your full name"); 
let str = "@"; 
let user = "@" + p.toUpperCase() + p.length ;

console.log(user);
