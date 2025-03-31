import React from "react";

import {FilterStatuses} from "shared";

export interface InputProps {
    value: string;
    setValue: (value: string) => void;
    onClick: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface EachToDoItemProps {
    id: number;
    item: ItemProps;
    onStatusChange: (id: number) => void;
}

export interface ItemProps {
    id: number;
    value: string;
    status: FilterStatuses;
}

export interface ToDoItemsListProps {
    list: Array<ItemProps>;
    onStatusChange: (id: number) => void;
}

export interface ButtonProps {
    text: string;
    onClick: () => void;
}