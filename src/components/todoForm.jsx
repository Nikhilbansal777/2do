import React from 'react';
import '../styles/todo.css';

const TodoForm = ({ ...input }, onChangeInput) => {
    return (<React.Fragment>
        <form action="" className='form'>
            <label htmlFor={input.className}>{'Add a ' + input.name}</label>
            <div class="input-container">
                <input {...input} />
                <button className='btn' onChange={onChangeInput}> Save </button>
            </div>
        </form>
    </React.Fragment>);
};

export default TodoForm;