"use client";
import LinkButton from "./LinkButton";

import { NavButtonIF } from "@interfaces/button.interaces";

export default function NavButton({className, href="#", isActive, label, desc}:NavButtonIF){
    return(
        <LinkButton href={href} className={`relative group hover:bg-primary-alternative duration-500 ${isActive ? "bg-primary-alternative" : "bg-secondary"} ${className}`}>
            <div className={`flex items-center w-full tracking-widest font-BigShouldersDisplay text-white`}>
                <p className={`group-hover:bg-primary duration-500 px-2 py-px flex-grow ${isActive ? "bg-primary" : "bg-secondary-alternative"}`}>{label}</p>
            </div>
            <div className={`flex flex-col p-2 tracking-wide font-Iceland w-48 group-hover:text-white ${isActive ? "text-white" : "text-gray-500"}`}>
                <p className="duration-500 text-xs">{desc}</p>
            </div>
            <span className={`absolute left-0 top-0 w-[2px] duration-500 group-hover:h-full group-hover:bg-primary ${isActive ? "bg-primary h-full" : "bg-secondary-alternative h-0"}`} />
        </LinkButton>
    )
}