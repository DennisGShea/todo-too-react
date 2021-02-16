import React, { useState } from 'react'
import Head from '../components/home/Head'
import TodoList from '../components/home/TodoList'


function Cartoon() {
   //need to fetch the API  
   
   const baseURL = 'https://api.sampleapis.com/wines/reds'

 
    const initialItems = JSON.parse(localStorage.getItem('todoList'))
      || [{ item: 'List the top ten', done: false },
          { item: 'List the top twenty', done: true}]

  const [todoListItems, setTodoListItems] = useState(initialItems)
  return (
          <>
          <Head todoListItems={todoListItems} setTodoListItems={setTodoListItems} />
          <TodoList todoListItems={todoListItems} setTodoListItems={setTodoListItems} />
          </>
  )
}

export default Cartoon