import Link from "next/link";

const heroes = {
    todolist: {
        tagline: "Make product operations self-driving",
        description:
            "Turn conversations and customer feedback into actionable issues that are routed, labeled, and prioritized for the right team.",
    },
    agenda: {
        tagline: "Define the product direction",
        description:
            "Plan and navigate from idea to launch. Align your team with product initiatives, strategic roadmaps, and clear, up-to-date PRDs.",
    },
    agentPicker: {
        tagline: "Move work forward across teams and agents",
        description:
            "Build and deploy AI agents that work alongside your team. Work on complex tasks together or delegate entire issues end-to-end.",
    },
    diffSplit: {
        tagline: "Review PRs and agent output",
        description:
            "Understand code changes at a glance with structural diffs for human and agent output. Review, discuss, and merge — all within Linear.",
    },
    progressionTracker: {
        tagline: "Understand progress at scale",
        description:
            "Take the guesswork out of product development with project updates, analytics, and dashboards that surface what needs your attention.",
    },
};

export default function HeroFeatures({ feature }) {
    const data = heroes[feature];
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-primary w-[50%] px-8 text-5xl">
                {data?.tagline}
            </h1>
            <div className="flex w-[45%] flex-col px-8 pt-14">
                <p className="text-secondary/80 text-2xl font-bold">
                    {data?.description}
                </p>
                <Link href="/" className="text-tertiary mt-12 flex">
                    <p className="jetbrains mr-4">2.0</p>
                    <p>Plan</p>
                </Link>
            </div>
        </div>
    );
}
