import React, {useState} from 'react';

import {ToDoItemsList} from "../../entities";
import {Input, Title, validateInput} from "shared";

export const Main = () => {
    const [list, setList] = useState<string[]>([])
    const [inputValue, setInputValue] = useState<string>('')

    const onEnterClick = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            validateInput(inputValue) && setList([...list, inputValue])
            setInputValue('')
        }
    }

    return (
        <div>
            <Title text='todos'/>
            <Input setValue={setInputValue} value={inputValue} onClick={onEnterClick}/>
            <ToDoItemsList list={list}/>
        </div>
    );
};