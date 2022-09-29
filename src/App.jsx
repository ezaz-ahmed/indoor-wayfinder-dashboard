import { Routes, Route, Navigate } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast';

import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./page/Home";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Floor from './page/Floor';
import Rooms from './page/Rooms';
import QR from './page/QR';

export const queryClient = new QueryClient()

const App = () => {
  const { user } = useAuthContext();

  return (

    <QueryClientProvider client={queryClient}>
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

        <Route
          path="/floor"
          element={<Floor />}
        />

        <Route
          path="/room"
          element={<Rooms />}
        />

        <Route
          path="/qr"
          element={<QR />}
        />

      </Routes>

      <Toaster
        position="bottom-right"
        reverseOrder={true}
      />
    </QueryClientProvider>
  );
};

export default App;
