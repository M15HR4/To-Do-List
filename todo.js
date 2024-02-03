const item = document.getElementById("item");
const toDoBox = document.getElementById("to-do-box");


item.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    addToDo(item.value);
    item.value = "";
  }
});

const addToDo = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `${item} <i class="fa-regular fa-circle-xmark"></i>`;
  
listItem.addEventListener("click", function() {
    this.classList.toggle("done")
})

listItem.querySelector("i").addEventListener("click", function() {
    listItem.remove()
})

  toDoBox.appendChild(listItem);
};


