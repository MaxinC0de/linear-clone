import Navbar from "./components/Navbar";
import Figures from "./components/Figures";
import Showcase from "./components/features/showcase/Showcase";
import Todolist from "./components/features/todolist/Todolist";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="min-mx-[20vh] mx-auto mt-70 flex max-w-359 flex-col items-center px-11.5">
                <Showcase />
                <Figures />
                <Todolist />
            </div>
        </>
    );
}

// ajouter ombres bas de la window FAL
