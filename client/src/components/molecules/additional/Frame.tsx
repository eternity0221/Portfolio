"use client";
import Image from "next/image";
import frame from "@public/img/frame.png";

export default function Frame(){
    return(
        <>
            <Image src={frame} alt="" quality={100} height={8} width={8} className="frame -left-[2px] -top-[2px]"/>
            <Image src={frame} alt="" quality={100} height={8} width={8} className="frame -right-[2px] -top-[2px] rotate-90"/>
            <Image src={frame} alt="" quality={100} height={8} width={8} className="frame -right-[2px] -bottom-[2px] rotate-180"/>
            <Image src={frame} alt="" quality={100} height={8} width={8} className="frame -left-[2px] -bottom-[2px] -rotate-90"/>
        </>
    )
}