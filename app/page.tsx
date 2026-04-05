import Navbar from "./components/Navbar";
import Figures from "./components/Figures";
import Showcase from "./components/features/showcase/Showcase";
import Todolist from "./components/features/todolist/Todolist";

export default function Home() {
    return (
        <div className="font-medium">
            <Navbar />
            <div className="min-mx-[20vh] mx-auto mt-70 flex max-w-359 flex-col items-center overflow-scroll px-11.5 tracking-tighter">
                <Showcase />
                <Figures />
                <Todolist />
            </div>
        </div>
    );
}

// ajouter ombres bas de la window FAL
