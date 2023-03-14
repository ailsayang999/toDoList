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

//判斷是否為空白（是則跳出提醒），並執行addItem()
function addToList() {
  let inputValue = input.value;
  //如果使用者有輸入內容，才把內容人加到list
  if (inputValue.trim() === "" || inputValue === "") {
    alert("您輸入的是空白內容，請輸入內容");
  } else if (inputValue.length > 0 && inputValue.trim() !== "") {
    addItem(inputValue);
  }
}

//將inputValue放到todoList
function addItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  todoList.appendChild(newItem);
}

//把做完的事畫線並移到doneList 
function addToDoneList(target) {
  if (target.tagName === "LABEL") {
    //要先把做完的事畫線
    target.classList.toggle("checked");
    //再把做完的事移到doneList
    let parentElement = target.parentElement;
    doneList.appendChild(parentElement);
    //  上面兩行也可以改成以下四行
    // let parentElement = target.parentElement;
    // let doneItems = parentElement.outerHTML;
    // doneList.innerHTML += doneItems;
    // parentElement.remove();
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

// Delete todo item on todoList 
todoList.addEventListener("click", function (event) {
  let target = event.target;
  if (target.matches(".delete")) {
    //刪除垃圾桶上層的元素
    let parentElement = target.parentElement;
    parentElement.remove();
  }
  addToDoneList(target);
});

// Delete done items on doneList
doneList.addEventListener("click", function (event) {
  let target = event.target;
  if (target.matches(".delete")) {
    //刪除垃圾桶上層的元素
    let parentElement = target.parentElement;
    parentElement.remove();
  }
});


