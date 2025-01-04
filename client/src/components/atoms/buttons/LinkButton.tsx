"use client";
import Link from "next/link";
import { _LinkIF } from "@interfaces/system.interfaces";

export default function LinkButton({className, href="#", children}:_LinkIF){
    return(
        <Link href={href} className={className}>
            {children}
        </Link>
    )
}