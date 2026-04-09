import Link from "next/link";

const TABS = ["Assigned", "Created", "Subscribed", "Activity"];

const ITEMS = [
    {
        priority: 2,
        code: "2498",
        progression: 2,
        title: "Improve app startupt regression alert",
        tags: ["#54910", "iOS"],
        src: "/",
        timestamp: "Oct 9",
    },
    {
        priority: 1,
        code: "2380",
        progression: 2,
        title: "Add startup regression alert",
        tags: ["#55167", "Reliability"],
        src: "/",
        timestamp: "Oct 9",
    },
    {
        priority: 0,
        code: "2039",
        progression: 2,
        title: "Smooth vehicle position updates during slow networks",
        tags: ["#55209", "Bug", "Reliability"],
        src: "/",
        timestamp: "Oct 8",
    },
    {
        priority: 2,
        code: "2076",
        progression: 1,
        title: "Reduce ETA jitter",
        tags: ["#55423", "Performance", "Working..."],
        src: "/",
        timestamp: "Oct 6",
    },
    {
        priority: 2,
        code: "2108",
        progression: 1,
        title: "Handle GPS droupouts gracefully",
        tags: ["#55409", "Maps", "Working..."],
        src: "/",
        timestamp: "Oct 2",
    },
    {
        priority: 3,
        code: "2143",
        progression: 1,
        title: "Optimize map title loading on initial app open",
        tag: "Maps",
        src: "/",
        timestamp: "Oct 7",
    },
    {
        priority: 0,
        code: "2187",
        progression: 0,
        title: "Prevent duplicate ride requests on poor networks",
        tags: ["Bugs", "Working..."],
        src: "/",
        timestamp: "Oct 5",
    },
    {
        priority: 0,
        code: "2219",
        progression: 0,
        title: "Improve fallback experience during unexpected stops",
        tag: null,
        src: "/",
        timestamp: "Oct 5",
    },
    {
        priority: 1,
        code: "2254",
        progression: 0,
        title: "Reduce unnecessary map re-rendering on home screen",
        tag: "Maps",
        src: "/",
        timestamp: "Oct 10",
    },
    {
        priority: 1,
        code: "2291",
        progression: 0,
        title: "Clean up deprecated APIs used by the rider app",
        tag: "API",
        src: "/",
        timestamp: "Oct 9",
    },
    {
        priority: 2,
        code: "2327",
        progression: 0,
        title: "Performance",
        tags: ["#54910", "iOS"],
        src: "/",
        timestamp: "Oct 9",
    },
    {
        priority: 3,
        code: "2358",
        progression: 0,
        title: "Reduce flakiness in mobile UI tests",
        tag: "Reliability",
        src: "/",
        timestamp: "Oct 4",
    },
    {
        priority: 3,
        code: "2384",
        progression: 0,
        title: "Validate autonomy state before rendering ride screen",
        tag: "Reliability",
        src: "/",
        timestamp: "Oct 2",
    },
    {
        priority: 2,
        code: "2416",
        progression: 0,
        title: "Add buffering for autonomy and event streams",
        tag: "Reliability",
        src: "/",
        timestamp: "Oct 1",
    },
    {
        priority: 2,
        code: "2442",
        progression: 0,
        title: "Clarify vehicle decision-making during stops",
        tag: "Bug",
        src: "/",
        timestamp: "Oct 1",
    },
];

export default function Issues() {
    return (
        <div className="flex flex-col gap-y-6 border-b border-white/5 pr-6 pl-8">
            <div className="flex h-11 w-full items-center text-xs">
                <p className="text-secondary/90 mr-3 font-semibold">
                    My issues
                </p>
                {TABS.map((tab, i) => (
                    <p
                        className={`text-tertiary hover:bg-hovered hover:text-secondary/90 flex cursor-pointer items-center justify-center px-2 py-2 hover:rounded-sm ${i === 1 ? "bg-hovered rounded-sm" : ""}`}
                    >
                        {tab}
                    </p>
                ))}
            </div>
            <div>la</div>
        </div>
    );
}
