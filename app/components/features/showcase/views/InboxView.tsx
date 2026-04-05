import {
    Archive,
    ArrowDownNarrowWide,
    ArrowUp,
    Clock4,
    Ellipsis,
    SlidersHorizontal,
} from "lucide-react";
import { INBOX } from "./views";
import Image from "next/image";

const Icon = ({ icon: IconComponent }) => (
    <div className="group flex h-6 w-6 items-center justify-center rounded-xs hover:cursor-pointer hover:bg-[#1f2020]">
        <IconComponent className="size-4 text-[#939394] group-hover:text-[#c0bbbb]" />
    </div>
);

export default function InboxView() {
    const borderStyle = "border-white/10";
    const textPrimary = "text-[#D1D7E1]";
    const textSecondary = "text-[#a4a7a7]";
    return (
        <div className="grid h-full grid-cols-[30%_70%] grid-rows-[7%_93%]">
            {/* TOP LEFT */}
            <header
                className={`flex items-center justify-between border-b p-4 ${borderStyle}`}
            >
                <div className="flex items-center gap-2">
                    <p className={`font-semibold ${textPrimary}`}>Inbox</p>
                    <Icon icon={Ellipsis} />
                </div>
                <div className="flex items-center gap-2">
                    <Icon icon={ArrowDownNarrowWide} />
                    <Icon icon={SlidersHorizontal} />
                </div>
            </header>

            {/* TOP RIGHT */}
            <header
                className={`text-3.25 flex items-center justify-between gap-2 border-b border-l p-2 pl-12 font-semibold ${textPrimary} ${borderStyle}`}
            >
                <div className="flex items-center gap-2">
                    <p>App freezes on splash screen</p>
                    <Icon icon={Ellipsis} />
                </div>
                <div className="mr-6 flex items-center gap-4">
                    <Icon icon={Clock4} />
                    <Icon icon={Archive} />
                </div>
            </header>

            {/* BOTTOM LEFT */}
            <aside className="flex flex-col gap-y-1 p-2 text-xs">
                {INBOX.map((item, i) => (
                    <div
                        className={`relative flex shrink-0 items-center rounded-md px-3 py-2 hover:cursor-default hover:bg-[#191A1B] ${i === 0 ? "rounded-md bg-[#191A1B]" : ""}`}
                    >
                        <Image src={item.src} width={33} height={33} alt="" />
                        <div className="flex flex-col pr-4 pl-2">
                            <p className="font-semibold text-[#B3B9C2]">
                                {item.title}
                            </p>
                            <p className={`${textSecondary}`}>
                                {item.description}
                            </p>
                        </div>
                        <p
                            className={`absolute right-2 bottom-2 ${textSecondary}`}
                        >
                            {item.timestamp}
                        </p>
                    </div>
                ))}
            </aside>

            {/* BOTTOM RIGHT */}
            <main className={`flex flex-col border-l p-4 ${borderStyle}`}>
                <h2>App freezes on splash screen</h2>
                <p>
                    After launch, the splash screen remains visible indefinitely
                    with no change in state. <br />
                    The app does not progress to the homescreen.
                </p>
                <div className="flex flex-col">
                    <div>
                        <p>Triage Intelligence</p>
                        <Icon icon={Ellipsis} />
                    </div>
                    <div className="flex">
                        <p>Suggestions</p>
                    </div>
                    <div className="flex">
                        <p>Duplicate</p>
                        <p>ENG-1998 Loading spinner keeps running on startup</p>
                    </div>
                    <div className="flex">
                        <p>Related</p>
                        <p>ENG-1820 Mobile app take a long time to open</p>
                    </div>
                </div>
                <h3>Activity</h3>
                <p>
                    Linear created the issue via Stack on behald of Nan 2min ago
                </p>
                <p>Triage Intelligence added the label Bug 2min ago</p>
                <p>Linear notified Karri 1min ago</p>
                <div className="flex flex-col">
                    <p>@Cursor take a look</p>
                    <div className="flex">
                        <button>
                            <Icon icon={ArrowUp} />
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
