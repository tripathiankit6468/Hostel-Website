import { Link } from 'react-router-dom';

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-gradient-to-b from-purple-700 to-purple-900 text-white min-h-screen p-6 shadow-xl">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
      <nav className="space-y-3">
        <Link 
          to="/admin"
          className="block p-3 rounded-lg bg-purple-600 hover:bg-purple-500 transition font-semibold"
        >
          📊 Dashboard
        </Link>
        <Link 
          to="/admin/admissions"
          className="block p-3 rounded-lg hover:bg-purple-600 transition font-semibold"
        >
          📋 View Admissions
        </Link>
        <Link 
          to="/admin/rooms"
          className="block p-3 rounded-lg hover:bg-purple-600 transition font-semibold"
        >
          🛏️ Manage Rooms
        </Link>
        <Link 
          to="/admin/bookings"
          className="block p-3 rounded-lg hover:bg-purple-600 transition font-semibold"
        >
          📅 Room Bookings
        </Link>
        <Link 
          to="/admin/gallery"
          className="block p-3 rounded-lg hover:bg-purple-600 transition font-semibold"
        >
          📸 Gallery Upload
        </Link>
      </nav>
    </aside>
  );
}
