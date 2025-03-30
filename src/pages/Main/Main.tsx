import React, {useState} from 'react';

import {ToDoItemsList} from "../../entities";
import {Input, Title, validateInput} from "shared";
import {Filters} from "features";

import cn from "./Main.module.scss";

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
        <div className={cn.main}>
            <Title text='todos'/>
            <Input setValue={setInputValue} value={inputValue} onClick={onEnterClick}/>
            <ToDoItemsList list={list}/>
            <Filters/>
        </div>
    );
};