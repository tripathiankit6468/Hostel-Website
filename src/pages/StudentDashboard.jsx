import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Home, Bed, BookOpen, User, AlertCircle, CheckCircle, Calendar, DollarSign } from 'lucide-react';

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [hasAccess, setHasAccess] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const studentData = localStorage.getItem('student');
    if (!studentData) {
      navigate('/student-login');
      return;
    }

    const parsedStudent = JSON.parse(studentData);
    setStudent(parsedStudent);

    // Check access control: if student left hostel, deny access
    if (parsedStudent.currentlyStaying && parsedStudent.checkoutDate) {
      const checkoutDate = new Date(parsedStudent.checkoutDate);
      if (new Date() > checkoutDate) {
        setHasAccess(false);
      }
    }
    setLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('student');
      navigate('/student-login');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 pt-24 flex items-center justify-center">
        <div className="text-white text-center">
          <p className="text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 pt-24 pb-12 px-4 flex items-center justify-center">
        <div className="max-w-md bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center shadow-2xl">
          <AlertCircle size={64} className="mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Access Denied ⛔</h2>
          <p className="text-red-100 mb-6">Your hostel checkout date has passed. You no longer have access to hostel facilities.</p>
          <p className="text-sm text-red-200">If you wish to rejoin, please contact the hostel management.</p>
          <button
            onClick={handleLogout}
            className="mt-6 w-full bg-white text-red-600 font-bold py-2 rounded-lg hover:bg-red-50 transition"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  const quickStats = [
    { label: 'Room Type', value: student?.roomType ? student.roomType.charAt(0).toUpperCase() + student.roomType.slice(1) : 'Not Booked', icon: '🛏️' },
    { label: 'Room Number', value: student?.room || 'N/A', icon: '🏠' },
    { label: 'Check-in Date', value: student?.checkinDate ? new Date(student.checkinDate).toLocaleDateString() : 'N/A', icon: '📅' },
    { label: 'Status', value: student?.currentlyStaying ? '✓ Active' : 'Inactive', icon: '✓' }
  ];

  const menuItems = [
    { label: 'Book Room', icon: '🛏️', path: '/rooms', desc: 'Reserve a hostel room' },
    { label: 'My Learning Path', icon: '📚', path: '/learning', desc: 'Continue your studies' },
    { label: 'Hostel Memories', icon: '📸', path: '/memories', desc: 'Share your memories' },
    { label: 'Sports Events', icon: '⚽', path: '/sports', desc: 'Upcoming tournaments' },
    { label: 'Festivals', icon: '🎉', path: '/festivals', desc: 'Celebrate with us' },
    { label: 'Facilities', icon: '🏢', path: '/rooms', desc: 'Available amenities' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Welcome, Student! 👋</h1>
            <p className="text-slate-400">{student?.name || 'Student'}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>

        {/* Status Alert */}
        {student?.currentlyStaying ? (
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-4 mb-8 flex items-center gap-3">
            <CheckCircle className="text-green-400 flex-shrink-0" size={24} />
            <div>
              <p className="text-green-300 font-bold">✓ You have active hostel access</p>
              <p className="text-green-200 text-sm">Checkout Date: {new Date(student?.checkoutDate).toLocaleDateString()}</p>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-lg p-4 mb-8 flex items-center gap-3">
            <AlertCircle className="text-yellow-400 flex-shrink-0" size={24} />
            <div>
              <p className="text-yellow-300 font-bold">⚠️ No active room booking</p>
              <p className="text-yellow-200 text-sm">Book a room to access hostel facilities and events</p>
            </div>
          </div>
        )}

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {quickStats.map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-6">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
              <p className="text-white font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Main Menu */}
        <h2 className="text-2xl font-bold text-white mb-6">Quick Access</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => navigate(item.path)}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 hover:border-blue-500 p-6 text-left transition-all hover:shadow-lg hover:shadow-blue-500/20 group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition">{item.icon}</div>
              <h3 className="text-lg font-bold text-white mb-1">{item.label}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </button>
          ))}
        </div>

        {/* Booking Details */}
        {student?.currentlyStaying && (
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Bed className="text-blue-400" />
              Your Booking Details
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-slate-400 text-sm mb-2">Room Type</p>
                <p className="text-white font-bold text-lg capitalize">{student?.roomType} Room</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-2">Room Number</p>
                <p className="text-white font-bold text-lg">{student?.room}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-2">Check-in Date</p>
                <p className="text-white font-bold text-lg">{new Date(student?.checkinDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-2">Check-out Date</p>
                <p className="text-white font-bold text-lg">{new Date(student?.checkoutDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-2">Total Booking Amount</p>
                <p className="text-blue-400 font-bold text-lg">₹{student?.bookingAmount}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-2">Status</p>
                <p className="text-green-400 font-bold text-lg">✓ Confirmed</p>
              </div>
            </div>

            {/* Facilities Available */}
            <div className="mt-8 pt-8 border-t border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">Available Facilities</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { icon: '🍽️', name: 'Meals', desc: 'Breakfast, Lunch, Dinner' },
                  { icon: '📚', name: 'Study Hall', desc: '24/7 Access' },
                  { icon: '⚽', name: 'Sports', desc: 'All ground facilities' },
                  { icon: '🌐', name: 'WiFi', desc: '100 Mbps high-speed' },
                  { icon: '🧺', name: 'Laundry', desc: 'Weekly service' },
                  { icon: '🏋️', name: 'Gym', desc: 'Fully equipped' },
                  { icon: '🔒', name: 'Security', desc: '24/7 CCTV' },
                  { icon: '🩺', name: 'Medical', desc: 'First aid kit available' }
                ].map((facility, idx) => (
                  <div key={idx} className="bg-slate-700/50 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">{facility.icon}</div>
                    <p className="text-white font-bold text-sm">{facility.name}</p>
                    <p className="text-slate-400 text-xs">{facility.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Profile Information */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <User className="text-purple-400" />
            Profile Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-400 text-sm mb-2">Name</p>
              <p className="text-white font-bold">{student?.name}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-2">Email</p>
              <p className="text-white font-bold">{student?.email}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-2">Phone</p>
              <p className="text-white font-bold">{student?.phone || 'N/A'}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-2">College</p>
              <p className="text-white font-bold">{student?.college || 'N/A'}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-2">Academic Year</p>
              <p className="text-white font-bold">{student?.year || 'N/A'}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-2">Member Since</p>
              <p className="text-white font-bold">{student?.registeredAt ? new Date(student.registeredAt).toLocaleDateString() : 'Recently'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
