import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <section className="fsection">
                <div className="container">
                    <div className="footer-columns">
                        <div className="footer-column about">
                            <h4>About</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <br />
                            <p><strong>Email:</strong> info@jstemplate.net<br />
                               <strong>Phone:</strong> 880 123 456 789</p>
                        </div>
                        <div className="footer-column quick-links">
                            <h4>Quick Link</h4>
                            <ul>
                                <li><a href="/home">Home</a></li> {/* Updated to a valid href */}
                                <li><a href="/about">About</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/archived">Archived</a></li>
                                <li><a href="/author">Author</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="footer-column category">
                            <h4>Category</h4>
                            <ul>
                                <li><a href="/lifestyle">Lifestyle</a></li>
                                <li><a href="/technology">Technology</a></li>
                                <li><a href="/travel">Travel</a></li>
                                <li><a href="/business">Business</a></li>
                                <li><a href="/economy">Economy</a></li>
                                <li><a href="/sports">Sports</a></li>
                            </ul>
                        </div>
                        <div className="newsletter-box">
                            <h4>Weekly Newsletter</h4>
                            <p>Get blog articles and offers via email.</p>
                            <form action="#">
                                <div className="input-container">
                                    <input type="email" placeholder="Your Email" required />
                                    <span className="input-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.803 2.883L15 11.783V5.383zM1 5.383v6.4l4.803-3.517L1 5.383zm5.834 3.324-5.55 4.066A1 1 0 0 0 2 13h12a1 1 0 0 0 .717-.287l-5.55-4.066L8 9.583l-1.166-.876z"/>
                                        </svg>
                                    </span>
                                </div>
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer-bottom">
                <p><img src="./pictures/logo/Logo.png" alt="Logo" /><br />&copy; JS Template 2023. All Rights Reserved.</p>
                <ul>
                    <li><a href="/terms-of-use">Terms of Use</a></li> {/* Updated href */}
                    |
                    <li><a href="/privacy-policy">Privacy Policy</a></li> 
                    |
                    <li><a href="/cookie-policy">Cookie Policy</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
