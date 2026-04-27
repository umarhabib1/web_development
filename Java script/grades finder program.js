
// grades finder 
let input  = prompt("enter your percentage");

if( input >94 && input <= 100){
    console.log("A+");
}
else if(input >=80 && input <= 95){
    console.log("A");
}else if(input>=70 && input < 80){
    console.log("B");
}else if(input >= 60 && input <70){
    console.log("C");
}else if(input >= 50 && input < 60){
    console.log("D");
}else if(input >= 0 && input <49){
    console.log("F");
}else{
    console.log("wrong input");
}