import React from 'react';

function TroisButt(props) {
    return (
        <div>
            <button onClick={props.All}>All</button>
            <button onClick={props.Active}>Active</button>
            <button onClick={props.Complete}>Complete</button>
        </div>
    );
}

export default TroisButt;