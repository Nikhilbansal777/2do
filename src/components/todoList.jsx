import React from 'react';

const TodoList = ({ todoList, deleteItem, onchecked, editItem }) => {
    return (
        <React.Fragment>
            <h4>Your Todos</h4>
            <ul className='list'>
                {todoList && todoList.length === 0 ? <p>No Todo Item in list</p> : todoList.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>
                                <input type="checkbox" checked={item.isCompleted} onChange={(e) => onchecked(item.id, e.target.checked)} />
                            </span>
                            {item.item}
                            <span className='list-modify'>
                                <i className="fa fa-edit" onClick={() => editItem(item.id)}></i>
                                <i className="fa fa-trash" onClick={() => deleteItem(item.id)} ></i>
                            </span>
                        </li>
                    );
                })}
            </ul>
        </React.Fragment>
    );
};

export default TodoList;