import InboxView from "./views/InboxView";
import IssuesView from "./views/IssuesView";
import PulseView from "./views/PulseView";
import InitiativesView from "./views/InitiativesView";
import ProjectsView from "./views/ProjectsView";
import FALView from "./views/FALView";
import AgentsTasksView from "./views/AgentsTasksView";
import UIView from "./views/UIView";
import AgentsInsightsView from "./views/AgentsInsightsView";

export default function View({ activeWindow }) {
    return (
        <div className="my-auto mr-2 h-176 w-268 rounded-md border border-white/10 bg-[#121314]">
            {activeWindow === "Inbox" && <InboxView />}
            {activeWindow === "My issues" && <IssuesView />}
            {activeWindow === "Pulse" && <PulseView />}
            {activeWindow === "Initiatives" && <InitiativesView />}
            {activeWindow === "Projects" && <ProjectsView />}
            {activeWindow === "Faster app launch" && <FALView />}
            {activeWindow === "Agent tasks" && <AgentsTasksView />}
            {activeWindow === "UI Refresh" && <UIView />}
            {activeWindow === "Agents Insights" && <AgentsInsightsView />}
        </div>
    );
}
