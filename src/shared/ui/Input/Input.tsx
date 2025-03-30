import React from "react";

import {InputProps} from "shared/types/types";

import cn from "./Input.module.scss";

export const Input = ({value, setValue, onClick}: InputProps) => {
    return (
        <div className={cn.input}>
            <input
                placeholder="What needs to be done?"
                value={value}
                onInput={(event) => setValue(event.currentTarget.value)}
                onKeyDown={(event) => onClick(event)}
            />
        </div>
    )
}