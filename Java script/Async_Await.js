
/////////////////////////// Async Await /////////////////////////////////////////////

function api () {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("wether data",);
            resolve("200")
        } ,2000)
    })
}

async function getWeather() {
    await api();
    await api();
} 


function getData(dataId,) {
    return new Promise((resolve,reject) =>{
     
    setTimeout(() =>{
        resolve("succes");
        console.log("data =" , dataId);
    },2000)})
}

//////////// Async Await /////////////////

async function getAllData() {
    console.log("geting data 1 .......");
    await getData(1);
    console.log("geting data 2 .......");
    await getData(2);
    console.log("geting data 3 .......");
    await getData(3);
}
