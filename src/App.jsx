import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
  Router,
} from "react-router-dom";
import Home from "./Home";
import Layout from "./layout/Layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
