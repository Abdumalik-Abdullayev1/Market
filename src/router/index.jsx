import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from '../App';
import {
  Home,
  Shoes,
  Clothes,
  Others,
  Detail,
  Profile,
  EditProfile,
  HistoryOrders,
  Address,
  EditAddress,
  EditPassword,
  Login,
  Register
} from "../page";

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="shoes" element={<Shoes />} />
        <Route path="clothes" element={<Clothes />} />
        <Route path="others" element={<Others />} />
        <Route path="detail" element={<Detail />} />
        <Route path="/shoes/detail" element={<Detail />} />
        <Route path="/clothes/detail" element={<Detail />} />
        <Route path="/others/detail" element={<Detail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/history-orders" element={<HistoryOrders />} />
        <Route path="/address" element={<Address />} />
        <Route path="/edit-address" element={<EditAddress />} />
        <Route path="/edit-password" element={<EditPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
