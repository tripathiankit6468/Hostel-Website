import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';
import AdminSidebar from '../components/AdminSidebar';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    admissions: 0,
    bookings: 0,
    rooms: 0,
    pending: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const admissionsSnap = await getDocs(collection(db, 'admissions'));
      const bookingsSnap = await getDocs(collection(db, 'bookings'));
      const roomsSnap = await getDocs(collection(db, 'rooms'));
      
      const pendingAdmissions = admissionsSnap.docs.filter(doc => doc.data().status === 'Pending').length;
      const pendingBookings = bookingsSnap.docs.filter(doc => doc.data().status === 'Pending').length;

      setStats({
        admissions: admissionsSnap.size,
        bookings: bookingsSnap.size,
        rooms: roomsSnap.size,
        pending: pendingAdmissions + pendingBookings
      });
    } catch (err) {
      console.error('Error fetching stats:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="flex justify-center items-center h-screen text-2xl">Loading...</div>;

  return (
    <div className="flex">
      <AdminSidebar />
      
      <div className="flex-1 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen p-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-12">📊 Admin Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl font-bold text-purple-600 mb-2">{stats.admissions}</div>
            <p className="text-gray-600 text-lg">📋 Total Admissions</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl font-bold text-blue-600 mb-2">{stats.bookings}</div>
            <p className="text-gray-600 text-lg">🛏️ Room Bookings</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl font-bold text-green-600 mb-2">{stats.rooms}</div>
            <p className="text-gray-600 text-lg">🏠 Total Rooms</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-4xl font-bold text-red-600 mb-2">{stats.pending}</div>
            <p className="text-gray-600 text-lg">⏳ Pending Requests</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">⚡ Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-lg hover:shadow-lg transition font-bold text-lg">
              ➕ Add New Room
            </button>
            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4 rounded-lg hover:shadow-lg transition font-bold text-lg">
              📨 Send Announcements
            </button>
            <button className="bg-gradient-to-r from-yellow-600 to-red-600 text-white p-4 rounded-lg hover:shadow-lg transition font-bold text-lg">
              💰 View Payments
            </button>
            <button className="bg-gradient-to-r from-pink-600 to-red-600 text-white p-4 rounded-lg hover:shadow-lg transition font-bold text-lg">
              📞 View Complaints
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">📝 Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl">📋</div>
              <div>
                <p className="font-bold">New Admission Application</p>
                <p className="text-gray-600">Check pending applications for review</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
              <div className="text-3xl">🛏️</div>
              <div>
                <p className="font-bold">Room Booking Request</p>
                <p className="text-gray-600">Pending room allocation and confirmation</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg">
              <div className="text-3xl">👥</div>
              <div>
                <p className="font-bold">Student Check-in</p>
                <p className="text-gray-600">Process student room allocations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
