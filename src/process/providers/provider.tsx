"use client";
import TanStackProvider from "./TanStackProvider";

export default function Providers({children}:{children:React.ReactNode}){
    return(
        <TanStackProvider>
            {children}
        </TanStackProvider>
    )
}