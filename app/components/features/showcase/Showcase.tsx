"use client";

import { ChevronDown, Search, SquarePen } from "lucide-react";
import Image from "next/image";
import { SIDEBAR_ITEMS } from "./fasterAppLaunchData";
import { useState } from "react";
import Hero from "../../Hero";
import View from "./View";

export default function Showcase() {
    const [activeIcon, setActiveIcon] = useState(SIDEBAR_ITEMS[0].label);
    return (
        <section className="relative flex flex-col rounded border-white/10 pb-24">
            <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-268 w-480 -translate-x-1/2 -translate-y-1/2">
                <Image
                    className="object-cover"
                    src={"/aura.png"}
                    fill
                    alt="aura"
                />
            </div>
            <div className="absolute top-1/2 left-1/2 z-0 h-268 w-480 -translate-x-1/2 -translate-y-1/2 rounded-md border-white/10 bg-[radial-gradient(52.53%_57.5%_at_50%_100%,rgba(8,9,10,0)_0,rgba(8,9,10,0.5)_100%),linear-gradient(180deg,#08090a_10%,var(--color-primary-grey)_100%)]"></div>
            <div className="relative z-20">
                <Hero />

                <div className="mx-auto mt-12 flex h-180 w-330 rounded-lg border border-white/10 bg-[#101112]">
                    <div className="mt-2 mr-3.5 mb-3.5 ml-2 flex h-176 w-58 flex-col p-2">
                        <div className="mb-4 flex items-center pl-2">
                            <div className="flex items-center">
                                <Image
                                    className="h-auto w-18 object-contain"
                                    src="/logo.png"
                                    width={72}
                                    height={72}
                                    alt="linear"
                                />
                                <ChevronDown />
                            </div>
                            <div className="flex">
                                <Search
                                    className="size-4 text-[#53575D]"
                                    strokeWidth={2}
                                />
                                <SquarePen
                                    className="size-4 text-[#E3E5E6]"
                                    strokeWidth={2.5}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-0.75">
                            {SIDEBAR_ITEMS.map((item, i) => {
                                return (
                                    <>
                                        {i === 4 && (
                                            <p className="pl-2">Workspace ▼</p>
                                        )}
                                        {i === 7 && (
                                            <p className="pl-2">Favorites ▼</p>
                                        )}
                                        <div
                                            onClick={() =>
                                                setActiveIcon(
                                                    item.isClickable &&
                                                        item.label,
                                                )
                                            }
                                            className={`flex w-48 items-center gap-2 rounded-md px-2 py-1 ${item.isClickable ? "hover:cursor-pointer hover:bg-[#18191A]" : "hover:cursor-default"} ${activeIcon === item.label ? "bg-[#18191A]" : ""}`}
                                        >
                                            <item.icon
                                                strokeWidth={3}
                                                className="size-4 text-[#53575D]"
                                            />
                                            <p className="font-semibold text-[#8A8F98]">
                                                {item.label}
                                            </p>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                    <View activeWindow={activeIcon} />
                </div>
            </div>
        </section>
    );
}
