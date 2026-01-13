import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import StudentLogin from './pages/StudentLogin';
import StudentDashboard from './pages/StudentDashboard';
import Admission from './pages/Admission';
import RoomBooking from './pages/RoomBooking';
import PersonalizedLearning from './pages/PersonalizedLearning';
import Memories from './pages/Memories';
import SportsEvents from './pages/SportsEvents';
import FestivalEvents from './pages/FestivalEvents';
import AdminDashboard from './pages/AdminDashboard';
import AdminAdmissions from './pages/AdminAdmissions';
import AdminRooms from './pages/AdminRooms';
import AdminBookings from './pages/AdminBookings';
import AdminGallery from './pages/AdminGallery';

import './index.css';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/rooms" element={<RoomBooking />} />
        <Route path="/learning" element={<PersonalizedLearning />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/sports" element={<SportsEvents />} />
        <Route path="/festivals" element={<FestivalEvents />} />
        
        {/* Admin Routes (Protected) */}
        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/admissions" element={<ProtectedRoute><AdminAdmissions /></ProtectedRoute>} />
        <Route path="/admin/rooms" element={<ProtectedRoute><AdminRooms /></ProtectedRoute>} />
        <Route path="/admin/bookings" element={<ProtectedRoute><AdminBookings /></ProtectedRoute>} />
        <Route path="/admin/gallery" element={<ProtectedRoute><AdminGallery /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}
