import React from "react";

import cn from "./Title.module.scss";

export const Title = ({text}: { text: string }) => <h1 className={cn.title}>{text}</h1>