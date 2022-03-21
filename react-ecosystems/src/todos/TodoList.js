import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from "./TodoListItem";
import { connect } from 'react-redux';
import './TodoList.css';
import { removeTodo, markTodoAsCompleted } from './actions';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => {
  return (
    <div className='list-wrapper'>
      <NewTodoForm />
      {
        todos.map(
          todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />
        )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todos,

})
const mapDispatchToProps = dispatch => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
  onCompletedPressed: text => dispatch(markTodoAsCompleted(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)