import { useState } from 'react'
import Todo from './components/Todo'
import './App.css'
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Estudar Laravel",
      category: "Estudo",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Estudar React-TypeScript",
      category: "Estudo",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Fazer o Trabalho de IA",
      category: "Faculdade",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Estudar para a prova",
      category: "Faculdade",
      isCompleted: false,
    },
    {
      id: 5,
      text: "Fazer compras",
      category: "Pessoal",
      isCompleted: false,
    }
  ]);
  
  const removeTodo = (id) =>{
    const newTodos = [...todos];
    const filterTodos = newTodos.filter(todo => {
      if(todo.id !== id){
        return todo;
      }
      else{
        return null;
      }
    })

    setTodos(filterTodos);
  }


  const completeTodo = (id) =>{
    const newTodos = [...todos];
    newTodos.map((todo) => {
      if(todo.id === id){
        todo.isCompleted = !todo.isCompleted;
      }
      else{
        return todo;
      }
    })
    setTodos(newTodos);
  }
  const addTodo = (text, category) => {
    const newTodos = [...todos,{
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    },]

    setTodos(newTodos);
  }
  return (
  <div className='app'>
    <h1>Lista de Tarefas</h1>
    <div className='todo-list'>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
      ))}
    </div>
    <TodoForm addTodo= {addTodo}/>
  </div>
  )
}

export default App
