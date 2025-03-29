import React from "react";

import {EachToDoItem} from "../EachToDoItem/EachToDoItem";

export const ToDoItemsList = ({list}: { list: Array<string> }) => {
    return (
        <div>
            {list.map((item: string, index: number) => <EachToDoItem key={index} item={item} index={index}/>)}
        </div>
    )
}