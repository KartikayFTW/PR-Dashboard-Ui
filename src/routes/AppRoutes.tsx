import { Routes, Route } from "react-router-dom";

import SignUp from "pages/SignUp";
import SignIn from "pages/SignIn";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default AppRoutes;
