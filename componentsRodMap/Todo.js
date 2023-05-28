import React from 'react';

function Todo(props) {
    return (
        <div className='d-f'> 
           <span style={{textDecoration : props.todo.Complete ? "line-through":"" }}  onClick={props.togelActive}> {props.todo.todo} </span>
           <button className=' delete-btn' onClick={props.onDelete}>X</button >
        </div>
    );
}

export default Todo;