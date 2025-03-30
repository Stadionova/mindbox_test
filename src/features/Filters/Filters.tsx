import React from "react";

import {Button} from "shared";

import cn from "./Filters.module.scss";

export const Filters = () => {
    return (
        <div className={cn.itemsStatus}>
            <Button text='ALL'/>
            <Button text='ACTIVE'/>
            <Button text='COMPLETED'/>
        </div>
    )
}