import Image from "next/image";
import Link from "next/link";

const LABELS = [
    "Product",
    "Resources",
    "Customers",
    "Pricing",
    "Now",
    "Contact",
];

export default function Navbar() {
    return (
        <header className="border-thin bg-main fixed top-0 z-50 mx-auto flex h-19 w-full items-center justify-center border-b px-19">
            <nav className="w-full max-w-320.25 font-medium">
                <ul className="flex items-center justify-between gap-4 text-[13px]">
                    <li>
                        <Link
                            href="/"
                            className="border-1.5 -mr-2 flex h-8 items-center justify-start px-2"
                        >
                            <Image
                                className="w-22"
                                src="/logo.png"
                                width={90}
                                height={22}
                                alt="Linear"
                                priority
                            />
                        </Link>
                    </li>
                    <li className="flex w-155 items-center justify-between">
                        <div className="flex">
                            {LABELS.map((label, i) => {
                                return (
                                    <>
                                        <Link
                                            className="flex h-8 items-center justify-center rounded px-3 text-[13px] leading-5 transition-all duration-150"
                                            href={`/${label}`}
                                        >
                                            {label}
                                        </Link>
                                    </>
                                );
                            })}
                        </div>
                        <div className="border-thin m-2 h-4 w-px"></div>
                        <div className="flex">
                            <button className="flex h-8 cursor-pointer items-center justify-center rounded px-3 text-[13px] leading-5 transition-all duration-150">
                                Log in
                            </button>
                            <button className="ml-1 flex h-8 cursor-pointer items-center justify-center rounded px-3 text-[13px] leading-5 transition-all duration-150 hover:bg-white">
                                Sign up
                            </button>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
