import React from "react";

import {EachToDoItem} from "../EachToDoItem/EachToDoItem";

export const ToDoItemsList = ({list}: { list: Array<string> }) => {
    return (
        <div>
            {list.map((item: string, index: number) => <EachToDoItem item={item} index={index}/>)}
        </div>
    )
}