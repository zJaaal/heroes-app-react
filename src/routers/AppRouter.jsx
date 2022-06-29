import { Routes, Route } from "react-router-dom";
import DashboardRoutes from "./DashboardRoutes";
import LoginPage from "../pages/LoginPage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/*" element={<DashboardRoutes />}></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
