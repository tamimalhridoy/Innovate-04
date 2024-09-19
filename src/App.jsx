import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Home />}></Route>)
  );
  return <RouterProvider router={router} />;
}

export default App;
