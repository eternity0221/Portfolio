"use client";
import { _ButtonIF } from "@interfaces/system.interfaces";

export default function Button({props}:{props:_ButtonIF}){

    const { children, ...btnProps } = props;

    return(
        <button {...btnProps}>
            {children}
        </button>
    )
}