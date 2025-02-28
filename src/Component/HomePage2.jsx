import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Home.css"; // Import updated CSS
import Navbar from "../Component/Navbar";

const HomePage2 = () => {
  return (
    <>
      <Navbar />
      <div className="homepage">
        {/* Hero Section */}
        <header className="hero">
          <h1>Stay Updated with NewsApp</h1>
          <p>
            Bringing you the latest, most reliable news from around the world.
          </p>
          <Link to="/news" className="btn">
            Read Latest News
          </Link>
        </header>

        {/* About Section */}
        <section className="about">
          <h2>About NewsApp</h2>
          <p>
            NewsApp delivers real-time news updates, covering politics, sports,
            business, entertainment, and technology. Our AI-powered algorithm
            ensures you get the most relevant stories tailored to your
            interests.
          </p>
          <div className="about-grid">
            <div className="about-card">
              <h3>Trusted Sources</h3>
              <p>
                We gather news from credible publishers, ensuring accuracy and
                reliability.
              </p>
            </div>
            <div className="about-card">
              <h3>AI-Powered</h3>
              <p>Personalized recommendations based on your reading habits.</p>
            </div>
            <div className="about-card">
              <h3>Real-Time Updates</h3>
              <p>Get breaking news as it happens, anytime, anywhere.</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <h3>1. Browse News</h3>
              <p>
                Explore trending headlines and categories that interest you.
              </p>
            </div>
            <div className="step">
              <h3>2. Search for Topics</h3>
              <p>
                Find specific news articles using our powerful search engine.
              </p>
            </div>
            <div className="step">
              <h3>3. Stay Notified</h3>
              <p>
                Subscribe to get notifications on breaking news that matters to
                you.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <h2>What Our Readers Say</h2>
          <div className="testimonial-cards">
            <div className="testimonial">
              <p>
                "NewsApp keeps me updated on all the latest trends. Highly
                recommended!"
              </p>
              <span>- Emily R.</span>
            </div>
            <div className="testimonial">
              <p>
                "The best news platform! It's accurate, fast, and reliable."
              </p>
              <span>- James D.</span>
            </div>
            <div className="testimonial">
              <p>
                "I love the clean design and ease of use. It’s my go-to news
                source!"
              </p>
              <span>- Maria S.</span>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta">
          <h2>Stay Informed, Stay Ahead</h2>
          <p>Never miss an important update. Start reading now!</p>
          <Link to="/news" className="btn">
            Explore News
          </Link>
        </section>
      </div>
    </>
  );
};

export default HomePage2;
