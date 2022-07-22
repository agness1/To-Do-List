const form = document.querySelector("form");
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const listItems = document.getElementsByClassName("task");
const numberLi = document.querySelector("h3 span")
const container = document.querySelector(".container")

const add = (e) => {
e.preventDefault();
const nameItem = input.value;
if (nameItem === "" || listItems.length > 9 ) {
    input.value = "";
    return;
    
}
const newTask = document.createElement('li');
newTask.className = "task";
newTask.innerHTML = nameItem + `<i class="far fa-trash-alt"></i>`;
ul.appendChild(newTask);
input.value = "";
numberLi.textContent = listItems.length;
newTask.querySelector('.fa-trash-alt').addEventListener("click", remove)
if (listItems.length > 7) {
container.style.height = `90vh`
}
  
}

const remove = (e) => {
e.target.parentNode.remove();
numberLi.textContent = listItems.length;
if (listItems.length < 8) {
    container.style.height = `70vh`
 }
}




form.addEventListener("submit", add);