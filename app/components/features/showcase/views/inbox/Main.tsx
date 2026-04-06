export default function Main() {
    return (
        <main className={`flex flex-col border-l px-16 py-12`}>
            <h2 className="text-primary-white/95 text-xl font-medium">
                App freezes on splash screen
            </h2>

            <p className="text-primary-grey text-[14px]">
                After launch, the splash screen remains visible indefinitely
                with no change in state. <br />
                The app does not progress to the homescreen.
            </p>
            <div className="flex flex-col text-xs">
                <div className="border-linear border-px flex flex-col pt-12 pr-20 pb-16 pl-15 text-xs">
                    <div className="flex justify-between">
                        <div className="flex">
                            {/* prettier-ignore */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="url(#paint0_linear_2152_1541)" d="M8 11a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 8 11"></path><path fill="url(#paint1_linear_2152_1541)" d="M2.22 2.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 0 1-1.06-1.06l3.116-3.116a.5.5 0 0 0-.354-.854H1.75a.75.75 0 0 1 0-1.5h3.232a.5.5 0 0 0 .354-.854L2.22 3.28a.75.75 0 0 1 0-1.06"></path><path fill="url(#paint2_linear_2152_1541)" d="M9.97 9.97a.75.75 0 0 1 1.06 0l2.75 2.75a.75.75 0 1 1-1.06 1.06l-2.75-2.75a.75.75 0 0 1 0-1.06"></path><path fill="url(#paint3_linear_2152_1541)" d="M14.25 7.25a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5z"></path><path fill="url(#paint4_linear_2152_1541)" d="M12.72 2.22a.75.75 0 1 1 1.06 1.06l-2.75 2.75a.75.75 0 0 1-1.06-1.06z"></path><path fill="url(#paint5_linear_2152_1541)" d="M8 1a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 8 1"></path><defs><linearGradient id="paint0_linear_2152_1541" x1="15" x2="1" y1="8" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0.8"></stop><stop offset="1" stop-color="#fff" stop-opacity="0.4"></stop></linearGradient><linearGradient id="paint1_linear_2152_1541" x1="15" x2="1" y1="8" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0.8"></stop><stop offset="1" stop-color="#fff" stop-opacity="0.4"></stop></linearGradient><linearGradient id="paint2_linear_2152_1541" x1="15" x2="1" y1="8" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0.8"></stop><stop offset="1" stop-color="#fff" stop-opacity="0.4"></stop></linearGradient><linearGradient id="paint3_linear_2152_1541" x1="15" x2="1" y1="8" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0.8"></stop><stop offset="1" stop-color="#fff" stop-opacity="0.4"></stop></linearGradient><linearGradient id="paint4_linear_2152_1541" x1="15" x2="1" y1="8" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0.8"></stop><stop offset="1" stop-color="#fff" stop-opacity="0.4"></stop></linearGradient><linearGradient id="paint5_linear_2152_1541" x1="15" x2="1" y1="8" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0.8"></stop><stop offset="1" stop-color="#fff" stop-opacity="0.4"></stop></linearGradient></defs></svg>
                            <p>Triage Intelligence</p>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <p className="w-22">Suggestions</p>
                    <div className="border-linear flex bg-[#FFFFFF03] py-1 pr-1.5 pl-1">
                        {/* prettier-ignore */}

                        <p>emil</p>
                    </div>
                    <div className="flex py-1 pr-1.5 pl-1">
                        <p>iOS</p>
                    </div>
                    <div className="flex py-1 pr-1.5 pl-1">
                        <div className="size-4 rounded-full bg-red-500"></div>
                        <p className="w-22">Bug</p>
                    </div>
                </div>
                <div className="flex">
                    <p className="w-22">Duplicate</p>
                    <p>ENG-1998 Loading spinner keeps running on startup</p>
                </div>
                <div className="flex">
                    <p>Related</p>
                    <p>ENG-1820 Mobile app take a long time to open</p>
                </div>
            </div>
            <h3>Activity</h3>
            <p>Linear created the issue via Stack on behald of Nan 2min ago</p>
            <p>Triage Intelligence added the label Bug 2min ago</p>
            <p>Linear notified Karri 1min ago</p>
            <div className="flex flex-col">
                <p>@Cursor take a look</p>
                <div className="flex">
                    <button></button>
                </div>
            </div>
        </main>
    );
}
