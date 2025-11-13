export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Welcome to Your New Website</h1>
          <p>
            A modern, responsive, and beautiful website built with Next.js.
            Fast, scalable, and ready for anything.
          </p>
          <div className="cta-buttons">
            <a href="#features" className="btn btn-primary">
              Get Started
            </a>
            <a href="#features" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>
                Built with Next.js for optimal performance and instant page loads.
                Your users will love the speed.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">📱</div>
              <h3>Fully Responsive</h3>
              <p>
                Looks perfect on any device, from mobile phones to large desktop screens.
                One design, every screen.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">🎨</div>
              <h3>Beautiful Design</h3>
              <p>
                Modern aesthetics with smooth animations and a clean interface.
                Make a lasting impression.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">🔒</div>
              <h3>Secure & Reliable</h3>
              <p>
                Built with security best practices and deployed on Vercel's
                reliable infrastructure.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">🚀</div>
              <h3>SEO Optimized</h3>
              <p>
                Optimized for search engines with proper meta tags and fast loading
                times for better rankings.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">💡</div>
              <h3>Easy to Customize</h3>
              <p>
                Clean, well-organized code makes it simple to modify and extend
                with your own features.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
