
import React from 'react';

function App() {
  return (
    <div className="app">
      <h1>Welcome to Jasper's Rust Raids</h1>
      <video width="100%" height="auto" controls>
        <source src="clips/sample.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;
