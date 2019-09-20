let newTodoErr = document.getElementById("newTodoError");
let submitTodo = document.getElementsByClassName("submitButton");
let newTodo = document.getElementsByClassName("newTodo form-control");
let clearAllTodo = document.getElementsByClassName("clearButton btn-info");
let markAllTodo = document.getElementsByClassName("markAllButton btn-success");
let deleteAllTodo = document.getElementsByClassName("deleteButton btn-danger");
let tasks = document.getElementsByTagName("input");

submitTodo[0].addEventListener("click", (event) => {
    event.preventDefault();
    if (newTodo[0].value.tength == 0){
        newTodoErr.textContent = "There is no new Todo activity to post.";
    }
    else{
        newTodoErr.textContent = "";
        document.getElementsByClassName("listOfTodos")[0].innerHTML += "<div class=\"elementOfTodo\">\n" + "\t<label for=\""+ newTodo[0].value + "\">" + newTodo[0].value + "</label>\n" + "\t<input id=\"" + newTodo[0].value + "\" type=\"checkbox\"/>\n</div>\n";
        newTodo[0].value = "";
    }
});

clearAllTodo[0].addEventListener("click", (event) => {
    event.preventDefault();
    for(let i = 0; i < tasks.length; i++) {
        tasks[i].checked = false;
    }
});

markAllTodo[0].addEventListener("click", (event) => {
    event.preventDefault();
    
        for(let i = 0; i < tasks.length; i++){
            tasks[i].checked = true;
        }
});

deleteAllTodo[0].addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementsByClassName("listOfTodos")[0].innerHTML = "";
});