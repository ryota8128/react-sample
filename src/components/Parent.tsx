import { Children, useImperativeHandle, useRef, useState } from 'react';
import React from 'react';
import { ExitStatus } from 'typescript';
import Message from './Message';

const Child = React.forwardRef((props, ref) => {
    const [message, setMessage] = useState<string | null>(null);

    useImperativeHandle(ref, () => ({
        showMessage: () => {
            const date = new Date();
            const message = `Hello, it's ${date.toLocaleDateString()} now`;
            setMessage(message);
        },
    }));

    return <div>{message !== null ? <p>{message}</p> : null}</div>;
});

export const Parent = () => {
    const childRef = useRef<{ showMessage: () => void }>(null);
    const onClick = () => {
        if (childRef.current !== null) {
            childRef.current.showMessage();
        }
    };

    
    return (
        <div>
            <button onClick={onClick}>Show Message</button>
            <Child ref={childRef} />
        </div>
    );
};
