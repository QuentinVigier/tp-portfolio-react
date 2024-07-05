import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Importer le fichier CSS de AOS
import AOS from 'aos';
import TypedText from './TypedText';

const Hero: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Durée de l'animation en millisecondes (1 seconde)
            easing: 'ease-in-out', // Courbe de vitesse de l'animation
        });
    }, []);

    return (
        <>
            <section id="hero" className="d-flex flex-column justify-content-center">
                <div className="container" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="2000">
                    <h1>Brandon Johnson</h1>
                    <p>I'm <TypedText /></p>
                    <div className="social-links">
                        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
