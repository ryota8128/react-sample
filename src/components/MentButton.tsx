import { memo, useState } from 'react';

type ButtonProps = {
    onClick: () => void;
};

const DecrementButton = (props: ButtonProps) => {
    const { onClick } = props;
    console.log('DecrementButtonが再描画されました');
    return <button onClick={onClick}>Decrement</button>;
};

const IncrementButton = memo((props: ButtonProps) => {
    const { onClick } = props;
    console.log('IncrementButtonが再描画されました');
    return <button onClick={onClick}>Increment</button>;
});

const DoubleButton = memo((props: ButtonProps) => {
    const { onClick } = props;
    console.log('DoubleButtonが再描画されました');
    return <button onClick={onClick}>Double</button>;
});

export const Parent = () => {
    const [count, setCount] = useState(0);
    const decrement = () => {
        setCount((c) => c - 1);
    };
    const increment = () => {
        setCount((c) => c + 1);
    };
    const double = () => {
        setCount((c) => c * 2);
    };

    return (
        <>
            <DecrementButton onClick={decrement} />
            <IncrementButton onClick={increment} />
            <DoubleButton onClick={double} />
        </>
    );
};

