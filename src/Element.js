import React from 'react';
import Welcome from './Welcome';
import Age from './Age';

function Element(){
    return(
        <div>
            <Welcome name = 'Sara' age = '20'/>
            <Welcome name = 'Rosa' age = '23'/>
            <Welcome name = 'John' age = '26'/>
            <Welcome name = 'Jane' age = '40'/>
        </div>
    );
}
export default Element;