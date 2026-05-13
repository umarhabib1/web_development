// const student = {
//     fullName : "umar",
//     marks : 94.4,
//     printMarks : function() {
//         console.log("marks =" , this.marks)
//     }
// }

// const employee ={
//     claculateTax () {
//         console.log("tax is 10%");
//     }
// }

// const hassan = {
//   salary : 6000,
// }

// const hassan2 = {
//   salary : 6000,
// }

// const hassan3 = {
//   salary : 6000,
// }

// hassan.__proto__=employee;
// hassan2.__proto__=employee;
// hassan3.__proto__=employee;

/////////////////////////////////  Classes  /////////////////////////////////////////////


// class car {
//   constructor(brand,mlage){
//       console.log("creating new object");
//     this.brand=brand;
  
//     }
//   start(){
//     console.log("start");
//   }
//   stop(){
//     console.log("stop");
//   }

//   // setBrand(brand){
//   //   this.brand=brand;
//   // }
// }

// let lambergane = new car("lambergane",10);
// console.log(lambergane); 
// let bugaty = new car("bugaty",12);
// console.log(bugaty);
// bugaty("bugaty");



///////////////////////////////////////// Inheritance  /////////////////////////////////////////////

// class parrant{
// hello(){
//   console.log("hello")
// }
// }

// class child extends parrant{};

// let obj = new child();

// class person{
//   constructor(){
//     this.species = "homo sapiens";  
//   }
//   eat(){
//     console.log("eat");
//   }

//   sleep(){
//     console.log("sleep");
//   }
// }

// class Engineer extends person {
//   constructor(branch){
//     super();
//     this.branch = branch;
//   }
//   work(){
//     console.log("make some thing")
//   }
// }

// let umar = new Engineer();


//////////////////////////////////// pratice 1 /////////////////////////////////

// let Data = "secret information";

// class user {
//   constructor(name,email){
//     this.name = name;
//     this.email = email;
//   }
//   viewData(){
//     console.log("data = ", Data);
//   }
// }

// class Admin extends user {
//   constructor(name,email){
//     super();
//     this.name = name;
//     this.email = email;
//   }
//    editData(){
//     console.log("editData is avaliable");
//    }
// }

// let student1 = new user("m.haider habib" , "m.haider habib@email.com");
// let student2 = new user("m.hassan habib" , "m.hassan habib@email.com");

// let Admin1 = new Admin("m.umarhabib","m.umar habib@email.com")


///////////////////////////////////  Error Handling //////////////////////\

let a = 10;
let b = 5;
console.log("a =", a);
console.log("b =", b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);

try{
  console.log(console.log("a+b =",c+b) );// error)
}catch(err){
  console.log(err);
}
console.log("a+b =",a+b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);
