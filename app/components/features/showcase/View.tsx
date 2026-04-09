import { Inbox } from "./views";
import Issues from "./views/issues/Issues";

const layouts = {
    Inbox: [2, 2],
    "My issues": [2, 2],
    Pulse: [2, 2],
    Initiatives: [2, 2],
    Projects: [2, 2],
};

export default function View({ activeWindow }) {
    return (
        <div className="absolute top-0 right-0 z-0 mx-2 mt-2.5 mb-2.5 flex h-175 w-267 rounded-[7px] border border-white/8 bg-[#101112]"></div>
    );
}
