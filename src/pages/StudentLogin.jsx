import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function StudentLogin() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    college: '',
    year: '',
    address: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
      if (!validatePhone(formData.phone)) {
        newErrors.phone = 'Phone must be 10 digits';
      }
      if (!formData.college.trim()) {
        newErrors.college = 'College name is required';
      }
      if (!formData.year) {
        newErrors.year = 'Year is required';
      }
      if (!formData.address.trim()) {
        newErrors.address = 'Address is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (isLogin) {
      // Login
      const student = {
        id: Math.random().toString(36).substr(2, 9),
        email: formData.email,
        name: 'Student',
        currentlyStaying: true,
        checkinDate: new Date(2024, 0, 15),
        checkoutDate: new Date(2025, 6, 15),
        room: null,
        roomType: null
      };
      localStorage.setItem('student', JSON.stringify(student));
      alert('✅ Login successful!');
      navigate('/student-dashboard');
    } else {
      // Register
      const newStudent = {
        id: Math.random().toString(36).substr(2, 9),
        email: formData.email,
        name: formData.name,
        phone: formData.phone,
        college: formData.college,
        year: formData.year,
        address: formData.address,
        currentlyStaying: false,
        checkinDate: null,
        checkoutDate: null,
        room: null,
        roomType: null,
        registeredAt: new Date()
      };
      localStorage.setItem('student', JSON.stringify(newStudent));
      alert('✅ Registration successful! Please book a room to access hostel.');
      navigate('/rooms');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-2">🏠 Vimal Sadan</h1>
            <p className="text-blue-100">Student Portal</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-0 border-b border-slate-700">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-4 font-bold transition-all ${
                isLogin
                  ? 'bg-blue-600 text-white border-b-2 border-blue-400'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-4 font-bold transition-all ${
                !isLogin
                  ? 'bg-purple-600 text-white border-b-2 border-purple-400'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Register
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {!isLogin && (
              <>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-slate-400" size={18} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full bg-slate-700 border rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-500 focus:outline-none transition ${
                        errors.name ? 'border-red-500' : 'border-slate-600 focus:border-blue-500'
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-slate-400" size={18} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile"
                      className={`w-full bg-slate-700 border rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-500 focus:outline-none transition ${
                        errors.phone ? 'border-red-500' : 'border-slate-600 focus:border-blue-500'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">
                    College Name
                  </label>
                  <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    placeholder="Your college"
                    className={`w-full bg-slate-700 border rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none transition ${
                      errors.college ? 'border-red-500' : 'border-slate-600 focus:border-blue-500'
                    }`}
                  />
                  {errors.college && <p className="text-red-400 text-xs mt-1">{errors.college}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">
                    Academic Year
                  </label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className={`w-full bg-slate-700 border rounded-lg px-4 py-2 text-white focus:outline-none transition ${
                      errors.year ? 'border-red-500' : 'border-slate-600 focus:border-blue-500'
                    }`}
                  >
                    <option value="">Select Year</option>
                    <option value="1st">1st Year</option>
                    <option value="2nd">2nd Year</option>
                    <option value="3rd">3rd Year</option>
                    <option value="4th">4th Year</option>
                  </select>
                  {errors.year && <p className="text-red-400 text-xs mt-1">{errors.year}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">
                    Address
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 text-slate-400" size={18} />
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Permanent address"
                      rows="2"
                      className={`w-full bg-slate-700 border rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-500 focus:outline-none transition resize-none ${
                        errors.address ? 'border-red-500' : 'border-slate-600 focus:border-blue-500'
                      }`}
                    />
                  </div>
                  {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address}</p>}
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`w-full bg-slate-700 border rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-500 focus:outline-none transition ${
                    errors.email ? 'border-red-500' : 'border-slate-600 focus:border-blue-500'
                  }`}
                />
              </div>
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-slate-400" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full bg-slate-700 border rounded-lg pl-10 pr-10 py-2 text-white placeholder-slate-500 focus:outline-none transition ${
                    errors.password ? 'border-red-500' : 'border-slate-600 focus:border-blue-500'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-600 disabled:to-slate-600 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105 disabled:scale-100 mt-6"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  ⏳ Processing...
                </span>
              ) : (
                isLogin ? '🔓 Login' : '📝 Register'
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="bg-slate-900 px-6 py-4 text-center text-sm text-slate-400">
            {isLogin ? (
              <>
                Don't have an account?{' '}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-blue-400 hover:text-blue-300 font-bold"
                >
                  Register here
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-purple-400 hover:text-purple-300 font-bold"
                >
                  Login here
                </button>
              </>
            )}
          </div>
        </div>

        {/* Demo Info */}
        <div className="mt-6 bg-blue-900/30 border border-blue-700 rounded-lg p-4 text-center text-sm text-blue-200">
          <p className="font-bold mb-2">🧪 Demo Credentials</p>
          <p>Email: student@vimalsadan.com</p>
          <p>Password: demo123</p>
        </div>
      </div>
    </div>
  );
}
