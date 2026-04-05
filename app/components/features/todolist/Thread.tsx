import { ChevronDown, EllipsisVertical, SendHorizonal } from "lucide-react";
import Image from "next/image";

const TEXTS = [
    {
        author: "lena",
        content:
            "Anyone else noticing the IOS app feels slow to open if you haven't use it in a bit ?",
    },
    {
        author: "didier",
        content:
            "Yea, we're still blocking initial render on a full vehicle_state sync every time...",
    },
    {
        author: "andreas",
        content:
            "Feels like we could render sooner and load the rest in the background. Probably also worth tracking startup timing so we know how often this happens !",
    },
];

export default function Thread() {
    return (
        <section className="text-primary-grey flex h-143.25 w-120 flex-col justify-between rounded-2xl border border-white/10 bg-[#111213]">
            <header className="flex justify-between border-b border-white/10 px-6 py-4.25 text-[14px]">
                <p>
                    Thread in <span className="font-semibold">#feedback</span>
                </p>
                <EllipsisVertical />
            </header>
            <div>
                <div className="flex flex-col gap-6 px-6 pt-6.5 pb-8">
                    {TEXTS.map((text, i) => (
                        <div className="flex justify-between">
                            <div className="relative h-9 w-9">
                                <Image
                                    className="rounded-md object-cover"
                                    src={`/features/thread/${i + 1}.avif`}
                                    fill
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="-mt-1 flex items-center">
                                    <span className="text-primary-white/80 text-[15px] font-semibold">
                                        {text.author}
                                    </span>
                                    <span className="my-auto ml-2 text-xs">
                                        6:08 PM
                                    </span>
                                </div>
                                <div className="text-secondary-white/70 max-w-95 text-[15px] font-light">
                                    {text.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mx-3 mb-2 flex h-40 w-114 flex-col justify-between rounded-lg border border-white/10 bg-[#161718] p-4">
                    <div className="flex items-center">
                        <p>
                            <span className="mr-1 h-2 w-6 bg-[#6D78D5]/20 p-0.75 text-[#6D78D5]/80">
                                @Linear
                            </span>
                            <span className="text-primary-white/70">
                                create urgent issues and assign to me
                            </span>
                        </p>
                        <div className="flicker ml-1 h-4.5 w-px bg-white/30"></div>
                    </div>
                    <div className="flex justify-end">
                        <button className="my-auto flex h-8 w-17 cursor-pointer items-center justify-center rounded-md bg-[#6775E7]">
                            <div className="px-2 py-px">
                                <SendHorizonal className="size-4 text-white" />
                            </div>
                            <div className="h-5 w-px border border-white/20"></div>
                            <div className="px-1 py-px">
                                <ChevronDown className="size-5 text-white" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
