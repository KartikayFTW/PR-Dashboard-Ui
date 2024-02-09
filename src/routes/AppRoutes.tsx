import { Routes, Route } from "react-router-dom";

import SignUp from "pages/SignUp";
import SignIn from "pages/SignIn";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/sign_in" element={<SignIn />} />
      <Route path="/" element={<SignIn />} />
      <Route path="/sign_up" element={<SignUp />} />
    </Routes>
  );
};

export default AppRoutes;
