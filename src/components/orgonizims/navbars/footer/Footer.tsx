"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import routes from "@consts/routes"

export default function Footer () { 

    const pathname = usePathname();

    const links = [
        {label: routes.beginning.label, href: routes.beginning.href, desc: "Suscipit est consequatur nemo voluptatem est labore saepe."},
        {label: routes.about.label, href: routes.about.href, desc: "Suscipit est consequatur nemo voluptatem est labore saepe."},
        {label: routes.dataLogs.label, href: routes.dataLogs.href, desc: "Suscipit est consequatur nemo voluptatem est labore saepe."},
        {label: routes.achievments.label, href: routes.achievments.href, desc: "Suscipit est consequatur nemo voluptatem est labore saepe."},
        {label: routes.creations.label, href: routes.creations.href, desc: "Suscipit est consequatur nemo voluptatem est labore saepe."},
        {label: routes.games.label, href: routes.games.href, desc: "Suscipit est consequatur nemo voluptatem est labore saepe."}
    ]

    return (
        <footer className="h-[80px]">
        <div className="flex justify-center gap-4 my-4">
            {links.map((link,index)=>
                <Link key={`navelem-${index}`} className="group" href={link.href}>
                    <div className="uppercase w-36 h-18">
                        <p className={`group-hover:bg-primary duration-500 text-white font-BigShouldersDisplay ${pathname == link.href ? "bg-primary" : "bg-[#242425]"}`}>{link.label}</p>
                        <p className="bg-[#3333331a] text-white/50 font-Iceland text-xs">{link.desc}</p>
                    </div>
                </Link>
            )}
        </div>
    </footer>
    )
}