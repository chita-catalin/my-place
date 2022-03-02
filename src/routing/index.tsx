import { BrowserRouter, Switch, Route } from "react-router-dom";
import { IDE } from "../components/IDE-component";

export const AppRouting = () => {
  console.log("1.1.3");
  return (
    <BrowserRouter basename="/my-place">
      <Switch>
        <Route path="/IDE" component={IDE} />
      </Switch>
    </BrowserRouter>
  );
};
