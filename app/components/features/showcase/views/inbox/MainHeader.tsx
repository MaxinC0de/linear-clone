import { HorizontalEllipsisIcon } from "../../../../Icons";

export default function MainHeader() {
    return (
        <header className="text-secondary bg-view flex items-center justify-between gap-2 border-b border-l border-white/5 p-2 pl-12 text-[13px]">
            <div className="flex items-center gap-2">
                <p>App freezes on splash screen</p>
                <HorizontalEllipsisIcon />
            </div>
            <div className="mr-6 flex items-center gap-4"></div>
        </header>
    );
}
