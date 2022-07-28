import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.title || /^\s*$/.test(todo.title)) {
          return;
        }
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
      if (!newValue.title || /^\s*$/.test(newValue.title)) {
        return;
      }
      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };


    const removeTodo = id => {
      const removetd = [...todos].filter(todo => todo.id !== id);

      setTodos(removetd);
    };


    const completeTodo = id=> {
      let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;

        }
        return todo;
      });
      setTodos(updatedTodos);
    };

  return (
    <div>
        <h1>To-Do List</h1>
        <h3>Add new task in the list</h3>
        <TodoForm onSubmit={addTodo}/>
        <h3 className='start'>Added task in To-Do List</h3>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  )
};

export default TodoList