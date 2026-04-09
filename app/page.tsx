import Navbar from "./components/Navbar";
import Figures from "./components/Figures";
import Showcase from "./components/features/showcase/Showcase";
import { Agenda } from "./components/features/agenda";
import HeroFeatures from "./components/features/HeroFeatures";
import Todolist from "./components/features/todolist/Todolist";

export default function Home() {
    return (
        <div className="flex w-full overflow-x-auto pb-120 font-medium">
            <Navbar />
            <div className="mx-auto flex w-full max-w-357 shrink-0 flex-col">
                {/* <Showcase />
                <Figures /> */}
                <Todolist />
            </div>
        </div>
    );
}

// ajouter ombres bas de la window FAL
// ajouter le gradient a droite
