import { useEffect, useState } from 'react';
import { getDocs, collection, updateDoc, doc, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import AdminSidebar from '../components/AdminSidebar';

export default function ManageRooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    roomNumber: '',
    capacity: '1',
    availableBeds: '1',
    price: '',
    floor: ''
  });

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'rooms'));
      setRooms(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (err) {
      console.error('Error fetching rooms:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddRoom = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'rooms'), {
        ...formData,
        createdAt: new Date()
      });
      setFormData({ roomNumber: '', capacity: '1', availableBeds: '1', price: '', floor: '' });
      setShowForm(false);
      fetchRooms();
    } catch (err) {
      console.error('Error adding room:', err);
    }
  };

  if (loading) return <div className="flex justify-center items-center h-screen text-2xl">Loading...</div>;

  return (
    <div className="flex">
      <AdminSidebar />
      
      <div className="flex-1 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">🛏️ Manage Rooms</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition font-bold"
          >
            ➕ Add New Room
          </button>
        </div>

        {/* Add Room Form */}
        {showForm && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Add New Room</h2>
            <form onSubmit={handleAddRoom} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Room Number"
                value={formData.roomNumber}
                onChange={(e) => setFormData({...formData, roomNumber: e.target.value})}
                required
                className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Floor"
                value={formData.floor}
                onChange={(e) => setFormData({...formData, floor: e.target.value})}
                className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
              />
              <select
                value={formData.capacity}
                onChange={(e) => setFormData({...formData, capacity: e.target.value})}
                className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
              >
                <option value="1">Single Bed</option>
                <option value="2">Double Bed</option>
                <option value="3">Triple Bed</option>
              </select>
              <input
                type="number"
                placeholder="Price/Month"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                required
                className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-bold"
              >
                ✅ Add Room
              </button>
            </form>
          </div>
        )}

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Room {room.roomNumber}</h3>
              <div className="space-y-2 mb-4">
                <p className="text-gray-700"><strong>Floor:</strong> {room.floor || 'N/A'}</p>
                <p className="text-gray-700"><strong>Capacity:</strong> {room.capacity} bed(s)</p>
                <p className="text-gray-700"><strong>Available Beds:</strong> {room.availableBeds}</p>
                <p className="text-2xl font-bold text-green-600">₹{room.price}/month</p>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg hover:shadow-lg transition font-semibold">
                Edit Room
              </button>
            </div>
          ))}
        </div>

        {rooms.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-600">No rooms added yet. Create one to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}
