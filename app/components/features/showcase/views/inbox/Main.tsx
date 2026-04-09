import { CubeIcon, DayNightIcon, LoaderCutIcon } from "@/app/components/Icons";

const ACTIVITIES = [
    {
        icon: <CubeIcon />,
        description: (
            <p className="font-medium">
                <span className="font-medium">Linear</span> created the issue
                via <span className="font-medium">Slack</span> on behald of{" "}
                <span className="font-medium">Nan</span> · 2min ago
            </p>
        ),
    },
    {
        icon: <CubeIcon />,
        description: (
            <p>
                <span className="font-medium">Triage Intelligence</span> added
                the label <span className="font-medium">Bug</span> · 2min ago
            </p>
        ),
    },
    {
        icon: <CubeIcon />,
        description: (
            <p>
                <span className="font-medium">Linear</span>
                notified <span className="font-medium">Karri</span> · 1min ago
            </p>
        ),
    },
];

const TRIAGE_ITEMS = [
    {
        title: "Suggestions",
        norm: null,
        description: null,
        icon: null,
        suggestionComponent: <div className="gap-x-1"></div>,
    },
    {
        title: "Duplicate",
        norm: "ENG-1998",
        description: "Loading spinner keeps running on startup",
        icon: <DayNightIcon />,
        suggestionComponent: null,
    },
    {
        title: "Suggestions",
        norm: "ENG-1820",
        description: "Mobile app takes a long time to open",
        icon: <LoaderCutIcon />,
        suggestionComponent: null,
    },
];

export default function Main() {
    return (
        <main className="bg-view flex flex-col gap-y-6.5 px-17 py-12 font-normal">
            <div className="flex flex-col">
                <h2 className="text-secondary mb-2 text-xl font-semibold">
                    App freezes on splash screen
                </h2>
                <p className="text-tertiary text-[14px]">
                    After launch, the splash screen remains visible indefinitely
                    with no change in state. <br />
                    The app does not progress to the homescreen.
                </p>
            </div>

            <div className="flex flex-col gap-4 rounded-md border border-white/8 bg-[#151617] pt-3 pr-5 pb-4 pl-3.75 text-xs">
                <div className="flex h-6 items-center">
                    <div className="flex">
                        {/* prettier-ignore */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="url(#paint0_linear_2152_1541)" d="M8 11a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 8 11"></path><path fill="url(#paint1_linear_2152_1541)" d="M2.22 2.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 0 1-1.06-1.06l3.116-3.116a.5.5 0 0 0-.354-.854H1.75a.75.75 0 0 1 0-1.5h3.232a.5.5 0 0 0 .354-.854L2.22 3.28a.75.75 0 0 1 0-1.06"></path><path fill="url(#paint2_linear_2152_1541)" d="M9.97 9.97a.75.75 0 0 1 1.06 0l2.75 2.75a.75.75 0 1 1-1.06 1.06l-2.75-2.75a.75.75 0 0 1 0-1.06"></path><path fill="url(#paint3_linear_2152_1541)" d="M14.25 7.25a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5z"></path><path fill="url(#paint4_linear_2152_1541)" d="M12.72 2.22a.75.75 0 1 1 1.06 1.06l-2.75 2.75a.75.75 0 0 1-1.06-1.06z"></path><path fill="url(#paint5_linear_2152_1541)" d="M8 1a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 8 1"></path><defs><linearGradient id="paint0_linear_2152_1541" x1="15" x2="1" y1="8" y2="15" gradientUnits="userSpaceOnUse"><stop stopColor="#fff" stopOpacity="0.8"></stop><stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop></linearGradient><linearGradient id="paint1_linear_2152_1541" x1="15" x2="1" y1="8" y2="15" gradientUnits="userSpaceOnUse"><stop stopColor="#fff" stopOpacity="0.8"></stop><stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop></linearGradient><linearGradient id="paint2_linear_2152_1541" x1="15" x2="1" y1="8" y2="15" gradientUnits="userSpaceOnUse"><stop stopColor="#fff" stopOpacity="0.8"></stop><stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop></linearGradient><linearGradient id="paint3_linear_2152_1541" x1="15" x2="1" y1="8" y2="15" gradientUnits="userSpaceOnUse"><stop stopColor="#fff" stopOpacity="0.8"></stop><stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop></linearGradient><linearGradient id="paint4_linear_2152_1541" x1="15" x2="1" y1="8" y2="15" gradientUnits="userSpaceOnUse"><stop stopColor="#fff" stopOpacity="0.8"></stop><stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop></linearGradient><linearGradient id="paint5_linear_2152_1541" x1="15" x2="1" y1="8" y2="15" gradientUnits="userSpaceOnUse"><stop stopColor="#fff" stopOpacity="0.8"></stop><stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop></linearGradient></defs></svg>
                        <p className="text-tertiary ml-2">
                            Triage Intelligence
                        </p>
                    </div>
                </div>
                {TRIAGE_ITEMS.map((item, i) => (
                    <div className="flex">
                        <p className="text-tertiary w-22">{item.title}</p>
                        {i === 0 ? (
                            item.suggestionComponent
                        ) : (
                            <div className="flex items-center gap-1">
                                <span className="">{item.icon}</span>
                                <span className="text-tertiary w-14.5">
                                    {item.norm}
                                </span>
                                <span className="text-secondary font-medium">
                                    {item.description}
                                </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <h3 className="text-secondary font-semibold">Activity</h3>
            <div className="flex flex-col gap-y-2">
                {ACTIVITIES.map((activity) => (
                    <div className="flex items-center gap-1">
                        {activity.icon}
                        <p className="text-xs text-[#62666D]">
                            {activity.description}
                        </p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col rounded-md border border-white/8 bg-white/1">
                <textarea className="text-secondary px-3.5 py-3">
                    @Cursor take a look
                </textarea>
                <div className="flex">
                    <button></button>
                </div>
            </div>
        </main>
    );
}
