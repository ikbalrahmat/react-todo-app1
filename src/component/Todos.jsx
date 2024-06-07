// import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const Todos = ({ todos, toggleCompleted }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleCompleted={toggleCompleted}
          />
        )
      })}
    </div>
  )
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
}

const styles = {
  container: {
    width: '40%',
    margin: '0 auto',
  },
}


export default Todos