import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Mailbox from './Mailbox';

const messages = ['hello', 'hi'];
ReactDOM.render(
    <Mailbox unreadMessages = {messages}/>,
    document.getElementById ('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
