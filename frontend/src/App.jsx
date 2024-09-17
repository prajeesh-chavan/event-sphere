import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Home from "./Pages/Home";
import UserProfile from "./Components/Dashboard/Profile";
import EventManagement from "./Components/Events/EventManagement";
import TicketList from "./Components/Dashboard/TicketList";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import OrganizerDashboard from "./Components/Dashboard/OrganizerDashboard";
import EventDetails from "./Pages/EventDetails";
import CreateEvent from "./Components/Events/CreateEvent";
import Layout from "./Pages/Layout";
import NotFound from "./Pages/NotFound";
import LogIn from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Unauthorized from "./Pages/Unathorized.jsx";
import ProtectedRoute from "./Components/ProtectedRoute";
import AboutUs from "./Pages/AboutUs";
import EventLists from "./Pages/EventLists";
import UserDashboard from "./Components/Dashboard/UserDashboard";
import Dashboard from "./Pages/Dashboard";
import { Toaster } from "react-hot-toast";
import UpdateEventForm from "./Components/Events/updateEvent";
import BookingVerify from "./Pages/BookingVerify";
import ContactUs from "./Pages/Contact-Us";
import ForgotPassword from "./Components/Auth/ForgetPassword";
import ResetPassword from "./Components/Auth/ResetPassword";

function App() {
  return (
    <>
      <Toaster />

      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="event/:id" element={<EventDetails />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="event-list" element={<EventLists />} />
          </Route>
          {/* <Route path="dashboard1" element={<Dashboard />} /> */}
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<Register />} />
          <Route path="verify/:id" element={<BookingVerify />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password/:token" element={<ResetPassword />} />

          {/* Admin Protected Routes */}
          <Route
            path="dashboard"
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard>
                  <Outlet />
                </AdminDashboard>
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="user/profile" element={<UserProfile />} />
            <Route path="user/tickets" element={<TicketList />} />
            <Route
              path="organizer/event-management"
              element={<EventManagement />}
            />
            <Route path="organizer/create-event" element={<CreateEvent />} />
            <Route path="organizer/tickets" element={<TicketList />} />
          </Route>

          {/* Organizer Protected Routes */}
          <Route
            path="/organizer"
            element={
              <ProtectedRoute requiredRole="organizer">
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index path="dashboard" element={<OrganizerDashboard />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="create-event" element={<CreateEvent />} />
            <Route path="tickets" element={<TicketList />} />
            <Route path="events" element={<EventManagement />} />
            <Route
              path="event-details/:eventId"
              element={<UpdateEventForm />}
            />
          </Route>

          {/* User Protected Routes */}
          <Route
            path="/user"
            element={
              <ProtectedRoute requiredRole="user">
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index path="dashboard" element={<UserDashboard />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="tickets" element={<TicketList />} />
          </Route>

          {/* 404 Not Found Page */}
          <Route path="*" element={<NotFound />} />
          <Route path="unauthorized" element={<Unauthorized />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
