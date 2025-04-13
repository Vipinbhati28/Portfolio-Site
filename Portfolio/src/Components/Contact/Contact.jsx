import React from "react";
import './Contact.css';
import mail_icon from '../../assets/mail_icon.png';
import location_icon from '../../assets/location_icon.png';
import linkedin_icon from '../../assets/linkedin_icon.png';
import github_icon from '../../assets/github_icon.png';
import x_icon from '../../assets/x_icon.png';

function Contact() {
    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get in Touch</h1>
            </div>

            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Whether you have a question, an opportunity, or just want to say hi — I’m all ears. Let’s build something great together.</p>

                    <div className="contact-details">

                    
                        <div className="contact-detail">
                            <img src={mail_icon} alt="mail" />
                            <p>vipinbhati418@gmail.com</p>
                            <a
                                className="contact-button"
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=vipinbhati418@gmail.com&su=Let%27s%20Connect&body=Hi%20Vipin,%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Mail
                            </a>
                        </div>

                        
                        <div className="contact-detail">
                            <img src={linkedin_icon} alt="linkedin" />
                            <p>LinkedIn</p>
                            <a
                                className="contact-button"
                                href="https://www.linkedin.com/in/vipin-bhati-955a98y"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Connect
                            </a>
                        </div>


                        <div className="contact-detail">
                            <img src={github_icon} alt="github" />
                            <p>GitHub</p>
                            <a
                                className="contact-button"
                                href="https://github.com/Vipinbhati28"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                SEE
                            </a>
                        </div>


                        <div className="contact-detail">
                            <img src={x_icon} alt="x" />
                            <p>X (Twitter)</p>
                            <a
                                className="contact-button"
                                href="https://x.com/vipin_bhatii"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                OPEN
                            </a>
                        </div>

                        
                        <div className="contact-detail">
                            <img src={location_icon} alt="locate" />
                            <p>Rewari, Haryana(🇮🇳)</p>
                            <a
                                className="contact-button"
                                href="https://www.google.com/maps/place/Rewari,+Haryana/@28.217915,76.2399522,98225m/data=!3m2!1e3!4b1!4m6!3m5!1s0x390d50719ae37551:0x316a8e6965b25da1!8m2!3d28.2828311!4d76.5488232!16zL20vMDdsXzFo?entry=ttu&g_ep=EgoyMDI1MDQwNi4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Map
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;