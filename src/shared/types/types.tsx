export interface InputProps {
    value: string,
    setValue: (value: string) => void,
    onClick: (event: any) => void
}

export interface EachToDoItemProps {
    index: number,
    item: string
}