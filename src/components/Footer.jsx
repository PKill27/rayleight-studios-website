export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <h5>Rayleigh Studios</h5>
            <p>Creating immersive gaming experiences since 2025</p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="social-links">
              <a href="https://www.youtube.com/@Rayleigh-Studios" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-youtube" />
              </a>
              <a href="#"><i className="bi bi-discord" /></a>
              <a href="https://store.steampowered.com/app/4163290/Dont_Crack/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-controller" />
              </a>
            </div>
            <p className="mt-3 mb-0">&copy; 2025 Rayleigh Studios. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
