import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PrivateRoutes from "./utils/PrivateRoutes";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />

        <Routes>
          <Route path="/" element={<LoginPage />} exact />
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<HomePage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
