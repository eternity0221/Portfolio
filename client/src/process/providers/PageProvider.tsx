"use client";
import { usePathname } from "next/navigation";

export default function PageProvider({children}:{children:React.ReactNode}){
    const pathname = usePathname();
    return pathname == "/" ? <>{children}</> : <div className="wrapper">{children}</div>
}