import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import Authentication from "./routes/authentication/Authentication";

const Shop = () => {
  return <h1>Shop Page</h1>;
};

const App = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route
          path="auth"
          element={
            currentUser ? <Navigate to="/" replace /> : <Authentication />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
