import { useMemo, useState } from 'react';

export const UseMemoSample = () => {
    const [text, setText] = useState('');
    const [items, setItems] = useState<string[]>([]);

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const onClickButton = () => {
        setItems((prevItem) => {
            // return [...prevItem, text];
            prevItem.push(text);
            return prevItem;
        });
        setText('');
    };

    const numberOfCharacters1 = () => {
        console.log('num calc1');
        return items.reduce((sub, item) => sub + item.length, 0);
    };

    const numberOfCharacters2 = useMemo(() => {
        console.log('use calc2');
        return items.reduce((sub, item) => sub + item.length, 0);
    }, [items]);

    return (
        <div>
            <p>UseMemoSample</p>
            <div>
                <input value={text} onChange={onChangeInput} />
                <button onClick={onClickButton}>Add</button>
            </div>
            <div>
                {items.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <div>
                <p>Total Number odCharactors 1: {numberOfCharacters1()}</p>
                <p>Total Number odCharactors 2: {numberOfCharacters2}</p>
            </div>
        </div>
    );
};
