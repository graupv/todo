import React, { useEffect, useState } from 'react';
import './styles.css'

import pullAt from 'lodash/pullAt'

import Todo from '../todo'
import AddTodo from '../addtodo';



const TodoList = () => {

   const [todos, setTodos] = useState([]);
   const [p, setP] = useState(0);
   const [f, setF] = useState(0);

   const toggleComplete = i => {
        setTodos(todos.map(
            (todo, k) => {
                if (k === i) {
                    if (todo.complete === false) {
                        setP(p => p - 1)
                        setF(f => f + 1)
                    } else {
                        setP(p => p + 1)
                        setF(f => f - 1)
                    }
                    return {
                        
                            ...todo,
                            complete: !todo.complete
                        
                    }
                } else { return todo}
                }
            
            )
            );
        }

    const deleteTodo = i => {
        
        setTodos(todos.map(
            (todo, k) => {
                if (k === i) {
                    if (todo.complete === false) {
                        setP(p => p - 1)
                    } else {
                        setF(f => f - 1)
                    }
                    return pullAt(todos, i)

                }
                else {
                    return todo
                }
            }
        ))
    }
    
        return (
            <div className="container">
                <div className="col">
                    <div className="add">
                        <AddTodo onSubmit={text => {
                            setTodos([{text, complete:false}, ...todos])
                            setP(p => p + 1)
                            }} />
                        {/* <button onSubmit={text => setTodos([{text, complete:false}, ...todos])} >Add</button> */}
                    </div>
                    {/* <input type="submit" value="Submit" /> */}
                </div>
                <div className="col">
                    <div className="titulo">Incompletos {": " + p}</div>
                    
                    <div className="listcontainer">
                        {
                            todos.map(({text, complete}, index) => {
                                if (complete === false) return (
                                    <div className="todo-container">
                                        
                                        <div className="todo" key={index} onClick={() => toggleComplete(index)}>
                                            <div className="text">
                                                {text}
                                            </div>
                                            <button onClick={() => deleteTodo(index)}>X</button>
                                            
                                        </div>
                                    </div>
                            )}
                            )
                        }
                    </div>
                </div>
                <div className="col">
                    <div className="titulo">Completos {": " + f}</div>
                    
                    <div className="listcontainer">
                    {
                            todos.map(({text, complete}, index) => {
                                if (complete === true) return (
                                    <div className="todo-container">
                                        <div className="todo" key={index} onClick={() => toggleComplete(index)}>
                                            <div className="text">
                                                    {text}
                                            </div>
                                            <button onClick={() => deleteTodo(index)}>X</button>
                                        </div>
                                    </div>
                            )}
                            )
                        }
                    </div>

                </div>
            </div>
        );
    
    
}

export default TodoList;