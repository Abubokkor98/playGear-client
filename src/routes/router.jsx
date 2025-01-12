import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddEquipment from "../pages/AddEquipment";
import PrivateRoute from "./PrivateRoute";
import AllEquipment from "../pages/AllEquipment";
import MyEquipment from "../pages/MyEquipment";
import EquipmentDetails from "../pages/EquipmentDetails";
import UpdateEquipment from "../pages/UpdateEquipment";
import SportsCategories from "../components/SportsCategories";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-equipment",
        element: <AllEquipment></AllEquipment>,
      },
      {
        path: "/categories",
        element: <SportsCategories></SportsCategories>,
      },
      {
        path: "/details/:_id",
        element: <EquipmentDetails></EquipmentDetails>,
        loader: async ({ params }) => {
          const res = await fetch(
            "https://assignment-10-server-ab.vercel.app/equipments"
          );
          const data = await res.json();
          const singleData = data.find((d) => d._id == params._id);
          return singleData;
        },
      },
      {
        path: "/add-equipment",
        element: (
          <PrivateRoute>
            <AddEquipment></AddEquipment>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-equipment",
        element: (
          <PrivateRoute>
            <MyEquipment></MyEquipment>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-equipment/:id",
        element: (
          <PrivateRoute>
            <UpdateEquipment></UpdateEquipment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-ab.vercel.app/equipments/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
