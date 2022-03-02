import { BottomBar } from "./components/BottomBar";
import { Explorer } from "./components/Explorer";
import { LeftBar } from "./components/LeftBar";
import { TopBar } from "./components/TopBar";
import { ViewComponent } from "./components/ViewComponent";

import "./styles/IDE.css";

export const IDE = () => {
  return (
    <div className="IDE-container">
      <TopBar />
      <div className="flex-container">
        <LeftBar />
        <Explorer />
        <div className="flex-container-column">
          <ViewComponent />
        </div>
      </div>
      <BottomBar />
    </div>
  );
};
