import { Link } from 'react-router-dom'
import '../styles/Header.css'
import { useState } from 'react'
import coaching from '../assets/coaching.png'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <Link to="/">
                        <img src={coaching} alt="Coaching Logo" />
                    </Link>
                </div>
                <button
                    className="mobile-menu-btn"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
                </button>

                <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item has-dropdown">
                            <Link to="/general-info" className="nav-link">
                                General Info <span className="dropdown-icon">▼</span>
                            </Link>
                        </li>
                        <li className="nav-item has-dropdown">
                            <Link to="/admissions" className="nav-link">
                                Admissions <span className="dropdown-icon">▼</span>
                            </Link>
                        </li>
                        <li className="nav-item has-dropdown">
                            <Link to="/why-us" className="nav-link">
                                Why Us <span className="dropdown-icon">▼</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/results" className="nav-link">Results</Link>
                        </li>
                        <li className="nav-item has-dropdown">
                            <Link to="/gallery" className="nav-link">
                                Gallery <span className="dropdown-icon">▼</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blog" className="nav-link">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header