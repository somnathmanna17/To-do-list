import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems'

const Todo = () => {

    const [todolist, setTodolist] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();

        if (inputText === "") {
            return null;
        }
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }
        setTodolist((prev) => [...prev, newTodo]);
        inputRef.current.value = "";

    }

    const delTodo = (id) => {
        setTodolist((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id)
        })
    }

    const toggle = (id) => {
        setTodolist((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isComplete: !todo.isComplete }
                }
                return todo;
            })
        })
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todolist));
    }, [todolist])

    return (
        <div className='bg-gradient-to-r from-rose-100 to-fuchsia-300 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

            {/* ------ title ------ */}
            <div className='flex items-center mt-7 gap-2'>
                <img className='w-8' src={todo_icon} />
                <h1 className='text-3xl font-semibold'>To-Do List</h1>
            </div>

            {/* ----- input box ----- */}
            <div className='flex items-center my-7 bg-gradient-to-r from-slate-300 to-slate-500 rounded-full'>
                <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-black' type="text" placeholder='Add your task' />
                <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD +</button>
            </div>

            {/* ------ todo list ------ */}
            <div>
                {todolist.map((item, index) => {
                    return <Todoitems key={index} text={item.text} id={item.id} isComplete={item.isComplete} delTodo={delTodo} toggle={toggle} />
                })}

            </div>

        </div>
    )
}

export default Todo
