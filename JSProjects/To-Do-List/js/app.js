const clear = document.querySelector(".clear");
const dateElement = document.getElementById(".date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//nome das classes

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINETHROUGH = "lineThrough";


const option = {weekday : "long", month: "short", day: "numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("pt-BR", option);

