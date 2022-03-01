import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IDE } from "../components/IDE-component";

export const AppRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<>home</>}></Route>
        <Route path={process.env.PUBLIC_URL + "/IDE"} element={<IDE />}></Route>
        <Route path="*" element={<>404</>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
