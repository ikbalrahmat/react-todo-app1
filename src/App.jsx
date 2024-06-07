import { useState, createContext } from 'react'
import Todos from './component/Todos'
import TodoForm from './component/TodoForm';

export const TodoContext = createContext()

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Make a Todo App with React',
      completed: false,
    },
    {
      id: 3,
      title: 'Make a Todo App with React and Context API',
      completed: false,
    },
    {
      id: 4,
      title: 'Graduate from University',
      completed: false,
    }
  ])

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }
  
  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId)
    setTodos(updatedTodos)
  }

  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    }

    const updatedTodos = todos.concat(newTodo)
    setTodos(updatedTodos)
  }
  
  return (
    <TodoContext.Provider value={{ toggleCompleted, deleteTodo }}>
      <div style={styles.container}>
        <h1 style={styles.title}>My Todo List</h1>
        <div style={styles.box}>
          <TodoForm addTodo={addTodo} />
          <Todos todos={todos} />
        </div>
      </div>
    </TodoContext.Provider>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
  },
  box: {
    border: '1px solid #000',
    borderRadius: '5px',
    padding: '10px',
    marginTop: '10px',
  },
}
export default App
