import React, { useState } from 'react'

const Todoform = ({addTodo}) => {
  const [value, setValue] = useState("")

  const handleSubmit = (e)=> {
    e.preventDefault();
    addTodo(value)
    setValue("")
  }


  return (
   <form className='TodoForm' onSubmit={handleSubmit}>

      <input type ="text" className='todo-input' value = {value} placeholder='add the task' onChange={(e)=>setValue(e.target.value)}/> 
      <button type='submit' className='todo-btn'>Add Task</button>
   </form>


    
   
  )
}

export default Todoform
