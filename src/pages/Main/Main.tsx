import React, {useState} from 'react';

import cn from './Main.module.scss';

export const Main = () => {
    const [list, setList] = useState<string[]>([])
    const [inputValue, setInputValue] = useState<string>('')

    const onEnterClick = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            setList([...list, inputValue])
            setInputValue('')
        }
    }

    const EachToDoItem = ({index, item}: { index: number, item: string }) => {
        const [isItemChecked, setItemChecked] = useState<boolean>(false)
        return (
            <div className={cn.item}
                 onClick={() => isItemChecked ? setItemChecked(false) : setItemChecked(true)}>
                <input type="radio" name="radioGroup" checked={isItemChecked}/>
                <div key={index}>{item}</div>
            </div>
        )
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
                {list.map((item: string, index: number) => <EachToDoItem item={item} index={index}/>)}
            </div>
        </div>
    );
};