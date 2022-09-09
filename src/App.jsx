import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";

import Home from "./page/Home";
import Login from "./page/Login";
import Signup from "./page/Signup";

const App = () => {
  const { user } = useAuthContext();

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
      </Routes>
    </Fragment>
  );
};

export default App;
