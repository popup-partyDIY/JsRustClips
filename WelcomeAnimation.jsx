import React, { useEffect, useState } from 'react';

export default function WelcomeAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-orange-400 text-4xl font-bold animate-fadeOut">
      <div className="flex flex-col items-center space-y-4">
        <img src="/logo.png" alt="J Logo" className="w-24 h-24 animate-bounce" />
        <p className="tracking-widest">Loading Rust Raids...</p>
      </div>
    </div>
  );
}
