var inputTodo = document.getElementById('inputTodo');
var addTodoBtn = document.getElementById('addTodo');
var display = document.getElementById('display');
var displayList = document.getElementById('display-list');
var todoList = new Array();
var total = document.getElementById('totalCount');

//function for the total tasks count
function totalCount(){
    total.innerText = todoList.length;
}

//fucntion for creating the display of the task and its functions.
function insertTodo(){
    var todoContent = inputTodo.value;
    if (todoContent ===''){
        alert('Enter Todo task!');
        return;
    }
    inputTodo.value = '';
    //list element creation
    var todoItem = document.createElement('li');
    // contain the todo item except the check box.
    var div = document.createElement('div');
    // adding the styles for the todo item(containing task and trash icon)
    div.classList.add('label-class');
    //check box creation
    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    // check box container for positioning the checkbox in the middle
    var checkboxContainer = document.createElement('div');
    checkboxContainer.classList.add('div-checkbox');
    // appending the check box in the checkbox container(div element)
    checkboxContainer.appendChild(checkbox); 
    // paragraph element containing the task content
    var para = document.createElement('p');
    para.innerHTML = todoContent;
    todoList.push(para);
    // event listener for checking the checkbox after task completion
    checkbox.addEventListener('click', function(){
        //if class is not present it adds the class
        //else it removes the class
        para.classList.toggle('strikethrough'); 
       totalCount();
    });

    //appending the checkbox container into the li element
    todoItem.appendChild(checkboxContainer);
    //appending the paragraph element into the li element
    div.appendChild(para);
    todoItem.appendChild(div);
    // creating the trash icon using fontawesome
    var icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-trash','icon-shadow');
    // adding the trash icon to the todo item div element
    div.appendChild(icon);
    //adding the styles for the todoitem
    todoItem.classList.add('list-item');
    // adding the li element to the unordered list element.
    displayList.appendChild(todoItem);
    //adding functionality to the trash icon
    // when the trash icon is clicked it removes the todo item.
    icon.addEventListener('click', function(){
        displayList.removeChild(todoItem)
        todoList = todoList.filter(function(ele){
            if (ele != para){
                return ele;
            }
        })
        totalCount();
    });
    totalCount();
}

// Event listener for clicking 'Add todo' button.
addTodoBtn.addEventListener('click',insertTodo);

// Event listener for 'Enter key' on the key board.
inputTodo.addEventListener('keydown', function(event){
    if (event.key =='Enter'){
        insertTodo();
    }
})
