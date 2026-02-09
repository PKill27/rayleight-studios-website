export default function Home() {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="hero-title mb-4">Welcome to Rayleigh Studios</h1>
              <p className="hero-subtitle mb-5">
                Crafting immersive worlds and unforgettable gaming experiences
              </p>
              <div className="hero-buttons">
                <a href="#games" className="btn btn-primary btn-lg me-3">
                  Our Games
                </a>
                <a href="#contact" className="btn btn-outline-light btn-lg">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <i className="bi bi-chevron-down" />
        </div>
      </section>

      <section id="about" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2 className="section-title">About Us</h2>
              <p className="lead">
                Rayleigh Studios is an independent, one-person game development studio founded and led by Porter Killian.
              </p>
              <p>
                The studio focuses on crafting vibrant, cartoon-styled games that blend creative world-building with thoughtful, precision-driven gameplay. With a commitment to expressive art, tight mechanics, and experiences that spark joy, Rayleigh Studios aims to create games that feel both playful and challenging. Don't Crack! is the studio's debut release, marking the beginning of its journey into indie game development.
              </p>
              <p>
                The Rayleigh Studios name harkens back to Rayleigh scattering, which is what gives the sky its color—a fitting inspiration for a studio dedicated to creating vibrant, colorful worlds.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="about-image">
                <div className="image-placeholder">
                  <i className="bi bi-controller" />
                  <p>Studio Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="games" className="section-padding bg-dark">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="section-title text-white">Our Games</h2>
              <p className="text-white-50">
                Explore our growing portfolio of innovative and engaging games
              </p>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="game-card">
                <div className="game-image">
                  <img
                    src="/images/dont-crack-game.jpg"
                    alt="Don't Crack! Game Screenshot"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      background: 'var(--dark-secondary)',
                    }}
                  />
                </div>
                <div className="game-content">
                  <h4>Don't Crack!</h4>
                  <p>
                    A vibrant, rage-inducing platformer where you fly as an unhatched chick navigating the world from inside its fragile eggshell. Master precision controls, race the clock, and try not to crack!
                  </p>
                  <a href="/press-release" className="btn btn-sm btn-outline-secondary">
                    Press release
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="section-padding">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="section-title">Our Team</h2>
              <p className="lead">Meet the talented individuals behind our games</p>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-8">
              <div className="team-card">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center mb-4 mb-md-0">
                    <div className="team-avatar">
                      <i className="bi bi-person-circle" />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <h3 className="mb-3">Porter Killian — Developer Bio</h3>
                    <p className="mb-0">
                      Porter Killian is a solo developer who creates both the art and code behind his games. He earned his bachelor's degree in Computer Science with a minor in Art from the University of Pennsylvania, combining creativity and logic in everything he builds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="section-title text-white">Get In Touch</h2>
              <p className="text-white-50">
                Have a question or want to collaborate? We'd love to hear from you!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <form
                className="contact-form"
                action="https://formspree.io/f/xzdvvnoa"
                method="POST"
              >
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder="Your Message"
                      required
                    />
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              <div className="contact-info text-center mt-5">
                <div className="row justify-content-center">
                  <div className="col-md-4 mb-4 mb-md-0 me-md-5">
                    <i className="bi bi-envelope-fill contact-icon" />
                    <p>Contact@RayleighStudios.com</p>
                  </div>
                  <div className="col-md-4">
                    <i className="bi bi-geo-alt-fill contact-icon" />
                    <p>Newport Beach, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
