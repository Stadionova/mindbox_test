import React from "react";

import {Button, FilterStatuses} from "shared";

import cn from "./Filters.module.scss";

export const Filters = ({onFilterClick}: { onFilterClick: (status: string) => void }) => {
    return (
        <div className={cn.itemsStatus}>
            {Object.values(FilterStatuses).map((status: string) => (
                <Button onClick={() => onFilterClick(status)} key={status} text={status}/>
            ))}
        </div>
    )
}