import { useCallback, useDebugValue, useState } from 'react';

const useInput = () => {
    const [state, setState] = useState<string>('');
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value);
    }, []);

    useDebugValue(`Input: ${state}`);
    return [state, onChange] as const;
};

export const Input = () => {
    const [text, onChanges] = useInput();

    return (
        <div>
            <input type="text" value={text} onChange={onChanges} />
            <p>Input: {text}</p>
        </div>
    );
};
