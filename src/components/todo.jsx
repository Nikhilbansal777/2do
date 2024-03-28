import React, { useState } from "react";
import '../styles/todo.css';
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const ToDo = () => {

    const [list, setList] = useState([]);

    const inputFields = [{
        id: 1, type: 'text', required: true, name: "Todo", placeholder: 'Enter your Task', className: "input"
    }];

    const onChangeInput = () => {
        console.log("Hi");
    };

    return (
        <React.Fragment>
            <div className="todo">
                <div className="todoform">
                    <h3>Task Manager Pro - Manage your task at one place</h3>
                    <TodoForm {...inputFields[0]} onChangeInput={onChangeInput}></TodoForm>
                </div>
                <div className="todolist">
                    <hr />
                    <TodoList></TodoList>
                </div>

            </div>
        </React.Fragment>
    );
};

export default ToDo;