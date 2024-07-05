import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Importer le fichier CSS de AOS
import AOS from 'aos';
import { ProgressBar } from 'react-bootstrap';

function Skills() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Durée de l'animation en millisecondes
            easing: 'ease-in-out', // Courbe de vitesse de l'animation
            once: true, // Si vrai, l'animation ne se jouera qu'une fois
        });
    }, []);

    return (
        <>
            <section id="skills" className="skills section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Skills</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row skills-content">

                        <div className="col-lg-6">

                            <div className="progress">
                                <span className="skill">HTML <i className="val">100%</i></span>
                                <div className="progress-bar-wrap">
                                    <ProgressBar now={100} />
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">CSS <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <ProgressBar now={90} />
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">JavaScript <i className="val">75%</i></span>
                                <div className="progress-bar-wrap">
                                    <ProgressBar now={75} />
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div className="progress">
                                <span className="skill">PHP <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                    <ProgressBar now={80} />
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">WordPress/CMS <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <ProgressBar now={90} />
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">Photoshop <i className="val">55%</i></span>
                                <div className="progress-bar-wrap">
                                    <ProgressBar now={55} />
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Skills;