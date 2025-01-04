"use client"

export default function ProjectSitebar () { 

    return (
    <div className="flex flex-col">
        <div className="uppercase w-36 h-18">
            <p className="bg-primary duration-500 text-white font-BigShouldersDisplay">active quest</p>
            <p className="bg-[#e84a4a1b] text-white/50 font-Iceland text-xs">the react skill-up line</p>
        </div>
        <div className="uppercase">
            <p className="text-white font-Iceland text-sm">quest name</p>
            <p className="text-primary font-BigShouldersDisplay text-lg">React website</p>

            <p className="text-white font-Iceland text-sm">goal</p>
            <p className="text-[#7A7A7A] w-48 font-BigShouldersDisplay text-sm">Build this website. Implement a full react website with multiple routers, UI elements and tricky styling. Make it all work great!</p>
        </div>
    </div>
    )
}