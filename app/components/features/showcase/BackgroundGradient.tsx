import Image from "next/image";

export default function BackgroundGradient() {
    return (
        <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-268 w-480 -translate-x-1/2 -translate-y-1/2">
            <Image className="object-cover" src={"/aura.png"} fill alt="aura" />
        </div>
    );
}
