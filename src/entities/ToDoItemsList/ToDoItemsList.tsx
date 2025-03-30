import React from "react";

import {EachToDoItem} from "../EachToDoItem/EachToDoItem";
import {ToDoItemsListProps} from "shared/types/types";

import cn from "./ToDoItemsList.module.scss";

export const ToDoItemsList = ({list, setList}: ToDoItemsListProps) => {
    return (
        <div className={cn.list}>
            {list.map((item, index) => (
                <EachToDoItem key={index} item={item} id={index} list={list} setList={setList}/>
            ))}
        </div>
    )
}