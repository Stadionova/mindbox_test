import React, {useEffect, useState} from 'react';

import {ToDoItemsList} from "../../entities";
import {FilterStatuses, Input, Title, validateInput} from "shared";
import {Filters} from "features";
import {ItemProps} from "shared/types/types";

import cn from "./Main.module.scss";

export const Main = () => {
    const [list, setList] = useState<ItemProps[]>([])
    const [inputValue, setInputValue] = useState<string>('')

    const onEnterClick = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            validateInput(inputValue) && setList([...list, {value: inputValue, status: FilterStatuses.ACTIVE}])
            setInputValue('')
        }
    }

    useEffect(() => {
        console.log('list ', list)
    }, [list])

    return (
        <div className={cn.main}>
            <Title text='todos'/>
            <Input setValue={setInputValue} value={inputValue} onClick={onEnterClick}/>
            <ToDoItemsList list={list} setList={setList}/>
            <Filters/>
        </div>
    );
};