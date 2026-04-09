import Image from "next/image";

const ITEMS = [
    {
        src: "1.avif",
        title: "MOB-3902 App freezes on...",
        description: "Nan added issue to Mobile triage",
        timestamp: "8m",
    },
    {
        src: "2.png",
        title: "ENG-2002 Fix delayed UI...",
        description: "Cursor finished: Fix delayed UI",
        timestamp: "1h",
    },
    {
        src: "3.avif",
        title: "Infra stability",
        description: "New initiative update by Mingjie",
        timestamp: "4h",
    },
    {
        src: "4.avif",
        title: "Car-to-app synchronization",
        description: "Car-to-app synchronization",
        timestamp: "1d",
    },
];

export default function SideSection() {
    return (
        <aside className="bg-view flex flex-col gap-y-1 border-t border-r border-white/5 p-2 text-xs">
            {ITEMS.map((item, i) => (
                <div
                    className={`hover:bg-hovered flex h-13.5 w-75.75 cursor-default items-center rounded-sm px-3 ${i === 0 ? "bg-hovered" : ""}`}
                >
                    <div className="relative h-8 w-8 shrink-0">
                        <Image
                            src={`/features/inbox/${item.src}`}
                            className=""
                            fill
                            alt=""
                        />
                    </div>
                    <div className="ml-3 flex w-full items-end">
                        <div className="flex flex-col">
                            <p className="text-secondary">{item.title}</p>
                            <p className="text-tertiary font-normal">
                                {item.description}
                            </p>
                        </div>
                        <p className="text-tertiary ml-auto flex font-normal">
                            {item.timestamp}
                        </p>
                    </div>
                </div>
            ))}
        </aside>
    );
}
