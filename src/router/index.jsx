import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from '../App';
import { Home, Shoes, Clothes, Others, Detail } from "../page";

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="shoes" element={<Shoes />} />
        <Route path="clothes" element={<Clothes />} />
        <Route path="others" element={<Others />} />
        <Route path="/shoes/detail" element={<Detail />} />
        <Route path="/clothes/detail" element={<Detail />} />
        <Route path="/others/detail" element={<Detail />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
