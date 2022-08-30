// API que retorna conselhos aleatórios

const main = document.querySelector("main");
const button= document.querySelector("div.button");

button.addEventListener("click", show);

async function show(){

    const adviceSlipe = fetch("https://api.adviceslip.com/advice");

    const advice = await adviceSlipe;
    const adviceJson = await advice.json();

    main.innerHTML = adviceJson.slip.advice;

}

