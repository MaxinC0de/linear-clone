import {
    InboxIcon,
    RecordIcon,
    RepeatIcon,
    PulseIcon,
    AirdropIcon,
    CubeIcon,
    HorizontalEllipsisIcon,
    DayNightIcon,
} from "../../Icons";

export const SIDEBAR_ITEMS = [
    { label: "Inbox", icon: InboxIcon, isClickable: true },
    { label: "My issues", icon: RecordIcon, isClickable: true },
    { label: "Reviews", icon: RepeatIcon, isClickable: false },
    { label: "Pulse", icon: PulseIcon, isClickable: true },
    { label: "Initiatives", icon: AirdropIcon, isClickable: true },
    { label: "Projects", icon: CubeIcon, isClickable: true },
    { label: "More", icon: HorizontalEllipsisIcon, isClickable: false },
    { label: "Faster app launch", icon: DayNightIcon, isClickable: true },
    { label: "Agent tasks", icon: PulseIcon, isClickable: true },
    { label: "UI Refresh", icon: PulseIcon, isClickable: true },
    { label: "Agents Insights", icon: PulseIcon, isClickable: true },
];
