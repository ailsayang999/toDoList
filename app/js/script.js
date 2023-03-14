// 初始變數
let todoList = document.querySelector("#my-todo");
let doneList = document.querySelector("#my-done");
let addBtn = document.querySelector("#add-btn");
let input = document.querySelector("#new-todo");

// 資料
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills",
];

//加入範例
for (let todo of todos) {
  addItem(todo);
}

/////////////////////////function area //////////////////////////

function addItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  todoList.appendChild(newItem);
}

function addToList() {
  let inputValue = input.value;
  //如果使用者有輸入內容，才把內容人加到list
  if (inputValue.trim() === "" || inputValue === "") {
    alert("您輸入的是空白內容，請輸入內容");
  } else if (inputValue.length > 0 && inputValue.trim() !== "") {
    addItem(inputValue);
  }
}


/////////////////////////Event Listener//////////////////////////

// Add new todo items to todoList （執行addToList())
addBtn.addEventListener("click", function () {
  addToList()
});

//Add keyup event listener to input (按Enter也可以執行addToList())
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addToList();
  }
});

// 2.刪除 todo
todoList.addEventListener("click", function (event) {
  let target = event.target;
  if (target.classList.contains("delete")) {
    //刪除垃圾桶上層的元素
    let parentElement = target.parentElement;
    parentElement.remove();
  }
  //3. 切換做完與否
  if (target.tagName === "LABEL") {
    target.classList.toggle("checked");
  }
});


