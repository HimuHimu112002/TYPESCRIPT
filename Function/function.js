function TODO(todos) {
    if (typeof todos === "object") {
        todos.map(function (todo) { return console.log(todo); });
    }
    else {
        console.log(todos);
    }
}
var todo = ['todo1', 'todo2'];
TODO(todo);
TODO("todo");
