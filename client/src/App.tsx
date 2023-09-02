import { useRoutes } from "react-router-dom";
import Home from "./pages";
import "./App.css";
import Payment from "./pages/Payment";

const App = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/payment",
      element: <Payment />,
    },
    {
      path: "*",
      element: <div>Not Found</div>,
    },
  ]);

  return element;
};

export default App;
