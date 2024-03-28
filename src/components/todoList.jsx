import React from 'react';

const TodoList = () => {
    return (
        <React.Fragment>
            <h4>Your Todos</h4>
            <ul className='list'>
                <li>
                    <span>
                        <input type="checkbox" />
                    </span>
                    To do Item
                    <span className='list-modify'>
                        <i class="fa fa-edit"></i>
                        <i class="fa fa-trash"></i>
                    </span>
                </li>
                <li>
                    <span>
                        <input type="checkbox" />
                    </span>
                    To do Item
                    <span className='list-modify'>
                        <i class="fa fa-edit"></i>
                        <i class="fa fa-trash"></i>
                    </span>
                </li>
            </ul>
        </React.Fragment>
    );
};

export default TodoList;