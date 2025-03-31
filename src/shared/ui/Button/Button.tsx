import React from "react";

import {ButtonProps} from "shared/types/types";

export const Button = ({text, onClick}: ButtonProps) => {
    return <button onClick={onClick}>{text}</button>
}