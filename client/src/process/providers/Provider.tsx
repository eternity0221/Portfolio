"use client";
import TanStackProvider from "./TanStackProvider";
import PageProvider from "./PageProvider";

export default function Providers({children}:{children:React.ReactNode}){
    return(
        <TanStackProvider>
            <PageProvider>{children}</PageProvider>
        </TanStackProvider>
    )
}