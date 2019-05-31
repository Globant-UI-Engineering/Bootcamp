const initState = {
    todos: [
    {id:"1", title:"example",todo:"Wash the dishes"}
    ]
}
const todoReducer = (state = initState, action) => {
    switch (action.type){
        case "CREATE_TODO":
            console.log("created todo", action.todo);
            return {
                todos: [...state.todos, action.todo]
            }
        case "CREATE_TODO_ERROR":
            console.log("create recipe error", action.error)
            return state;
        case "DELETE_TODO":
            console.log("delete todo", action.id);
            return {
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case "DELETE_TODO_ERROR":
            console.log("delete todo error", action.id);
            return state; 
        default: 
            return state;
    }
}
export default todoReducer;