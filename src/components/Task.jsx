import React, { useState } from 'react'

function Task({ task, i, completeTask, uncompleteTask, removeTask }) {
    return (
        <>
            <div style={{ textDecoration: task.isCompleted ? 'line-through' : "" }} className="task">
                {task.text}
                <div>
                    <button className="btn btn-sm btn-warning m-1" onClick={() => uncompleteTask(i)}>Undo</button>
                    <button className="btn btn-sm btn-success m-1" onClick={() => completeTask(i)}>Done</button>
                    <button className="btn btn-sm btn-danger m-1" onClick={() => removeTask(i)}>Remove</button>
                </div>
            </div>
        </>
    )
}
export default Task;