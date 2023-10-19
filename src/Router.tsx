import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { TasksPage } from "./pages/tasks";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<TasksPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
