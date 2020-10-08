import React, { useState } from 'react';
import './styles.css'

const Todo = ({
    // key,
    description,
    // completed
}) => {
    const [complete, changeComplete] = useState(false)
    const onClick = () => {
        console.log('im currently:', complete)
        changeComplete(complete => !complete)
    }
    const onDelete = () => {
        console.log('Delete me:')
        
    }
    return (
        <div className="todoContainer">
            <div className="desc">
                {description}
            </div>
            <div className="desc">
                {() => {
                    if (complete) {
                        return 'Completado'
                    } else {
                        return "Incompleto"
                    }
                }}
            </div>
            <div className="but">
                <button onClick={onClick}>Complete</button>
            </div>
            <div className="but">
                <button onClick={onDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Todo;