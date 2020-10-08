import React, { useState } from 'react';
import './styles.css'

// custom hook
const useInputValue = useInitialValue => {
    const [value, setValue] = useState(useInitialValue);
    return {
        value,
        onChange: e=> setValue(e.target.value),
        resetValue: () => setValue('')
    };
};

export default ({onSubmit}) => {
    const {resetValue, ...text} = useInputValue('');


    return (
        <form onSubmit={e => {
            e.preventDefault();
            onSubmit(text.value);
            resetValue()
        }}>
            <input {...text} />
        </form>
    );
    
};

