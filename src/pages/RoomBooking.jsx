import { useState, useEffect } from 'react';
import { Bed, Users, MapPin, Wifi, Lock, AlertCircle, CheckCircle, Calendar, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function RoomBooking() {
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [selectedRoomType, setSelectedRoomType] = useState(null);
  const [formData, setFormData] = useState({
    checkinDate: '',
    duration: '12'
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const studentData = localStorage.getItem('student');
    if (!studentData) {
      navigate('/student-login');
      return;
    }
    setStudent(JSON.parse(studentData));
  }, [navigate]);

  const roomTypes = [
    {
      type: 'single',
      name: 'Single Room',
      capacity: '1 Person',
      price: 7500,
      rentText: '₹7,500/month',
      image: '🛏️',
      features: ['Single bed', 'Private study desk', 'Attached washroom', 'Window with view', 'Personal locker'],
      occupancy: '1'
    },
    {
      type: 'double',
      name: 'Double Room',
      capacity: '2 Persons',
      price: 6000,
      rentText: '₹6,000/month per person',
      image: '🛏️🛏️',
      features: ['Two beds', 'Shared study area', 'Attached washroom', 'Good ventilation', 'Individual lockers'],
      occupancy: '2'
    },
    {
      type: 'triple',
      name: 'Triple Room',
      capacity: '3 Persons',
      price: 5000,
      rentText: '₹5,000/month per person',
      image: '🛏️🛏️🛏️',
      features: ['Three beds', 'Common study area', 'Attached washroom', 'Large windows', 'Individual lockers'],
      occupancy: '3'
    }
  ];

  const commonFacilities = [
    { icon: '📚', name: 'Study Room', desc: 'Quiet study hall with WiFi' },
    { icon: '🍽️', name: 'Dining Hall', desc: 'Quality meals thrice daily' },
    { icon: '🏋️', name: 'Gym', desc: 'Fully equipped fitness center' },
    { icon: '⚽', name: 'Sports Ground', desc: 'Cricket, volleyball, badminton' },
    { icon: '🧺', name: 'Laundry', desc: 'Weekly laundry service' },
    { icon: '📺', name: 'Recreation', desc: 'TV & gaming room' },
    { icon: '🔒', name: 'Security', desc: '24/7 security & CCTV' },
    { icon: '🌐', name: 'High-Speed WiFi', desc: '100 Mbps connectivity' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateAmount = () => {
    if (!selectedRoomType) return 0;
    const room = roomTypes.find(r => r.type === selectedRoomType);
    return room.price * parseInt(formData.duration);
  };

  const handleSubmitBooking = async (e) => {
    e.preventDefault();
    if (!formData.checkinDate) {
      alert('⚠️ Please select check-in date');
      return;
    }

    setLoading(true);

    // Simulate booking
    await new Promise(resolve => setTimeout(resolve, 1500));

    const checkinDate = new Date(formData.checkinDate);
    const checkoutDate = new Date(checkinDate);
    checkoutDate.setMonth(checkoutDate.getMonth() + parseInt(formData.duration));

    const updatedStudent = {
      ...student,
      currentlyStaying: true,
      checkinDate,
      checkoutDate,
      roomType: selectedRoomType,
      room: `Room ${Math.floor(Math.random() * 1000) + 100}`,
      bookingAmount: calculateAmount()
    };

    localStorage.setItem('student', JSON.stringify(updatedStudent));
    setStudent(updatedStudent);
    setBookingConfirmed(true);
    setLoading(false);

    setTimeout(() => {
      alert('✅ Room booked successfully! You can now access all hostel facilities.');
      navigate('/student-dashboard');
    }, 2000);
  };

  if (!student) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 pt-24 flex items-center justify-center">
        <div className="text-white text-center">
          <p className="text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (bookingConfirmed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 pt-24 pb-12 px-4 flex items-center justify-center">
        <div className="max-w-md bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center shadow-2xl">
          <CheckCircle size={64} className="mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Booking Confirmed! 🎉</h2>
          <div className="bg-white/20 rounded-lg p-4 mb-4 text-left">
            <p className="mb-2"><strong>Room Type:</strong> {selectedRoomType === 'single' ? 'Single' : selectedRoomType === 'double' ? 'Double' : 'Triple'}</p>
            <p className="mb-2"><strong>Total Amount:</strong> ₹{calculateAmount()}</p>
            <p className="mb-2"><strong>Duration:</strong> {formData.duration} months</p>
          </div>
          <p className="text-green-100">Redirecting to dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">🛏️ Room Booking</h1>
          <p className="text-xl text-slate-300">Choose your perfect home away from home</p>
        </div>

        {/* Room Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {roomTypes.map(room => (
            <div
              key={room.type}
              onClick={() => setSelectedRoomType(room.type)}
              className={`rounded-2xl border-2 overflow-hidden cursor-pointer transition-all transform hover:scale-105 ${
                selectedRoomType === room.type
                  ? 'border-blue-500 bg-gradient-to-br from-blue-600/20 to-blue-700/20 ring-2 ring-blue-400'
                  : 'border-slate-700 bg-slate-800 hover:border-slate-600'
              }`}
            >
              {/* Header */}
              <div className={`p-6 text-center ${
                selectedRoomType === room.type
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700'
                  : 'bg-gradient-to-r from-slate-700 to-slate-800'
              }`}>
                <div className="text-5xl mb-2">{room.image}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{room.name}</h3>
                <p className="text-blue-100">{room.capacity}</p>
              </div>

              {/* Price */}
              <div className="p-6 border-b border-slate-700 text-center">
                <p className="text-3xl font-bold text-blue-400">{room.rentText}</p>
                <div className="flex items-center justify-center gap-1 mt-2 text-slate-400 text-sm">
                  <DollarSign size={16} />
                  <span>Per month</span>
                </div>
              </div>

              {/* Features */}
              <div className="p-6 space-y-3">
                {room.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-300">
                    <span className="text-green-400">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Select Button */}
              <div className="p-6 border-t border-slate-700">
                <button
                  className={`w-full py-3 rounded-lg font-bold transition-all ${
                    selectedRoomType === room.type
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {selectedRoomType === room.type ? '✓ Selected' : 'Select Room'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        {selectedRoomType && (
          <div className="max-w-2xl mx-auto mb-12">
            <form onSubmit={handleSubmitBooking} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6">📋 Complete Your Booking</h2>

              {/* Current Booking Info */}
              <div className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-4 mb-6">
                <div className="grid grid-cols-2 gap-4 text-slate-300">
                  <div>
                    <p className="text-sm text-slate-400">Selected Room</p>
                    <p className="font-bold text-white capitalize">{selectedRoomType} Room</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Monthly Rent</p>
                    <p className="font-bold text-white">
                      ₹{roomTypes.find(r => r.type === selectedRoomType)?.price}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">
                    Check-in Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 text-slate-400" size={18} />
                    <input
                      type="date"
                      name="checkinDate"
                      value={formData.checkinDate}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">
                    Duration (Months)
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 text-slate-400" size={18} />
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-blue-500"
                    >
                      {[1, 2, 3, 4, 6, 9, 12].map(month => (
                        <option key={month} value={month}>{month} Month{month > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Cost Calculation */}
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/20 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-slate-300">Monthly Rent:</span>
                  <span className="text-white font-bold">₹{roomTypes.find(r => r.type === selectedRoomType)?.price}</span>
                </div>
                <div className="flex justify-between items-center mb-3 pb-3 border-b border-slate-600">
                  <span className="text-slate-300">Duration:</span>
                  <span className="text-white font-bold">{formData.duration} months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-white">Total Amount:</span>
                  <span className="text-3xl font-bold text-blue-400">₹{calculateAmount()}</span>
                </div>
              </div>

              {/* T&C */}
              <div className="bg-slate-700/50 rounded-lg p-4 mb-6 text-sm text-slate-300 max-h-32 overflow-y-auto">
                <p className="font-bold text-white mb-2">📋 Terms & Conditions:</p>
                <ul className="space-y-2 text-xs">
                  <li>✓ Payment should be made before check-in date</li>
                  <li>✓ Advance booking is required at least 2 days before</li>
                  <li>✓ Security deposit of ₹5,000 is required (refundable)</li>
                  <li>✓ No damage to hostel property is allowed</li>
                  <li>✓ Visitors policy must be followed strictly</li>
                  <li>✓ Smoking and alcohol consumption are prohibited</li>
                  <li>✓ 30 days notice required for checkout</li>
                </ul>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-slate-600 disabled:to-slate-600 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-105 disabled:scale-100 text-lg"
              >
                {loading ? '⏳ Processing...' : `✓ Confirm Booking - ₹${calculateAmount()}`}
              </button>
            </form>
          </div>
        )}

        {/* Common Facilities */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">🏢 Common Facilities</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {commonFacilities.map((facility, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-6 text-center hover:border-blue-500 transition">
                <div className="text-4xl mb-3">{facility.icon}</div>
                <h4 className="font-bold text-white mb-2">{facility.name}</h4>
                <p className="text-sm text-slate-400">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hostel Rules */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <AlertCircle className="text-yellow-400" />
            Important Hostel Rules
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-blue-400 mb-3">✓ Do's</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Keep your room clean and organized</li>
                <li>• Use water and electricity responsibly</li>
                <li>• Inform security about guests in advance</li>
                <li>• Follow mess timings for meals</li>
                <li>• Respect quiet hours (10 PM - 8 AM)</li>
                <li>• Participate in hostel activities</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-red-400 mb-3">✗ Don'ts</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• No smoking or alcohol inside rooms</li>
                <li>• No loud music or parties</li>
                <li>• No violence or bullying</li>
                <li>• No unauthorized electrical appliances</li>
                <li>• No damage to hostel property</li>
                <li>• No access after 11:30 PM without permission</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
