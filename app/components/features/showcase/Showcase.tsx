"use client";

import { useState } from "react";
import { Hero, Sidebar, View } from "./";
import Image from "next/image";

export default function Showcase() {
    const [activeIcon, setActiveIcon] = useState();
    return (
        <section className="flex flex-col gap-y-12">
            <Hero />
            <div className="relative isolate z-20 flex max-h-180 max-w-328 flex-col rounded-xl border border-white/8 bg-[#101112] pb-24">
                <Sidebar
                    activeIcon={activeIcon}
                    setActiveIcon={setActiveIcon}
                />

                <View activeWindow={activeIcon} />
            </div>
        </section>
    );
}
