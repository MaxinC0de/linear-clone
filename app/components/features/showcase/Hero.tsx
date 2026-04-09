import Link from "next/link";

export default function Hero() {
    return (
        <section className="flex w-full flex-col justify-center gap-y-6 px-8 pt-72">
            <h1 className="text-primary text-6xl font-medium tracking-tighter">
                <span>The product development</span>
                <span className="block">system for teams and agents</span>
            </h1>
            <div className="flex items-center justify-between">
                <p className="text-tertiary text-[15px]">
                    Purpose-built for planning and building products. Designed
                    for the AI era.
                </p>
                <Link
                    className="group flex items-center gap-2 text-[15px]"
                    href="/"
                >
                    <p className="text-secondary group-hover:text-white">
                        Issue track is dead
                    </p>
                    <span className="group-hover:text-secondary/65 text-tertiary flex gap-2">
                        linear.app/next
                    </span>
                </Link>
            </div>
        </section>
    );
}
