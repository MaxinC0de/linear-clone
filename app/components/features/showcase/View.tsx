import { Inbox } from "./views";

export default function View({ activeWindow }) {
    return (
        <div className="my-auto mr-2 h-176 w-268 rounded-md border border-white/10 bg-[#121314]">
            {activeWindow === "Inbox" && <Inbox />}
        </div>
    );
}
