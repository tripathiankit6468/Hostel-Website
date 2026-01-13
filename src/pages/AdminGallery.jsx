import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import AdminSidebar from '../components/AdminSidebar';

export default function AdminGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedYear, setSelectedYear] = useState('1st');

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      const listRef = ref(storage, `gallery/${selectedYear}Year`);
      const result = await listAll(listRef);
      
      const urls = await Promise.all(
        result.items.map(item => getDownloadURL(item))
      );
      
      setImages(urls);
    } catch (err) {
      console.error('Error fetching images:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (event) => {
    const files = event.target.files;
    if (!files) return;

    setUploading(true);
    try {
      for (let file of files) {
        const storageRef = ref(storage, `gallery/${selectedYear}Year/${Date.now()}_${file.name}`);
        await uploadBytes(storageRef, file);
      }
      fetchGalleryImages();
    } catch (err) {
      console.error('Error uploading:', err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex">
      <AdminSidebar />
      
      <div className="flex-1 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">📸 Gallery Management</h1>

        {/* Year Selector */}
        <div className="flex gap-4 mb-8">
          {['1st', '2nd', '3rd', '4th'].map(year => (
            <button
              key={year}
              onClick={() => {
                setSelectedYear(year);
                fetchGalleryImages();
              }}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                selectedYear === year
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
            >
              {year} Year
            </button>
          ))}
        </div>

        {/* Upload Area */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <label className="block border-3 border-dashed border-purple-400 rounded-2xl p-12 text-center cursor-pointer hover:border-purple-600 transition">
            <div className="text-5xl mb-4">📤</div>
            <p className="text-xl font-semibold text-gray-700">Click to upload photos</p>
            <p className="text-gray-600 mt-2">Supported: JPG, PNG, GIF</p>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleUpload}
              disabled={uploading}
              className="hidden"
            />
          </label>
        </div>

        {/* Gallery Grid */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">{selectedYear} Year Gallery</h2>
          
          {loading ? (
            <div className="text-center py-12">Loading...</div>
          ) : images.length === 0 ? (
            <div className="text-center py-12 text-gray-600">
              <p className="text-xl">No images yet. Upload some photos!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {images.map((url, idx) => (
                <img
                  key={idx}
                  src={url}
                  alt={`Gallery ${idx}`}
                  className="w-full h-48 object-cover rounded-lg hover:shadow-lg transition"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
