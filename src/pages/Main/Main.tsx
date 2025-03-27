import React, {useState} from 'react';

export const Main = () => {
    const [list, setList] = useState<string[]>([])
    const [inputValue, setInputValue] = useState<string>('')

    const onEnterClick = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            setList([...list, inputValue])
            setInputValue('')
        }
    }

    return (
        <div>
            <h1>todos</h1>
            <input
                placeholder="What needs to be done?"
                value={inputValue}
                onInput={(event) => setInputValue(event.currentTarget.value)}
                onKeyDown={(event) => onEnterClick(event)}
            />
            <div>
                {list.map((item: string, index: number) => {
                    return <div key={index}>{`${index + 1}. ${item}`}</div>;
                })}
            </div>
        </div>
    );
};