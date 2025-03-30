import React from "react";

import {EachToDoItem} from "../EachToDoItem/EachToDoItem";

import cn from "./ToDoItemsList.module.scss";

export const ToDoItemsList = ({list}: { list: Array<string> }) => {
    return (
        <div className={cn.list}>
            {list.map((item: string, index: number) => <EachToDoItem key={index} item={item} index={index}/>)}
        </div>
    )
}