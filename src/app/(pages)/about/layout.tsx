"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import useDateTimeClock from "@hooks/system/useDateTimeClock"
import bg from "@public/img/background.png"
import frame from "@public/img/frame.png"
import ava from "@public/img/ava.jpg"
import routes from "@consts/routes"

export default function Layout () {

    const pathname = usePathname();

    const links = [
        {label: routes.beginning.label, href: routes.beginning.href, desc: "Suscipit est consequatur nemo voluptatem est labore saepe."},
        {label: routes.about.label, href: routes.about.href, desc: "Suscipit est consequatur nemo voluptatem est labore saepe."},
        {label: routes.dataLogs.label, href: routes.dataLogs.href, desc: "Suscipit est consequatur nemo voluptatem est labore saepe."},
        {label: routes.achievments.label, href: routes.achievments.href, desc: "Suscipit est consequatur nemo voluptatem est labore saepe."},
        {label: routes.creations.label, href: routes.creations.href, desc: "Suscipit est consequatur nemo voluptatem est labore saepe."},
        {label: routes.games.label, href: routes.games.href, desc: "Suscipit est consequatur nemo voluptatem est labore saepe."}
    ]

    const timeServer = useDateTimeClock("Hor:Min:Sec");
    
    const timeLocal = useDateTimeClock("Hor:Min:Sec");

    return (
        <div className="grid h-screen grid-cols-1">
            <header className="h-[56px]">
                <div className="container h-full">
                    <nav className="flex justify-between items-center w-full h-inherit">
                        <div className="flex uppercase items-end">
                            <p className="text-[#7DFF68] font-BigShouldersDisplay text-2xl">48</p>
                            <p className="text-white/50 font-BigShouldersDisplay text-base ml-1">Level</p>

                            <p className="text-[#7DFF68] font-BigShouldersDisplay text-2xl ml-1">1,425</p>
                            <p className="text-white/50 font-BigShouldersDisplay text-base ml-1">coins awarded</p>
                        </div>
                        <div className="flex uppercase">
                            <p className="text-[#ffffff] font-BigShouldersDisplay">credits</p>
                            <p className="text-white/50 font-BigShouldersDisplay ml-7">server time:</p> <p className="text-[#ffffff] font-BigShouldersDisplay ml-1">{timeServer.dateTime}</p>
                            <p className="text-white/50 font-BigShouldersDisplay ml-7">local time:</p> <p className="text-[#ffffff] font-BigShouldersDisplay ml-1">{timeLocal.dateTime}</p>
                        </div>
                    </nav>
                </div>
            </header>
            <main className="flex">
                <div className="flex flex-col pl-[78px] pr-[16px]">
                    <div className="flex flex-center flex-start p-3 border border-solid border-primary/50 relative">
                        <Image src={ava} alt="" height={164} width={164} quality={100} className="object-cover w-[164px] h-[164px]"/>
                        <Image src={frame} alt="" quality={100} height={8} width={8} className="absolute object-contain left-0 top-0"/>
                        <Image src={frame} alt="" quality={100} height={8} width={8} className="absolute object-contain right-0 top-0 rotate-90"/>
                        <Image src={frame} alt="" quality={100} height={8} width={8} className="absolute object-contain right-0 bottom-0 rotate-180"/>
                        <Image src={frame} alt="" quality={100} height={8} width={8} className="absolute object-contain left-0 bottom-0 -rotate-90"/>
                    </div>
                    <div className="uppercase">
                        <p className="text-white font-Iceland text-sm">NAME</p>
                        <p className="text-primary font-BigShouldersDisplay text-lg">Luz Wintheiser</p>

                        <p className="text-white font-Iceland text-sm">occupation</p>
                        <p className="text-primary font-BigShouldersDisplay text-lg">web developer</p>

                        <p className="text-white font-Iceland text-sm">corporation</p>
                        <p className="text-primary font-BigShouldersDisplay text-lg">Legacy.ai</p>
                        
                        <p className="text-white font-Iceland text-sm">availability</p>
                        <button className="bg-primary uppercase text-black font-BigShouldersDisplay text-lg w-full py-1 hover:text-primary hover:bg-white duration-500">open for hire</button>

                        <p className="text-white font-Iceland text-sm">social</p>
                        <button className="border border-solid border-primary uppercase text-primary font-BigShouldersDisplay text-lg w-full py-1 hover:border-white hover:text-white duration-500">open connection</button>
                    </div>
                </div>
                <div className="flex-grow border h-[896px] border-solid border-primary/50 relative">
                    <Image src={bg} alt="" fill quality={100} sizes="100vw" className="object-cover"/>
                    <Image src={frame} alt="" quality={100} height={8} width={8} className="absolute object-contain left-0 top-0"/>
                    <Image src={frame} alt="" quality={100} height={8} width={8} className="absolute object-contain right-0 top-0 rotate-90"/>
                    <Image src={frame} alt="" quality={100} height={8} width={8} className="absolute object-contain right-0 bottom-0 rotate-180"/>
                    <Image src={frame} alt="" quality={100} height={8} width={8} className="absolute object-contain left-0 bottom-0 -rotate-90"/>
                </div>
                <div className="flex flex-col pl-[16px] pr-[78px]">
                    <div className="uppercase w-36 h-18">
                        <p className="bg-primary duration-500 text-white font-BigShouldersDisplay">active quest</p>
                        <p className="bg-[#3333331a] text-white/50 font-Iceland text-xs">the react skill-up line</p>
                    </div>
                    <div className="uppercase">
                        <p className="text-white font-Iceland text-sm">quest name</p>
                        <p className="text-primary font-BigShouldersDisplay text-lg">React website</p>

                        <p className="text-white font-Iceland text-sm">goal</p>
                        <p className="text-[#7A7A7A] font-BigShouldersDisplay text-xs w-48">Build this website. Implement a full react website with multiple routers, UI elements and tricky styling. Make it all work great!</p>

                        <p className="text-white font-Iceland text-sm">corporation</p>
                        <p className="text-primary font-BigShouldersDisplay text-lg">Legacy.ai</p>
                    
                    </div>
                </div>
            </main>
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
        </div>
    )
}