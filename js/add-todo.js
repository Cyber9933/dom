const formDOM=document.querySelector("form");
const inputDOM=formDOM.querySelector("input");
const btnDOM=formDOM.querySelector("button");
const listDOM=document.querySelector(".todo-list");

let count=1;

btnDOM.addEventListener("click", event=>{
    event.preventDefault();

    if(inputDOM.value.trim() === ""){
         return;
        }

    listDOM.innerHTML+=`
    <div class="todo-item">
        <p>${count++} </p>
        <p>${inputDOM.value}</p>
    </div>`;

    inputDOM.value="";
})