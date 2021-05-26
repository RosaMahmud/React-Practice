import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Blog from './Blog';

const posts = [
    {id:1 , title: 'Hello World', content:'Welcome to learning react'},
    {id:2 , title: 'Installation complete', content:'you can install react from npm.'}
]
ReactDOM.render(
    <Blog posts = {posts}/>,
    document.getElementById ('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
