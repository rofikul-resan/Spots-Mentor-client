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
import EnrollClass from "../Dashboard/Student/EnrollClass";
import Error404 from "../Components/Error404";
import SinglePayment from "../PaymentSingle/SinglePayment";
import PaymentHistory from "../Dashboard/Student/PaymentHistory";
import InstClass from "../Dashboard/Instructors/InstClass";
import UpdateClass from "../Dashboard/Instructors/UpdateClass";
import PrivetRoute from "./PrivetRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import DashboardHome from "../Dashboard/DashboardHome";

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
        element: (
          <PrivetRoute>
            <InstructorPage />
          </PrivetRoute>
        ),
      },
      {
        path: "/class",
        element: (
          <PrivetRoute>
            <AllClassPage />,
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashBoardLayout />
      </PrivetRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      // Admin Page route
      {
        path: "manage-user",
        element: (
          <AdminRoute>
            <ManageUser />
          </AdminRoute>
        ),
      },
      {
        path: "manage-class",
        element: (
          <AdminRoute>
            <ManageClass />
          </AdminRoute>
        ),
      },
      // InstructorPage route
      {
        path: "add-class",
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },
      {
        path: "update-class/:id",
        element: (
          <InstructorRoute>
            <UpdateClass />
          </InstructorRoute>
        ),
      },
      {
        path: "my-class",
        element: (
          <InstructorRoute>
            <InstClass />
          </InstructorRoute>
        ),
      },
      // Student Page route
      {
        path: "booking-class",
        element: <BookingClass />,
      },
      {
        path: "enroll-class",
        element: <EnrollClass />,
      },
      {
        path: "payment",
        element: <Payments />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "payment/:id",
        element: <SinglePayment />,
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
  {
    path: "*",
    element: <Error404 />,
  },
]);
export default router;
