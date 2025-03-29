import React, {useState} from "react";

import {EachToDoItemProps} from "shared/types/types";

import cn from "./EachToDoItem.module.scss";

export const EachToDoItem = ({index, item}: EachToDoItemProps) => {
    const [isItemChecked, setItemChecked] = useState<boolean>(false)

    const onItemClick = () => isItemChecked ? setItemChecked(false) : setItemChecked(true)

    return (
        <div className={cn.item} onClick={onItemClick}>
            <input type="radio" onChange={onItemClick} checked={isItemChecked}/>
            <div className={isItemChecked ? cn.text : ''} key={index}>{item}</div>
        </div>
    )
}