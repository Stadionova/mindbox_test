import React from "react";

import {EachToDoItemProps} from "shared/types/types";
import {FilterStatuses} from "shared";

import cn from "./EachToDoItem.module.scss";

export const EachToDoItem = ({item, onStatusChange}: EachToDoItemProps) => {
    return (
        <div className={cn.item} onClick={() => onStatusChange(item.id)}>
            <input
                type="radio"
                onChange={() => onStatusChange(item.id)}
                checked={item.status === FilterStatuses.COMPLETED}
            />
            <div className={item.status === FilterStatuses.COMPLETED ? cn.text : ""}>
                {item.value}
            </div>
        </div>
    );
};