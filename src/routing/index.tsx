import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import { EuroTrip2022 } from "../components/EuroTrip2022";
import { FunTest } from "../components/FunTest";
import { IDE } from "../components/IDE-component";

export const AppRouting = () => {
  console.log("1.1.4");
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/IDE" component={IDE} />
        <Route exact path="/Euro-Trip-2022" component={EuroTrip2022} />
        <Route exact path="/fun-test" component={FunTest}  />
        <Redirect to="/IDE" />
      </Switch>
    </HashRouter>
  );
};
