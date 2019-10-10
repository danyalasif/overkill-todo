import React from 'react'
import styled from 'styled-components'

const TodoItem = ({ ID, message, title }) => {
  return (
    <TodoContainer className='grid-item' key={ID}>
      <TodoTitle>{title}</TodoTitle>
      <TodoMessage>{message}</TodoMessage>
    </TodoContainer>
  )
}

const TodoTitle = styled.h2`
  border-bottom: 1px solid black;
  margin-top: 0;
`

const TodoContainer = styled.div`
  background-color: #fff;
  color: #040000;
  border-radius: 5px;
  padding: 20px;
  font-size: 120%;
  box-shadow: 6px 5px 20px 0px #888888;
`

const TodoMessage = styled.p`
  overflow-wrap: break-word;
`
export default TodoItem
