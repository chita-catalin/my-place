import { HashRouter, Routes, Route } from "react-router-dom";
import { IDE } from "../components/IDE-component";

export const AppRouting = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/IDE" element={<IDE />}></Route>
        <Route path="*" element={<>404</>}></Route>
      </Routes>
    </HashRouter>
  );
};
