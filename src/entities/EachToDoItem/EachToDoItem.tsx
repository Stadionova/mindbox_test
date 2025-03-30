import React from "react";

import {EachToDoItemProps} from "shared/types/types";
import {FilterStatuses} from "shared";

import cn from "./EachToDoItem.module.scss";

export const EachToDoItem = ({id, item, setList, list}: EachToDoItemProps) => {

    const status = item.status
    const value = item.value

    const filterItemStatus = (status: FilterStatuses) => {
        return status === FilterStatuses.COMPLETED ? FilterStatuses.ACTIVE : FilterStatuses.COMPLETED
    }

    const onItemClick = () => {
        const updatedList = list.map((item, index) => {
                if (index === id) {
                    return {...item, status: filterItemStatus(status)}
                } else {
                    return item
                }
            }
        );
        setList(updatedList);
    };

    return (
        <div className={cn.item} onClick={onItemClick}>
            <input type="radio" onChange={onItemClick} checked={status === FilterStatuses.COMPLETED}/>
            <div className={status === FilterStatuses.COMPLETED ? cn.text : ''}>
                {value}
            </div>
        </div>
    );
};