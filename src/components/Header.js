import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen] = useState(false);

  const location = useLocation();

  // Close mobile menu whenever route changes
  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  const closeMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <header>
      {/* Header Top */}
      <div className="header-top bgg-darkk pt-md-2">
        <div className="container">
          <div className="row justify-content-center justify-content-xl-between align-items-center">
            <div className="col-auto">
              <div className="header-top-contact">
                <ul className="anchor d-md-flex align-items-center">

                  {/* Phone 1 */}
                  <li className="px-md-5 fw-bold">
                    <a
                      className="text-white"
                      href="tel:+917066665554"
                    >
                      <i className="fas fa-phone-volume text-white"></i>{" "}
                      +91 7066665554
                    </a>
                  </li>

                  {/* Phone 2 */}
                  <li className="px-md-5 fw-bold">
                    <a
                      className="text-white"
                      href="tel:+919145557771"
                    >
                      <i className="fas fa-phone-volume text-white"></i>{" "}
                      +91 9145557771
                    </a>
                  </li>

                  {/* Email */}
                  <li className="px-md-5">
                    <a
                      className="text-white"
                      href="mailto:omagrotourism.com@gmail.com"
                    >
                      <i className="far fa-envelope text-white"></i>
                      <span className="text-white fw-bold">
                        {" "}
                        omagrotourism.com@gmail.com
                      </span>
                    </a>
                  </li>

                  {/* Social Media */}
                  <li className="d-flex gap-3">
                    <a
                      href="https://www.instagram.com/omagrotourism/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram text-white"></i>
                    </a>

                    <a
                      href="https://www.facebook.com/profile.php?id=61593076334679"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook-f text-white"></i>
                    </a>

                    <a
                      href="https://x.com/omagrotourism"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-twitter text-white"></i>
                    </a>

                    <a
                      href="https://in.pinterest.com/omagrotourismcom/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-pinterest-p text-white"></i>
                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-navigation">
        <Navbar
          expand="lg"
          expanded={isNavOpen}
          onToggle={(expanded) => setIsNavOpen(expanded)}
        >
          <Container>

            {/* Logo */}
            <Link to="/" onClick={closeMenu}>
              <img
                src="/images/logo.jpg"
                className="logoo"
                alt="Om Agro Tourism"
              />
            </Link>

            {/* Mobile Toggle */}
            <Navbar.Toggle aria-controls="main_nav">
              <i className="fas fa-bars darkcolorr"></i>
            </Navbar.Toggle>

            <Navbar.Collapse id="main_nav">

              <Nav className="mx-auto">

                {/* Home */}
                <Nav.Link
                  as={Link}
                  to="/"
                  className="fw-bold nav-item"
                  onClick={closeMenu}
                >
                  Home
                </Nav.Link>

                {/* About Us */}
                <NavDropdown
                  title="About Us"
                  id="about-us-dropdown"
                  className="fw-bold"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/about-us"
                    onClick={closeMenu}
                  >
                    About Us
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={Link}
                    to="/privacy-policy"
                    onClick={closeMenu}
                  >
                    Privacy Policy
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={Link}
                    to="/faqs"
                    onClick={closeMenu}
                  >
                    FAQs
                  </NavDropdown.Item>
                </NavDropdown>

                {/* Attractions */}
                <Nav.Link
                  as={Link}
                  to="/attractions"
                  className="fw-bold nav-item"
                  onClick={closeMenu}
                >
                  Attractions
                </Nav.Link>

                {/* Activities */}
                <Nav.Link
                  as={Link}
                  to="/activities"
                  className="fw-bold nav-item"
                  onClick={closeMenu}
                >
                  Activities
                </Nav.Link>

                {/* Packages */}
                <Nav.Link
                  as={Link}
                  to="/packages"
                  className="fw-bold nav-item"
                  onClick={closeMenu}
                >
                  Packages
                </Nav.Link>

                {/* Near By Places */}
                <Nav.Link
                  as={Link}
                  to="/near-by-places"
                  className="fw-bold nav-item"
                  onClick={closeMenu}
                >
                  Near By Places
                </Nav.Link>

                {/* Gallery */}
                <Nav.Link
                  as={Link}
                  to="/gallery"
                  className="fw-bold nav-item"
                  onClick={closeMenu}
                >
                  Gallery
                </Nav.Link>

                {/* How to Reach */}
                <Nav.Link
                  as={Link}
                  to="/how-to-reach"
                  className="fw-bold nav-item"
                  onClick={closeMenu}
                >
                  How to Reach
                </Nav.Link>

                {/* Events */}
                <Nav.Link
                  as={Link}
                  to="/events"
                  className="fw-bold nav-item"
                  onClick={closeMenu}
                >
                  Events
                </Nav.Link>

                {/* Contact Us */}
                <NavDropdown
                  title="Contact Us"
                  id="contact-dropdown"
                  className="fw-bold"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/contact-us"
                    onClick={closeMenu}
                  >
                    Contact
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={Link}
                    to="/enquiry"
                    onClick={closeMenu}
                  >
                    Enquiry
                  </NavDropdown.Item>
                </NavDropdown>

              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* Search Area */}
      {isSearchOpen && (
        <div className="search-area">
          <form action="#">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Type Keyword..."
              />

              <button
                type="submit"
                className="search-icon-btn"
              >
                <i className="far fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
