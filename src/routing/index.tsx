import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IDE } from "../components/IDE-component";

export const AppRouting = () => {
  console.log(window.location.pathname);
  return (
    <BrowserRouter basename="/my-place">
      <Routes>
        <Route path="/" element={<>home</>}></Route>
        <Route path="/IDE" element={<IDE />}></Route>
        <Route path="*" element={<>404 test 1.1</>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
