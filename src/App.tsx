import RoutesApp from "@utils/Routes";
import "./App.css";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const defaultPath = "/";

  useEffect(() => {
    if (pathname === defaultPath) {
      navigate("/orders");
    }
  }, [pathname, navigate]);

  return (
    <>
      <main className="min-h-lvh w-full">
        <RoutesApp />
      </main>
    </>
  );
}

export default App;
