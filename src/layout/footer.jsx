import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer" className="footer-section py-5 position-relative">
            <div className="container">
                <div className="row g-4 mb-4">
                    {/* Brand Section */}
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-brand mb-4">
                            <h3 className="footer-logo mb-3">
                                <span className="fw-bold" style={{ color: '#cd2eff' }}>Eubert Bong</span>
                                <span className="fw-bold text-white"> Nocepida</span>
                            </h3>
                            <p className="text-white-50 mb-4" style={{ lineHeight: '1.8' }}>
                                Senior Full Stack Developer with 10+ years building scalable, responsive web applications and shipping production-ready features with minimal regressions.
                            </p>
                            <div className="footer-social d-flex gap-3">
                                <a 
                                    href="https://github.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-icon"
                                    aria-label="GitHub"
                                >
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a 
                                    href="https://wa.me/639709552754" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-icon"
                                    aria-label="WhatsApp"
                                >
                                    <i className="fa-brands fa-whatsapp"></i>
                                </a>
                                <a 
                                    href="mailto:eubertbongnocepida95@gmail.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-icon"
                                    aria-label="Email"
                                >
                                    <i className="fa fa-envelope"></i>
                                </a>
                                <a 
                                    href="https://www.linkedin.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-icon"
                                    aria-label="LinkedIn"
                                >
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="footer-heading text-white mb-4">Focus areas</h5>
                        <ul className="footer-links list-unstyled">
                            <li className="mb-2">
                                <span className="footer-link">Scalable web applications</span>
                            </li>
                            <li className="mb-2">
                                <span className="footer-link">Multi-tenant SaaS platforms</span>
                            </li>
                            <li className="mb-2">
                                <span className="footer-link">API design & integrations</span>
                            </li>
                            <li className="mb-2">
                                <span className="footer-link">Performance & reliability</span>
                            </li>
                            <li className="mb-2">
                                <span className="footer-link">Automated testing & delivery</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="footer-heading text-white mb-4">Get In Touch</h5>
                        <ul className="footer-contact list-unstyled">
                            <li className="mb-3 d-flex align-items-start">
                                <i className="fa fa-envelope me-3 mt-1"></i>
                                <span className="text-white-50">eubertbongnocepida95@gmail.com</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start">
                                <i className="fa fa-phone me-3 mt-1"></i>
                                <span className="text-white-50">+63 970 955 2754</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start">
                                <i className="fa fa-map-marker-alt me-3 mt-1"></i>
                                <span className="text-white-50">
                                    Malabon, Metro Manila, Philippines
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom pt-4 mt-4 border-top border-secondary">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <p className="text-white-50 mb-0">
                                © {currentYear} Eubert Bong Nocepida. All rights reserved.
                            </p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <p className="text-white-50 mb-0">
                                Made with <span style={{ color: '#ffb6c1' }}>❤</span> for innovation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;