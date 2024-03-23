const newTodoInput = document.getElementById("new-todo");
const todoList = document.getElementById("todo-list");

// Function to create a new todo item
function createTodoItem(text, completed = false) {
  const todoItem = document.createElement("li");
  todoItem.classList.add("flex", "items-center", "justify-between", "px-4", "py-2", "bg-gray-200", "rounded-md");

  const todoCheckbox = document.createElement("input");
  todoCheckbox.type = "checkbox";
  todoCheckbox.checked = completed;
  todoCheckbox.classList.add("mr-4", "cursor-pointer");
  todoCheckbox.addEventListener("change", () => {
    todoItem.classList.toggle("line-through", todoCheckbox.checked);
    todoItem.classList.toggle("text-gray-500", todoCheckbox.checked);
  });

  const todoText = document.createElement("span");
  todoText.textContent = text;
  todoText.classList.add("flex-1", "mr-4");

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash text-red-500 cursor-pointer"></i>';
  deleteButton.addEventListener("click", () => {
    todoList.removeChild(todoItem);
  });

  todoItem.appendChild(todoCheckbox);
  todoItem.appendChild(todoText);
  todoItem.appendChild(deleteButton);

  return todoItem;
}

// Add event listener to the input field
newTodoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && newTodoInput.value.trim() !== "") {
    const newTodo = createTodoItem(newTodoInput.value.trim());
    todoList.appendChild(newTodo);
    newTodoInput.value = "";
  }
});
