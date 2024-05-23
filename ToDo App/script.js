let inputTodo = document.querySelector("#inputTodo");
let addTodo = document.querySelector("#addTodo");
let deleteTodo = document.querySelector("#deleteTodo");
let todoList = document.querySelector(".todoList");

addTodo.addEventListener("click", function () {
  if (!inputTodo.value) return alert("Dear User, Kindly Input The Task");

  let todoListItems = `<li class = "CreatedToDoList">
  <span>${inputTodo.value}</span>
  <button id="EditButton" onclick="edit(this)"> Edit </button>
  <button id="RemoveButton" onclick="Remove(this)"> Delete </button>
</li>`;
  todoList.innerHTML += todoListItems;

  inputTodo.value = ``;
});

function Remove(element) {
  element.parentElement.remove();
}

function edit(element) {
    console.log(element.previousElementSibling.innerText);
    let oldValue = element.previousElementSibling.innerText
    let updatedValue = prompt("Edit", oldValue)
    element.previousElementSibling.innerText = updatedValue

}

deleteTodo.addEventListener("click", function(){
    todoList.innerHTML = ``
})
