import React, { Fragment } from 'react';

import TodoList from '../todolist'

const examples = [
    {id:1, description:'texto con palabras', completed:false},
    {id:2, description:'tt', completed:true},
]
const App = () => {
    return (
    // <Fragment>
        <div className="container">
            
            <TodoList />
        </div>
    //* </Fragment> */
)}

export default App;