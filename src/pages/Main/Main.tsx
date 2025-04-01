import React, {useState, useEffect} from 'react';

import {ToDoItemsList} from "../../entities";
import {FilterStatuses, Input, Title, validateInput} from "shared";
import {Filters} from "features";
import {ItemProps} from "shared/types/types";

import cn from "./Main.module.scss";

export const Main = () => {
    const [list, setList] = useState<ItemProps[]>(() => {
        const savedList = localStorage.getItem("todoList");
        return savedList ? JSON.parse(savedList) : [];
    });

    const [inputValue, setInputValue] = useState<string>('');
    const [activeFilter, setActiveFilter] = useState<string>(FilterStatuses.ALL);

    const setFilteredTodoList = (status: string) => {
        if (status === FilterStatuses.ALL) {
            return list;
        } else {
            return list.filter((item) => item.status === status);
        }
    };

    const onEnterClick = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && validateInput(inputValue)) {
            const newItem = {id: Date.now(), value: inputValue, status: FilterStatuses.ACTIVE};
            setList((prevList) => [newItem, ...prevList]);
            setInputValue('');
        }
    };

    const onFilterClick = (status: string) => {
        setActiveFilter(status);
    };

    const onStatusChange = (id: number) => {
        setList((prevList) =>
            prevList.map((item) =>
                item.id === id ? {
                    ...item,
                    status: item.status === FilterStatuses.ACTIVE ? FilterStatuses.COMPLETED : FilterStatuses.ACTIVE
                } : item
            )
        );
    };

    const filteredList = setFilteredTodoList(activeFilter);

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(list));
    }, [list]);

    return (
        <div className={cn.wrapper}>
            <div className={cn.resizableContainer}>
                <div className={cn.main}>
                    <Title text="todos"/>
                    <Input setValue={setInputValue} value={inputValue} onClick={onEnterClick}/>
                    <ToDoItemsList list={filteredList} onStatusChange={onStatusChange}/>
                    <Filters onFilterClick={onFilterClick}/>
                </div>
            </div>
        </div>
    );
};