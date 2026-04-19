let adjectives = () => {
    let r =Math.floor(Math.random()*3);
    if (r==0) return "crazy";
    if(r===1) return "Amazing";
    return "fire";
}

let shopName  =() =>{
    let r =Math.floor(Math.random()*3);
  if(r==1) return "Engine";
  if(r==2) return "foods";
   return "Garments";
}

let anotherWorld = () =>{
    let r =Math.floor(Math.random()*3);
    if(r==1) return "Bros";
    if(r==2) return"Limited";
     return "Hub";
}



let result = adjectives() + " " + shopName() + " " + anotherWorld();
console.log(result);