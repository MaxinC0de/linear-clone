import Image from "next/image";
import {
    CircleIcon,
    DayNightIcon,
    DoneIcon,
    HorizontalEllipsisIcon,
    PlusIcon,
} from "../../Icons";

const ITEMS = {
    placeholder: [
        {
            code: null,
            title: "Reduce UI flicker during autonomy",
            tag: null,
            src: null,
        },
        {
            code: null,
            title: "Add buffering for autonomy events streams",
            tag: null,
            src: null,
        },
        {
            code: null,
            title: "Reduce startup delay caused by vehicle sync",
            tag: null,
            src: null,
        },
        {
            code: null,
            title: "Fix delay route updates during rerouting",
            tag: null,
            src: null,
        },
    ],
    todo: [
        {
            code: "926",
            title: "Remove UI inconsistencies",
            tag: "Design",
            src: "1",
            tagColor: "purple",
        },
        {
            code: "2088",
            title: "TypeError: Cannot read properties",
            tag: "Bug",
            src: "2",
            tagColor: "red",
        },
        {
            code: "924",
            title: "Upgrade to Claude Opus 4.5",
            tag: "AI",
            src: "3",
            tagColor: "blue",
        },
        {
            code: "1882",
            title: "Optimize load times",
            tag: "Performance",
            src: "4",
            tagColor: "green",
        },
    ],
    inProgress: [
        {
            code: "1487",
            title: "Remove contentData from GraphQL API",
            tag: "61039",
            src: "5",
            tagColor: "green",
        },
        {
            code: "1028",
            title: "Launch page assets",
            tag: "Design",
            src: "6",
            tagColor: "purple",
        },
        {
            code: "2187",
            title: "Prevent duplicate ride requests on poor...",
            tag: "Bug",
            src: null,
            tagColor: "red",
        },
    ],
    done: [
        {
            code: "2074",
            title: "Clean up the",
            tag: "API",
            src: null,
        },
        {
            code: "1912",
            title: "Reduce the cost of",
            tag: "Bug",
            src: null,
        },
        {
            code: "1941",
            title: "",
            tag: "Bug",
            src: null,
        },
        {
            code: "1950",
            title: "",
            tag: "Bug",
            src: null,
        },
    ],
};

const COLUMNS = [
    { key: "placeholder", label: "placeholder", state: "0" },
    { key: "todo", label: "Todo", state: "71", icon: <CircleIcon /> },
    {
        key: "inProgress",
        label: "In Progress",
        state: "3",
        icon: <DayNightIcon />,
    },
    { key: "done", label: "Done", state: "10", icon: <DoneIcon /> },
];

const Dot = ({ color }) => (
    <div
        style={{ backgroundColor: color }}
        className="size-1.25 rounded-full opacity-40"
    ></div>
);

export default function Tasks() {
    const tagStyle = "bg-hovered border border border-white/8 gap-px";
    return (
        <div className="absolute top-1/5 left-0 flex min-h-156 w-[80%] justify-center rounded-[22px] border border-white/8 bg-[#090A0B] p-2">
            <div className="grid min-h-154 w-full grid-cols-4 grid-rows-1 place-items-start justify-center rounded-xl bg-[#0f1011] p-6 py-6">
                {COLUMNS.map((col, i) => (
                    <div
                        key={col}
                        className="flex h-101.5 w-75 flex-col items-center"
                    >
                        <div className="mb-4 flex w-60 justify-between px-2 text-xs">
                            <div className="text-secondary/85 gap-2 font-semibold">
                                <p>{col.label}</p>
                                <div>{col.icon}</div>
                                <p className="text-tertiary">{col.state}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <PlusIcon />
                                <HorizontalEllipsisIcon />
                            </div>
                        </div>
                        <div className="w-[80%]">
                            {ITEMS[col.key].map((item, i) => (
                                <>
                                    {i === 14 ? (
                                        <div></div>
                                    ) : (
                                        <div className="bg-view relative flex h-24 max-w-75 flex-col rounded-md border border-white/5 p-2">
                                            <div className="absolute top-2 right-2 opacity-40">
                                                {item.src ? (
                                                    <div className="size-4 rounded-full">
                                                        <Image
                                                            src={`/features/todolist/${i + 1}.png`}
                                                            fill
                                                            alt=""
                                                        />
                                                    </div>
                                                ) : (
                                                    <>
                                                        {/* prettier-ignore */}
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" d="M8 4a2 2 0 0 0-2 2v.5a2 2 0 0 0 4 0V6a2 2 0 0 0-2-2"></path><path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m-2.879-4.121-1.01 1.01a5.5 5.5 0 1 1 7.778 0l-1.01-1.01A3 3 0 0 0 8.757 10H7.243a3 3 0 0 0-2.122.879" clip-rule="evenodd"></path></svg>
                                                    </>
                                                )}
                                            </div>
                                            <p className="text-tertiary mb-1 text-[10px] font-normal">
                                                ENG-{item.code}
                                            </p>
                                            <p className="text-secondary/90 text-xs">
                                                {item.title}
                                            </p>
                                            <div className="mt-auto flex items-center gap-1 text-[10px]">
                                                <div className="bg-hovered rounded-sm border border-white/5 px-2 py-1">
                                                    <HorizontalEllipsisIcon />
                                                </div>
                                                <div className="bg-hovered flex items-center gap-1 rounded-sm border border-white/5 px-2 py-1">
                                                    {item.tagColor && (
                                                        <Dot
                                                            color={
                                                                item.tagColor
                                                            }
                                                        />
                                                    )}
                                                    <p className="text-secondary bg-hovered">
                                                        {item.tag}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
