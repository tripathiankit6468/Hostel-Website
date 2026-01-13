import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [student, setStudent] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    // Check for student login
    const studentData = localStorage.getItem('student');
    if (studentData) {
      setStudent(JSON.parse(studentData));
    }

    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  const handleStudentLogout = () => {
    localStorage.removeItem('student');
    setStudent(null);
    navigate('/student-login');
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 backdrop-blur-md bg-opacity-90 shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white font-bold text-2xl hover:text-yellow-300 transition">
            🏠 Vimal Sadan
          </Link>
          
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>

          <ul className={`${showMenu ? 'flex' : 'hidden'} md:flex gap-4 md:gap-6 items-center flex-wrap justify-center md:justify-end w-full md:w-auto md:flex-nowrap`}>
            <li><Link to="/" className="text-white hover:text-yellow-300 transition font-semibold text-sm md:text-base">Home</Link></li>
            <li><Link to="/learning" className="text-white hover:text-yellow-300 transition font-semibold text-sm md:text-base">📚 Learning</Link></li>
            <li><Link to="/memories" className="text-white hover:text-yellow-300 transition font-semibold text-sm md:text-base">📸 Memories</Link></li>
            <li><Link to="/sports" className="text-white hover:text-yellow-300 transition font-semibold text-sm md:text-base">⚽ Sports</Link></li>
            <li><Link to="/festivals" className="text-white hover:text-yellow-300 transition font-semibold text-sm md:text-base">🎉 Festivals</Link></li>
            <li><Link to="/admission" className="text-white hover:text-yellow-300 transition font-semibold text-sm md:text-base">Admission</Link></li>
            <li><Link to="/rooms" className="text-white hover:text-yellow-300 transition font-semibold text-sm md:text-base">Rooms</Link></li>
            
            {student ? (
              <>
                <li><Link to="/student-dashboard" className="text-white hover:text-yellow-300 transition font-semibold text-sm md:text-base">📋 Dashboard</Link></li>
                <li>
                  <button 
                    onClick={handleStudentLogout}
                    className="bg-orange-500 text-white px-3 md:px-4 py-2 rounded-lg hover:bg-orange-600 transition font-semibold text-sm"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                {user ? (
                  <>
                    <li><Link to="/admin" className="text-white hover:text-yellow-300 transition font-semibold text-sm md:text-base">Dashboard</Link></li>
                    <li>
                      <button 
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-3 md:px-4 py-2 rounded-lg hover:bg-red-600 transition font-semibold text-sm"
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li><Link to="/student-login" className="bg-green-500 text-white px-3 md:px-4 py-2 rounded-lg hover:bg-green-600 transition font-semibold text-sm">Student Login</Link></li>
                    <li><Link to="/login" className="bg-yellow-400 text-purple-600 px-3 md:px-4 py-2 rounded-lg hover:bg-yellow-300 transition font-semibold text-sm">Admin</Link></li>
                  </>
                )}
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}
