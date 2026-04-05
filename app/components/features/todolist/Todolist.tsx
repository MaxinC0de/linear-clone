import Link from "next/link";
import Thread from "./Thread";

export default function Todolist() {
    return (
        <section className="w-full pt-32 pb-120">
            <div className="flex justify-between">
                <h1 className="font-primary-white text-5xl">
                    Make product <br /> operations self-driving
                </h1>
                <div>
                    <p className="text-secondary-white text-2xl">
                        Turn conversations and customer feedback <br /> into
                        actionable issues that are routed <br />, labeled, and
                        prioritized for the right team.
                    </p>
                    <Link href={"/"}>
                        <span className="jetbrains">1.0</span> Intake
                    </Link>
                </div>
            </div>
            <Thread />
        </section>
    );
}
