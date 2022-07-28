import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList';

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const[edit, setEdit] = useState({
        id:null,
        value:''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({id:null,
            value:''});
    }

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
        <div key={todo.id} class='tit tsk'>
            {todo.title}
        </div>
        <hr/>
        <div className='tit'>
                <button className='cmp_btn' onClick={() => completeTodo(todo.id)}>
                    Mark Completed
                </button>
                <button onClick={() => setEdit({id:todo.id, value:todo.title})} className='edit-todo'>
                    Edit Task
                </button>
                <button onClick={() => removeTodo(todo.id)}
                className='delete-todo'>
                    Delete
                </button>
        </div>
    </div>
  ));
}

export default Todo