const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");


const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

const option = {weekday : "long", month: "short", day: "numeric"}
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options)

function addToDo(toDo){

  if(trash){ return; }

  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";

  const item = `<li class= "item">
                  <i class="fa ${DONE}" job="complete" id="${id}"></i>
                  <p class="text ${LINE}">Drink Coffee</p>
                  <i class = "fa fa-trash-o de" job= "delete" id="${id}"></i>
                </li>
               `;
  const position = "beforeend";

  list.insertAdjacentHTML(position, item);
}

document.addEventListener("keyup", function(event){
  if(event.keyCode == 13){
    const toDo = input.value

    if(toDo){
      addToDo(toDo)
    }
    input.value = "",
  }
});

addToDo("Drink Coffee", 1, true, false);
