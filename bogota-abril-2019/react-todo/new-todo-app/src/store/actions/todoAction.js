
export const createTodo = (todo) => {
    return {
        type: "CREATE_TODO", 
        todo: todo
    }
}
export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO", 
        id: id
    }
}

