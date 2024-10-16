import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./router";

function AppRouter() {
  return (
    <div>
      <Routes>
        {publicRoutes.map((route) => (
          <Route path={route.path} element={<route.component />} key={route.path} />
        ))}
      </Routes>
    </div>
  );
}

export default AppRouter;
