import React from 'react'

const ToDos = ({todos}) => {
    
    // if there are any items in todos list then show it
    // if true output the content
    const todoList = todos.length ? (
        // mapping requires unique id for returned jsx
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no to dos</p>
    );

    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default ToDos