import Main from "./Main";
import MainHeader from "./MainHeader";
import SideHeader from "./SideHeader";
import SideSection from "./SideSection";

export default function InboxView() {
    return (
        <div className="grid h-full grid-cols-[30%_70%] grid-rows-[7%_93%]">
            <SideHeader />
            <MainHeader />
            <SideSection />
            <Main />
        </div>
    );
}
