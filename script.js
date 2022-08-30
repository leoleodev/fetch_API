

// API que retorna conselhos aleatórios

const h2 = document.querySelector(".content");
const btn = document.querySelector(".button");

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

