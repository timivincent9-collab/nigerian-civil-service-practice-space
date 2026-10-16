import { useState } from "react";
import PracticeSession from "./components/PracticeSession";
import "./App.css";
import { questions } from "./data/questions";

function App() {
  const [showPractice, setShowPractice] = useState(false);

  if (showPractice) {
    return <PracticeSession />;
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <div className="logo-mark">NC</div>

            <div>
              <h1>Nigerian Civil Service</h1>
              <span>Practice Space</span>
            </div>
          </div>

          <nav className="navigation">
            <a href="#home">Home</a>
            <a href="#practice">Practice</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="hero-label">CIVIL SERVICE EXAM PRACTICE</p>
            
            <h2>
              Practice with confidence.
              <br />
              Prepare for success.
            </h2>

            <p className="hero-description">
              Build your knowledge and improve your performance with
              structured practice questions designed for Nigerian Civil
              Service preparation.
            </p>

            <div className="hero-buttons">
              <a href="#practice" className="primary-button">
                Start Practicing
              </a>

              <a href="#about" className="secondary-button">
                Learn More
              </a>
            </div>
          </div>
        </section>

        <section className="practice-section" id="practice">
          <div className="section-heading">
            <p className="section-label">PRACTICE AREAS</p>
            <h2>Choose a subject to begin</h2>
            <p>
              Select a practice area and test your knowledge at your own
              pace.
            </p>
          </div>

          <div className="practice-grid">
            <div className="practice-card">
              <span className="card-number">01</span>
              <h3>Accounting</h3>
              <p>
                Public-sector accounting, financial procedures, budgeting,
                internal control and audit.
              </p>
              <button onClick={() => setShowPractice(true)}>
  Practice Now
</button>
            </div>

            <div className="practice-card">
              <span className="card-number">02</span>
              <h3>General Knowledge</h3>
              <p>
                Test your knowledge of Nigeria, Africa, institutions,
                science, technology and more.
              </p>
              <button>Practice Now</button>
            </div>

            <div className="practice-card">
              <span className="card-number">03</span>
              <h3>Civic Education</h3>
              <p>
                Practice questions covering citizenship, democracy,
                government and civic responsibilities.
              </p>
              <button>Practice Now</button>
            </div>

            <div className="practice-card">
              <span className="card-number">04</span>
              <h3>English</h3>
              <p>
                Improve grammar, vocabulary, comprehension and correct
                English usage.
              </p>
              <button>Practice Now</button>
            </div>

            <div className="practice-card">
              <span className="card-number">05</span>
              <h3>Quantitative Aptitude</h3>
              <p>
                Practice calculations, percentages, ratios, averages and
                numerical reasoning.
              </p>
              <button>Practice Now</button>
            </div>

            <div className="practice-card">
              <span className="card-number">06</span>
              <h3>Logical Reasoning</h3>
              <p>
                Challenge yourself with patterns, sequences, deductions and
                problem-solving questions.
              </p>
              <button>Practice Now</button>
            </div>

            <div className="practice-card">
              <span className="card-number">07</span>
              <h3>Computer / ICT</h3>
              <p>
                Practice computer fundamentals, office applications,
                internet, email and digital literacy.
              </p>
              <button>Practice Now</button>
            </div>

            <div className="practice-card">
              <span className="card-number">08</span>
              <h3>Public Service</h3>
              <p>
                Learn about civil service structure, ethics, conduct,
                accountability and professional responsibilities.
              </p>
              <button>Practice Now</button>
            </div>

            <div className="practice-card">
              <span className="card-number">09</span>
              <h3>Current Affairs</h3>
              <p>
                Keep your knowledge up to date with relevant Nigerian,
                African and international events.
              </p>
              <button>Practice Now</button>
            </div>
          </div>

          <div className="mock-exam">
            <div>
              <p className="section-label">FULL MOCK EXAMINATION</p>
              <h2>Ready for the full challenge?</h2>
              <p>
                Combine different practice areas in a complete CBT-style
                examination.
              </p>
            </div>

            <button className="mock-button">Start Full Mock</button>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-content">
            <p className="section-label">ABOUT THIS PLATFORM</p>
            <h2>Learn. Practice. Improve.</h2>

            <p>
              Nigerian Civil Service Practice Space is an independent
              educational practice platform created to help learners prepare
              for civil service-related assessments and improve their
              professional knowledge.
            </p>

            <p className="disclaimer">
              This platform is independent and is not an official website,
              examination portal or representative of the Federal Government
              of Nigeria, OHCSF, IPPIS or any government agency.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © 2026 Nigerian Civil Service Practice Space. Independent
          educational platform. Developed by Vinci's Code
        </p>
      </footer>
    </div>
  );
}

export default App;