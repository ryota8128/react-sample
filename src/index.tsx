import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './components/Hello';
import Name from './components/Name';
import Message from './components/Message';
import Counter from './components/Counter';
import { Parent } from './components/Parent';
import { UseMemoSample } from './components/UseMemoSample';
import { Clock } from './components/Clock';
import { ImageUploader } from './components/Uploader';
import { Input } from './components/Input';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
        {/* <App /> */}
        {/* <Hello />
        <Name />
        <Message />
        <Counter initialValue={30} /> */}
        {/* <Parent /> */}
        {/* <Clock /> */}
        {/* <ImageUploader /> */}
        {/* <UseMemoSample /> */}
        <Input />
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
