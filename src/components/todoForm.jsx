import React from 'react';
import '../styles/todo.css';

const TodoForm = ({ input, onChangeInput, submitForm }) => {

    return (<React.Fragment>
        <form action="" className='form' onSubmit={submitForm}>
            <label htmlFor={input.className}>{'Add a ' + input.name}</label>
            <div className="input-container">
                <input {...input} value={input.value} onChange={(e) => onChangeInput(e)} />
                <button className='btn' > Save </button>
            </div>
        </form>
    </React.Fragment>);
};

export default TodoForm;