import React from 'react'
import Navbar from "./components/Navbar"
import Todo from './components/Todo'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <div className="todo py-10">
        <Todo />
      </div>
    </div>
  )
}

export default App
