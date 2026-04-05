import Link from "next/link";
import { ArrowRight, Dot } from "lucide-react";

export default function Hero() {
    return(
        <section className="flex flex-col justify-center w-full gap-y-6">
            <h1 className="text-[64px] text-primary-white leading-15">
                <span>The product development</span>
                <span className="block">system for teams and agents</span>    
            </h1>
            <div className="flex justify-between items-center">
                <p className="text-[15px] text-primary-grey">Purpose-built for planning and building products. Designed for the AI era.</p>
                <Link className="flex items-center gap-2 group text-[15px]" href="/">
                    <Dot className="transition-colors text-[#5E6AD2] group-hover:text-[#6f7be6] size-12" size={16} />                    <p className="text-[#D0D6E0] group-hover:text-white">Issue track is dead</p>
                    <span className={`flex gap-2 text-primary-grey group-hover:text-[#a4a6aa]`}>linear.app/next <ArrowRight /></span>
                </Link>
            </div>
           
        </section>
    )
} 