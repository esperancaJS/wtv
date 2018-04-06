import React from "react";

const TodoSingle = ({ todoList, toggleTodo, match }) => {

    const handleToDoCheckBoxChange = (event, i) => {
        const value = event.target.checked;
        toggleTodo(i, value);
    }

    return (
        <div>
            <h1>TodoSingle works! - {match.params.id}</h1>
            <ul>
                {todoList
                    .filter((obj, i) => i == match.params.id)
                    .map((obj, i) => (
                        <li key={i}>
                            <input
                                name={i}
                                type="checkbox"
                                checked={obj.done}
                                onChange={ e => handleToDoCheckBoxChange(e, Number(match.params.id)) }
                            />
                            {obj.name} - {typeof match.params.id}
                        </li>)
                    )
                }
            </ul>
        </div>
    )
};

export default TodoSingle;