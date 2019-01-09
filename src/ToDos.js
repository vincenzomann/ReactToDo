import React from 'react';
// UI/functional/stateless component

// Pass in the props from the root component
const ToDos = ({todos, delToDo}) => {
    
    // if there are any items in todos list then show it
    // if true output the content
    const todoList = todos.length ? (
        // mapping requires unique id for returned jsx
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.ID}>
                    {/* Clicking item will delete */}
                    <span onClick={() => {delToDo(todo.ID)}}>{todo.content} </span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no to dos</p>
    );

    // return JSX template
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default ToDos