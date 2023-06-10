import { memo, useCallback, useState } from 'react';

type FizzProps = {
    isFizz: boolean;
};

const Fizz = memo<FizzProps>((props) => {
    const { isFizz } = props;
    // console.log(`Fizzが再描画されました, isFizz: ${isFizz}`);
    return <span>{isFizz && 'Fizz'}</span>;
});

type BuzzProps = {
    isBuzz: boolean;
};

const Buzz = memo((props: BuzzProps) => {
    const { isBuzz } = props;
    // console.log(`Buzzが再描画されました, isBuzz: ${isBuzz}`);
    return <span>{isBuzz && 'Buzz'}</span>;
});

type ButtonProps = {
    onClick: () => void;
};

const DecrementButton = memo((props: ButtonProps) => {
    const { onClick } = props;
    console.log('DecrementButtonが再描画されました');
    return <button onClick={onClick}>Decrement</button>;
});

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
    const decrement = useCallback(() => {
        setCount((c) => c - 1);
    }, []);
    const increment = useCallback(() => {
        setCount((c) => c + 1);
    }, []);
    const double = useCallback(() => {
        setCount((c) => c * 2);
    }, []);

    const [count, setCount] = useState(1);
    const isFizz = count % 3 === 0;
    const isBuzz = count % 5 === 0;

    return (
        <>
            <p>{`現在のカウント: ${count}`}</p>
            <DecrementButton onClick={decrement} />
            <IncrementButton onClick={increment} />
            <DoubleButton onClick={double} />
            <br />
            <br />
            <Fizz isFizz={isFizz}></Fizz>
            <Buzz isBuzz={isBuzz}></Buzz>
        </>
    );
};
