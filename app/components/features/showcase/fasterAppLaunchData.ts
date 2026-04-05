import { Activity, Box, ChevronsUp, Eclipse, Ellipsis, Inbox, LaptopMinimal, MousePointer2, PencilRuler, Repeat, SquareDot, SquareMousePointer } from "lucide-react"

export const SIDEBAR_ITEMS = [
  { label: "Inbox", icon: Inbox, isClickable: true },
  { label: "My issues", icon: SquareDot, isClickable: true },
  { label: "Reviews", icon: Repeat, isClickable: false },
  { label: "Pulse", icon: Activity, isClickable: true },
  { label: "Initiatives", icon: MousePointer2, isClickable: true },
  { label: "Projects", icon: Box, isClickable: true },
  { label: "More", icon: Ellipsis, isClickable: false },
  { label: "Faster app launch", icon: Eclipse, isClickable: true },
  { label: "Agent tasks", icon: SquareMousePointer, isClickable: true },
  { label: "UI Refresh", icon: PencilRuler, isClickable: true },
  { label: "Agents Insights", icon: LaptopMinimal, isClickable: true },
];