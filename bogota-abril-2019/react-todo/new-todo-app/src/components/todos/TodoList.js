import React from 'react'
import TodoSummary from "./TodoSummary"

const TodoList = ({todos}) => {
    return(
        <article>
            { todos && todos.map(todo =>{
                return(
                        <TodoSummary todo={todo} key={todo.id}/>
                )
            })}
        </article>
    )
}
export default TodoList;

