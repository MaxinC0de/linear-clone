import HeroFeatures from "../HeroFeatures";
import Tasks from "./Tasks";
import Thread from "./Thread";

export default function Todolist() {
    return (
        <div className="pt-120">
            <HeroFeatures feature={"todolist"} />
            <div className="relative">
                <Thread />
                <Tasks />
            </div>
        </div>
    );
}
