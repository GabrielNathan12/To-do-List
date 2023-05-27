import {useState} from 'react'
import App from '../App'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        //Para nao aceitar valores vazios
        if(!value || !category){
            return;
        }
        
        addTodo(value, category);
        setValue("");
        setCategory("");
    }
  return (
    <div className='todo-form'>
        <h2>Criar tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Digite o titulo' value={value} onChange={(e) => setValue(e.target.value)} />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Faculdade">Faculdade</option>
                <option value="Estudo">Estudo</option>
                <option value="Pessoal">Pessoal</option>
            </select>
            <button type='submit' className='create-task'>Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm
