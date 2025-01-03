import Image from "next/image"
import bg from "@public/img/background.png"
import frame from "@public/img/frame.png"

export default function BeginningPage () {
    return (
        <div className="flex-grow border h-[896px] border-solid border-primary/50 relative">
            <Image src={bg} alt="" fill quality={100} sizes="100vw" className="object-cover"/>
            <Image src={frame} alt="" quality={100} height={8} width={8} className="absolute object-contain left-0 top-0"/>
            <Image src={frame} alt="" quality={100} height={8} width={8} className="absolute object-contain right-0 top-0 rotate-90"/>
            <Image src={frame} alt="" quality={100} height={8} width={8} className="absolute object-contain right-0 bottom-0 rotate-180"/>
            <Image src={frame} alt="" quality={100} height={8} width={8} className="absolute object-contain left-0 bottom-0 -rotate-90"/>
        </div>
    )
}