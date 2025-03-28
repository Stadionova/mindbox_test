import React, {useState} from "react";

import cn from "./EachToDoItem.module.scss";

export const EachToDoItem = ({index, item}: { index: number, item: string }) => {
    const [isItemChecked, setItemChecked] = useState<boolean>(false)
    return (
        <div className={cn.item}
             onClick={() => isItemChecked ? setItemChecked(false) : setItemChecked(true)}>
            <input type="radio" name="radioGroup" checked={isItemChecked}/>
            <div key={index}>{item}</div>
        </div>
    )
}