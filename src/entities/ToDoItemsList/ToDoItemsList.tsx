import React from "react";

import {EachToDoItem} from "../EachToDoItem/EachToDoItem";
import {ToDoItemsListProps} from "shared/types/types";

import cn from "./ToDoItemsList.module.scss";

export const ToDoItemsList = ({list, onStatusChange}: ToDoItemsListProps) => {
    return (
        <div className={cn.list}>
            {list.map((item) => (
                <EachToDoItem key={item.id} id={item.id} item={item} onStatusChange={onStatusChange}/>
            ))}
        </div>
    );
};
