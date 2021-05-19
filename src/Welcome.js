import React from 'react';
import Age from './Age';

function Welcome(props){
return(
    <div>
        <h1>Hello, {props.name}!</h1>
        <p>How are you doing today {props.name}?</p>
        <Age age = {props.age} />
    </div>
);
}

export default Welcome;