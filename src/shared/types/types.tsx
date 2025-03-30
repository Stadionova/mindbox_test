import {FilterStatuses} from "shared";

export interface InputProps {
    value: string,
    setValue: (value: string) => void,
    onClick: (event: any) => void
}

export interface EachToDoItemProps {
    id: number,
    item: ItemProps,
    setList: (value: any) => void,
    list: Array<ItemProps>
}

export interface ItemProps {
    value: string,
    status: FilterStatuses
}

export interface ToDoItemsListProps {
    list: Array<ItemProps>,
    setList: (value: any) => void
}