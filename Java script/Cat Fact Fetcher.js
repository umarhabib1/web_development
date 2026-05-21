const URL = "https://catfact.ninja/fact";

let factPara = document.querySelector("#fact");
let btn = document.querySelector("#btn");

const getFact = async () => {
    console.log("getting Data . . .");

    let response = await fetch(URL);
    console.log(response);

    let data = await response.json();

    factPara.innerText = data.fact;
};

btn.addEventListener("click", getFact);