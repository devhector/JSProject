const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//nome das classes

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINETHROUGH = "lineThrough";

//data

const option = {weekday : "long", month: "short", day: "numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("pt-BR", option);

//funções

function addToDo(ToDo){

    const item = `
    <li class="item">
    <i class="fa fa-circle-thin co" job="complete" id="0"></i>
    <p class="text">${ToDo}</p>
    <i class="fa fa-trash-o de" job="delete" id="0"></i>
    </li>
    `

    const position = "beforeend"

    list.insertAdjacentHTML(position, item);
}


document.addEventListener("keyup", function );