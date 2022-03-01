import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IDE } from "../components/IDE-component";

export const AppRouting = () => {
  console.log(window.location.pathname);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={process.env.PUBLIC_URL + "/my-place/"}
          element={<>home</>}
        ></Route>
        <Route
          path={process.env.PUBLIC_URL + "/my-place/IDE"}
          element={<IDE />}
        ></Route>
        <Route path="*" element={<>404 test</>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
