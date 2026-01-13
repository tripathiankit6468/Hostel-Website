import { useEffect, useState } from 'react';
import { getDocs, collection, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import AdminSidebar from '../components/AdminSidebar';

export default function ViewAdmissions() {
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetchAdmissions();
  }, []);

  const fetchAdmissions = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'admissions'));
      setAdmissions(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (err) {
      console.error('Error fetching admissions:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      await updateDoc(doc(db, 'admissions', id), { status: newStatus });
      fetchAdmissions();
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const filteredAdmissions = filter === 'All' 
    ? admissions 
    : admissions.filter(a => a.status === filter);

  if (loading) return <div className="flex justify-center items-center h-screen text-2xl">Loading...</div>;

  return (
    <div className="flex">
      <AdminSidebar />
      
      <div className="flex-1 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">📋 Admission Applications</h1>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-8">
          {['All', 'Pending', 'Approved', 'Rejected'].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                filter === status
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Applications Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {filteredAdmissions.length === 0 ? (
            <div className="p-8 text-center text-gray-600">
              <p className="text-xl">No applications found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-purple-100">
                  <tr>
                    <th className="p-4 text-left">Name</th>
                    <th className="p-4 text-left">Email</th>
                    <th className="p-4 text-left">College</th>
                    <th className="p-4 text-left">Year</th>
                    <th className="p-4 text-left">Status</th>
                    <th className="p-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAdmissions.map((admission) => (
                    <tr key={admission.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold">{admission.firstName} {admission.lastName}</td>
                      <td className="p-4">{admission.email}</td>
                      <td className="p-4">{admission.college}</td>
                      <td className="p-4">{admission.year}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full font-semibold ${
                          admission.status === 'Approved' ? 'bg-green-100 text-green-700' :
                          admission.status === 'Rejected' ? 'bg-red-100 text-red-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {admission.status}
                        </span>
                      </td>
                      <td className="p-4 flex gap-2">
                        <button
                          onClick={() => updateStatus(admission.id, 'Approved')}
                          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition font-semibold"
                        >
                          ✅ Approve
                        </button>
                        <button
                          onClick={() => updateStatus(admission.id, 'Rejected')}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition font-semibold"
                        >
                          ❌ Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
