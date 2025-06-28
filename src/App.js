import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <div className="hero-content">
          <h1>Your Name</h1>
          <p>Final Year Computer Science Student</p>
        </div>
      </header>

      <main className="container">
        <section className="about">
          <h2>About Me</h2>
          <p>I’m passionate about web development, design, and tech for good.</p>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <ul>
            <li>Online Bookstore in Scala</li>
            <li>InclusiveWork App</li>
            <li>This Portfolio</li>
          </ul>
        </section>

        <section className="contact">
          <h2>Contact</h2>
          <p>Email: yourname@example.com</p>
          <p><a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">GitHub</a></p>
          <p><a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">LinkedIn</a></p>
        </section>
      </main>

      <footer>
        &copy; 2025 Your Name. Built with React 💻✨
      </footer>
    </div>
  );
}

export default App;
