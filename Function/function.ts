function TODO(todos:string[] | string) {
    if(typeof todos === "object"){
        todos.map((todo) => console.log(todo))
    }else{
        console.log(todos)
    }
}
let todo = ['todo1', 'todo2']
TODO(todo)
TODO("todo")