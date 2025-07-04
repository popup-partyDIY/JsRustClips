import React, { useState } from 'react';
import { FaShareAlt } from 'react-icons/fa';

export default function App() {
  const [videoURL, setVideoURL] = useState('');
  const [videos, setVideos] = useState([
    'https://www.youtube.com/embed/dQw4w9WgXcQ'
  ]);

  const handleAddVideo = () => {
    if (videoURL.trim()) {
      setVideos([...videos, videoURL.trim()]);
      setVideoURL('');
    }
  };

  const handleShare = (url) => {
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard! Share it on your socials.');
  };

  return (
    <div className="min-h-screen p-4 text-white">
      <div className="text-center mb-6">
        <img src="/logo.png" alt="Logo" className="mx-auto w-24 h-24 rounded-full border-2 border-orange-500" />
        <h1 className="text-5xl mt-2 font-bold text-orange-400 drop-shadow-lg">
          Jasper's Rust Raids 🎮
        </h1>
        <p className="text-sm text-zinc-400 mt-1">Post & Share Your Epic Rust Moments</p>
      </div>
      <div className="mb-6 flex flex-col md:flex-row gap-2 items-center justify-center">
        <input
          placeholder="Paste YouTube embed link here"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
          className="w-full md:w-1/2 bg-zinc-700 border border-zinc-600 text-white p-2 rounded"
        />
        <button onClick={handleAddVideo} className="bg-orange-500 hover:bg-orange-600 p-2 rounded text-white">
          Post Video
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((url, index) => (
          <div key={index} className="bg-zinc-800 shadow-lg rounded-xl p-2">
            <iframe
              className="w-full aspect-video rounded-md"
              src={url}
              title={`Gameplay ${index + 1}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="text-center mt-2">
              <button
                onClick={() => handleShare(url)}
                className="text-orange-400 hover:text-orange-300"
              >
                <FaShareAlt className="inline-block mr-1" /> Share
              </button>
            </div>
          </div>
        ))}
      </div>
      <footer className="mt-10 text-center text-sm text-zinc-500">
        <p>Rust is property of Facepunch Studios. Site built by Jasper with ❤️</p>
        <p className="text-xs mt-2">© {new Date().getFullYear()} JasperGaming. All rights reserved.</p>
      </footer>
    </div>
  );
}
