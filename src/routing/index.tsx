import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IDE } from "../components/IDE-component";

export const AppRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IDE />}></Route>
        <Route path="*" element={<>404</>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
