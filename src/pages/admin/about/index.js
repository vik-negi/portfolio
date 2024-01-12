import { Routes, Route } from "react-router-dom";
import AdminAbout from "./AdminAbout";

export const AboutIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminAbout />} />
    </Routes>
  );
};
