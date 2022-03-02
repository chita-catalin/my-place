import { Switch, Route, HashRouter } from "react-router-dom";
import { IDE } from "../components/IDE-component";

export const AppRouting = () => {
  console.log("1.1.4");
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/IDE" component={IDE} />
      </Switch>
    </HashRouter>
  );
};
