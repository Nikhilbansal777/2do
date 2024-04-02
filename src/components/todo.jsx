import React, { useEffect, useState } from "react";
import '../styles/todo.css';
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const ToDo = () => {
    const [list, setList] = useState(() => {
        const localValue = localStorage.getItem('item');
        if (localValue === null) return [];
        return JSON.parse(localValue);
    });

    const [inputFields, setInputFields] = useState([{
        id: 1, type: 'text', required: true, name: "Todo", placeholder: 'Enter your Task', className: "input", value: ""
    }]);

    const onChangeInput = (e) => {
        setInputFields((input) => [{ ...input[0], value: e.target.value }]);
    };

    const submitForm = (e) => {
        e.preventDefault();
        if (inputFields[0].value === "") return;
        const filterListItem = list.filter((item) => inputFields[0].id === item.id);
        if (filterListItem.length === 0) {
            addToDoToList(inputFields[0].value);
        } else {
            editToDoListItem(filterListItem[0]);
        }
        setInputFields((input) => [{ ...input[0], value: '' }]);
    };

    const editToDoListItem = (filteredItem) => {
        let inde;
        list.forEach((item, index) => {
            if (item.id === filteredItem.id) {
                inde = index;
            }
        });
        setList((list) => {
            list.splice(inde, 1, { id: filteredItem.id, item: inputFields[0].value, isCompleted: filteredItem.isCompleted });
            return list;
        });
    };

    useEffect(() => {
        localStorage.setItem("item", JSON.stringify(list));
    }, [list, inputFields[0].value]);

    const addToDoToList = (item) => {
        setList((currentItem) => {
            return [...currentItem, { id: crypto.randomUUID(), item, isCompleted: item.completed }];
        });
    };

    const deleteListItem = (id) => {
        setList((listItem) => {
            return listItem.filter((item) => item.id !== id);
        });
    };

    const onChecked = (id, completed) => {
        setList((listItem) => {
            console.log(listItem);
            return listItem.map(item => {
                if (item.id === id) {
                    return { ...item, isCompleted: completed };
                }
                return item;
            });
        });
    };

    const editItem = (id) => {
        const item = list.filter(item => item.id === id);
        setInputFields((input) => [{ ...input[0], id: item[0].id, value: item[0].item }]);
    };

    return (
        <React.Fragment>
            <div className="todo">
                <div className="todoform">
                    <h3>Task Manager Pro - Manage your task at one place</h3>
                    <TodoForm input={inputFields[0]} onChangeInput={onChangeInput} submitForm={submitForm} ></TodoForm>
                </div>
                <div className="todolist">
                    <hr />
                    <TodoList todoList={list} deleteItem={deleteListItem} onchecked={onChecked} editItem={editItem}></TodoList>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ToDo;