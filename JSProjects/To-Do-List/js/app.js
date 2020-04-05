const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//nome das classes

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINETHROUGH = "lineThrough";

let LIST, id;

//dados

const data = localStorage.getItem("TODO");

if(data){
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
} else{
    LIST = [];
    id = 0;
}

function loadList(array){
    array.forEach(function (item){
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

clear.addEventListener("click", function (){
    
    localStorage.clear();
    location.reload();

});


//data

const option = {weekday : "long", month: "short", day: "numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("pt-BR", option);

//funções

function addToDo(ToDo, id, done, trash){

    if(trash) return;

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINETHROUGH : "";

    const item = `
    <li class="item">
    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
    <p class="text ${LINE}">${ToDo}</p>
    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
    </li>
    `

    const position = "beforeend"

    list.insertAdjacentHTML(position, item);
}


document.addEventListener("keyup", function (e){

    if(e.keyCode == 13){
        const ToDo = input.value;

        if(ToDo){
            addToDo(ToDo, id, false, false);

            LIST.push({
                name: ToDo,
                id: id,
                done: false,
                trash: false

            });

            localStorage.setItem("TODO", JSON.stringify(LIST));

            id++;
        }
        
        input.value = "";
    }

});

function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINETHROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}

function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

    list.addEventListener("click", (e) => {

        const element = e.target;
        const elementJob = element.attributes.job.value;

        if(elementJob == "complete"){

            completeToDo(element);

        }
        else if(elementJob == "delete"){

            removeToDo(element);

        }

        localStorage.setItem("TODO", JSON.stringify(LIST));

    });

    