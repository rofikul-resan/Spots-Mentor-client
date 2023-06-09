import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import AddClass from "../Dashboard/Instructors/AddClass";
import Login from "../Auth/Login";
import AuthLayout from "../Layout/AuthLayout";
import SingUp from "../Auth/SingUp";
import DashBoardLayout from "../Layout/DashBoardLayout";
import ManageUser from "../Dashboard/Admin/ManageUsers/ManageUser";
import InstructorPage from "../Page/InstructorPage/InstructorPage";
import AllClassPage from "../Page/AllClassPage/AllClassPage";
import ManageClass from "../Dashboard/Admin/ManageClass";
import BookingClass from "../Dashboard/Student/BookingClass";
import Payments from "../Payment/Payments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructors",
        element: <InstructorPage />,
      },
      {
        path: "/class",
        element: <AllClassPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout />,
    children: [
      // Admin Page route
      {
        path: "manage-user",
        element: <ManageUser />,
      },
      {
        path: "manage-class",
        element: <ManageClass />,
      },
      // InstructorPage route
      {
        path: "add-class",
        element: <AddClass />,
      },
      // Student Page route
      {
        path: "booking-class",
        element: <BookingClass />,
      },
      {
        path: "payment",
        element: <Payments />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sing-up",
        element: <SingUp />,
      },
    ],
  },
]);
export default router;
