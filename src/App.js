import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import Appointment from "./pages/Appointment/Appointment/Appointment";
import AddDoctor from "./pages/Dashboard/AddDoctor/AddDoctor";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import Payment from "./pages/Dashboard/Payment/Payment";
import Home from "./pages/Home/Home/Home";
import AdminRoute from "./pages/Login/AdminRoute/AdminRoute";
import Login from "./pages/Login/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Register from "./pages/Login/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route
              path="/appointment"
              element={
                <PrivateRoute>
                  <Appointment />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route
                exact
                path="/dashboard"
                element={<DashboardHome />}
              ></Route>
              <Route
                path={`/dashboard/payment/:appointmentId`}
                element={<Payment />}
              ></Route>
              <Route
                path={`/dashboard/makeAdmin`}
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path={`/dashboard/addDoctor`}
                element={
                  <AdminRoute>
                    <AddDoctor />
                  </AdminRoute>
                }
              ></Route>
            </Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
