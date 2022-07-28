import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '' );

    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus();
    });

    const handleChange = e =>{
        setInput(e.target.value);
    };
    const handleSubmit = e=> {
        e.preventDefault();

         props.onSubmit({
            userid:1,
            id:Math.floor(Math.random()*10000),
            title: input,
            complete_: false
         });

        setInput('');
    };
  return (
      <form className='todo-form' onSubmit={handleSubmit}>
      {props.edit ? (
        <>
        <input type='text' placeholder='Updata Your item' value={input} name='title' 
        className='todo-input'onChange={handleChange} ref={inputRef}/>
        <button className='todo-button'>Update</button>
        </>) : 
        (
        <>
        <input type='text' placeholder='Enter the task here' value={input} 
        name='title' className='todo-input'onChange={handleChange} ref={inputRef}/>
        <button className='todo-button'>Sumbit</button>
        </>
        )
      }
        
    </form>
  )
};

export default TodoForm