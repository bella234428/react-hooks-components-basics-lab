import React from "react";

// Navbar component is already defined
function Navbar() {
  return (
    <nav>
      <h1>My Portfolio</h1>
    </nav>
  );
}

// Home component is already defined
function Home() {
  return (
    <div id="home">
      <h2>Home</h2>
      <p>Welcome to my portfolio site.</p>
    </div>
  );
}

// You need to create the About component
function About() {
  return (
    <div id="about">
      <h2>About</h2>
      {/* You can add more content here if you'd like */}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;

