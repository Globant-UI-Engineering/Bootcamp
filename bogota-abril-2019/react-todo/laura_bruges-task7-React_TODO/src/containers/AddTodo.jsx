import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ inputVisible, dispatch }) => {
  let input;

  return (
    <section>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          
          let value = input.value.trim();

          if (value) {
            dispatch(addTodo(value));
            input.value = '';
          }
          
        }}
      >
        <input
          ref={node => {
            input = node
          }}
          className={inputVisible ? 'addTodo':'addTodo hidden'} 
          placeholder='Add new to-do'
        />
      </form>
    </section>
  );
}
AddTodo = connect()(AddTodo);

export default AddTodo;