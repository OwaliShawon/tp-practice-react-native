import React from 'react';

const Greetings = (props) => {
    return (
        <div>
            He is {props.name}. Id is {props.id}
        </div>
    );
};

export default Greetings;