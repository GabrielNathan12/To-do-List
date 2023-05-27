import React from 'react'

export const Todo = ({todo}) => {
  return (
    <div className='todo'>
    <div className='content'>
      <p>{todo.text}</p>
      <p className='category'>({todo.category})</p>
    </div>
    <div>
      <button className='complete'>Concluido</button>
      <button className='remove'>X</button>
    </div>
  </div>
  )
}
export default Todo;