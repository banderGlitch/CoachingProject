import '../styles/Footer.css'

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-section">
            <h2>About L1 Coaching</h2>
            <p>
              The premier institutes for preparation of JEE(Main & Advanced), 
              NEET(PMT), NTSE, Olympiad, KVPY, Pre-Foundation (VIII, IX, X), 
              Foundation (XI & XII), XII Passed.
            </p>
          </div>

          <div className="footer-section">
            <h2>Social Media Links</h2>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              <a href="#" aria-label="Email"><i className="fas fa-envelope"></i></a>
              <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          <div className="footer-section">
            <h2>Contact</h2>
            <div className="contact-info">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                B-36/43-46M, Brahma Nand Colony, Durgakund,
                <br />Bhelupur, Varanasi,
                <br />Uttar Pradesh, 221005
              </p>
              <p>
                <i className="fas fa-envelope"></i>
                l1coaching2021@gmail.com
              </p>
              <p>
                <i className="fas fa-phone"></i>
                +91 6390905111
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer