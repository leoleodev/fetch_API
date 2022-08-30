

// API que retorna conselhos aleatórios

const h2 = document.getElementById("h2");
const btn = document.getElementById("btn");

btn.addEventListener("click", show);

async function show(){

    const adviceSlipe = fetch("https://api.adviceslip.com/advice");

    const advice = await adviceSlipe;
    const adviceJson = await advice.json();

    h2.innerHTML = adviceJson.slip.advice;

}


// const advice = fetch("https://api.adviceslip.com/advice")
//         .then((response)=>{
//             return response.json();
//         })
//         .then((json)=>{
//             console.log(json.slip.advice);
//         })

//         console.log(advice);

