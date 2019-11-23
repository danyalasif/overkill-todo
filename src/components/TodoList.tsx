import React from 'react'
import TodoItem from './TodoItem'
import styled from 'styled-components'
import {useSelector} from 'react-redux'

const TodoList = () => {

  const todos = useSelector(state => state.todos)

  return (
    <Container>
      {todos.map(({ ID, message, title }) => (
        <TodoItem ID={ID} message={message} title={title} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
  margin: 20px 20px;
`

export default TodoList
