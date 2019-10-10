import React from 'react'
import { todos } from '../sample-data'
import TodoItem from './TodoItem'
import styled from 'styled-components'

const TodoList = () => {
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
