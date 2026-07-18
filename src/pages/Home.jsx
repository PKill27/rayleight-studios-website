import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section id="home" className="hero-section">
        <img
          className="hero-media"
          src="/images/BowlBig/BowlBigCapsules/08-main-art.png"
          alt=""
          aria-hidden="true"
        />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-content">
          <div className="container">
            <h1 className="hero-brand">
              <span className="hero-brand-name">Rayleigh</span>
              <span className="hero-brand-sub">Studios</span>
            </h1>
            <p className="hero-subtitle">
                Creating captivating games where the invisible turns to color.
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
      </section>

      <section id="about" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2 className="section-title">About Us</h2>
              <p>
                Rayleigh Studios is inspired by the wonder of Rayleigh scattering, the phenomenon that transforms invisible light into the vibrant colors of the sky. It's the reason daylight glows blue, why sunsets blush warm, and why even the smallest particles can shape something breathtaking.
              </p>
              <p>
                We carry that spirit into every game we create.
              </p>
              <p>
                Just as scattered light turns the atmosphere into a radiant canvas, we aim to craft systems in games that lead to something greater than the sum of its parts. Adding up to something truly breathtaking.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="about-image">
                <img
                  src="/images/RayleighStudiosImage.png"
                  alt="Rayleigh Studios"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="games" className="section-padding bg-dark">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="section-title">Our Games</h2>
              <p className="text-white-50">
                Explore our growing portfolio of innovative and engaging games
              </p>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="game-card">
                <div className="game-image">
                  <img
                    src="/images/BowlBig/BowlBigCapsules/02-main-capsule.png"
                    alt="Bowl Big"
                  />
                </div>
                <div className="game-content">
                  <h4>Bowl Big</h4>
                  <p>
                    An incremental bowling game where your goal is simple: make your score as big as possible. Upgrade pins, unlock multipliers, and keep chasing a bigger throw.
                  </p>
                  <Link to="/bowl-big-press-release" className="btn btn-outline-pink">
                    Press Kit
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="game-card">
                <div className="game-image">
                  <img
                    src="/images/dont-crack-game.jpg"
                    alt="Don't Crack! Game Screenshot"
                  />
                </div>
                <div className="game-content">
                  <h4>Don't Crack!</h4>
                  <p>
                    A vibrant, rage-inducing platformer where you fly as an unhatched chick navigating the world from inside its fragile eggshell. Master precision controls, race the clock, and try not to crack!
                  </p>
                  <Link to="/dontcrack-press-release" className="btn btn-outline-pink">
                    Press Kit
                  </Link>
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
                <h3 className="mb-3">Porter Killian — Lead Developer</h3>
                <p className="mb-0">
                  Porter is the lead developer and creator of our games. He earned his bachelor's degree in Computer Science with a minor in Art from the University of Pennsylvania, combining creativity and logic in everything he builds.
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="team-card">
                <h3 className="mb-3">Catherine Killian — Marketing</h3>
                <p className="mb-0">Catherine drives the strategy that shares our games with players. She ensures that compelling gameplay experiences find their perfect audience, helping the studio turn hidden potential into vibrant player communities.</p>
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
