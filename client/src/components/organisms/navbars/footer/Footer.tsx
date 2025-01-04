"use client"
import { usePathname } from "next/navigation";

import NavButton from "@atoms/buttons/NavButton";

import routes from "@consts/routes";

export default function Footer () { 

    const pathname = usePathname();

    const links = [
        {label: routes.beginning.label, href: routes.beginning.href, desc: "Home page"},
        {label: routes.about.label, href: routes.about.href, desc: "Information about my personal qualities"},
        {label: routes.dataLogs.label, href: routes.dataLogs.href, desc: "Information about changes in projects"},
        {label: routes.achievments.label, href: routes.achievments.href, desc: "My personal achievements in web development"},
        {label: routes.creations.label, href: routes.creations.href, desc: "My unique projects"},
        {label: routes.games.label, href: routes.games.href, desc: "interactive games."}
    ]

    return (
        <footer className="relative bottom-[26px]">
            <div className="container h-full">
                <div className="flex justify-center gap-4 w-full h-inherit">
                    {links.map((link,index)=>
                        <NavButton
                            key={`nav-elem-${index}`}
                            className="uppercase"
                            href={link.href}
                            isActive={pathname == link.href}
                            label={link.label}
                            desc={link.desc} 
                        />
                    )}
                </div>
            </div>
    </footer>
    )
}