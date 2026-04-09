import { CollapseDownIcon, LinearIcon } from "../../Icons";
import { SIDEBAR_ITEMS } from "./constants";

export default function Sidebar({ activeIcon, setActiveIcon }) {
    return (
        <div className="relative z-2 flex h-176 w-58 pt-2 pr-3.5 pb-3.5 pl-2">
            <div className="mt-2 mb-3.5 ml-2 flex h-176 w-58 flex-col py-2 text-[13px]">
                <div className="mb-4 flex items-center pl-2">
                    <div className="hover:bg-hovered flex h-7 w-24 cursor-pointer items-center justify-between px-px">
                        <LinearIcon />
                        <p className="text-secondary text-[14px]">Linear</p>
                    </div>
                    <div className="flex"></div>
                </div>
                <div className="flex flex-col gap-y-0.75">
                    {SIDEBAR_ITEMS.map((item, i) => {
                        return (
                            <>
                                {i === 4 && (
                                    <div className="flex items-center pt-4 pl-2 text-[#62666D] opacity-70">
                                        <p className="font-bold">Workspace</p>
                                        <span className="rotate-90">
                                            <CollapseDownIcon />
                                        </span>
                                    </div>
                                )}
                                {i === 7 && (
                                    <div className="flex items-center pt-4 pl-2 text-[#62666D] opacity-70">
                                        <p className="font-bold">Favorites</p>
                                        <span className="rotate-90">
                                            <CollapseDownIcon />
                                        </span>
                                    </div>
                                )}
                                <div
                                    onClick={() =>
                                        setActiveIcon(
                                            item.isClickable && item.label,
                                        )
                                    }
                                    className={`flex w-full items-center gap-2 gap-y-1 rounded-md px-2 py-1 ${item.isClickable ? "hover:bg-hovered hover:cursor-pointer" : "hover:cursor-default"} ${activeIcon === item.label ? "bg-hovered" : ""}`}
                                >
                                    <div className="h-3.5 w-3.5">
                                        <item.icon />
                                    </div>
                                    <p className="text-[13px] font-semibold tracking-tight text-[#a0a2a8]">
                                        {item.label}
                                    </p>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
