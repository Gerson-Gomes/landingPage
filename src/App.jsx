import { animate, motion, useInView } from "framer-motion";
import github from "./assets/icons8-github-50.svg";
import linkedin from "./assets/icons8-linkedin-50.svg";
import instagram from "./assets/icons8-instagram-50.svg";
import './App.css';
import { useRef, useState } from "react";

function App() {
    const projectItemRef = useRef(null);
    const isInView = useInView(projectItemRef, { once: true });

    return (
        <>
            <section className="App">
                <section className="profile">
                    <div className="profile-description">
                        <motion.p
                            id="ola"
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Olá
                        </motion.p>
                        <motion.div
                            className="ola-secundario"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            bem vindo(a) ao meu perfil
                        </motion.div>
                        <p className="profile-description">Descrição</p>
                    </div>
                    <div className="socials">
                        <img src={github} alt="Github Logo" />
                        <img src={linkedin} alt="linkedin" />
                        <img src={instagram} alt="Instagram" />
                    </div>
                    <motion.div className="dark-mode"></motion.div>
                </section>
                <section>
                    <div className="image">
                        <motion.div
                            className="personal-photo"
                            initial={{ opacity: 0, x: 100, scale: 1 }}
                            animate={{ opacity: 1, x: 25, scale: 1.6 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        ></motion.div>
                        <motion.div
                            className="second-photo"
                            initial={{ opacity: 0, x: 100, y: 100, scale: 1 }}
                            animate={{ opacity: 1, x: 25, y: 126, scale: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        ></motion.div>
                    </div>
                </section>
            </section>
            <section className="projects-container">
                <motion.div
                    className="projects"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                >
                    <motion.div
                        className="arrow-down"
                        animate={isInView ? { rotate: 360, opacity: 0 } : { rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        &darr;
                    </motion.div>
                    <motion.ul
                        className="projects-ul"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.3
                                }
                            }
                        }}
                    >
                        <motion.li className="project-item" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} id="item-1">
                            <div className="project-item-image"></div>
                            <div className="project-item-content">
                                <p>Burger-React é um template de um website para restaurantes e outros serviços. O template usa tecnologias de frontend (React) e uma conexão com banco de dados através de uma API REST.</p>
                                <p>Esse projeto mostra um pouco da minha proficiencia em desenvolvimento Web Fullstack</p>
                                <p>Stack usada: <b>Java/Spring, React/Vite, PostgreSQL</b></p>
                            </div>
                        </motion.li>
                        <motion.li className="project-item" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                            <div className="project-item-image"></div>
                            <motion.div
                                className="project-item-content"
                                ref={projectItemRef}
                            >
                                <p>+PraTi-Forum é um projeto de um forum, usado como trabalho de conclusão do bootcamp de desenvolvimento Fullstack da +PraTi.</p>
                                <p>O fórum ultiliza uma api em Spring Boot, que conecta o banco de dados, de posts e usuarios, a uma roupagem elegante e responsiva com React. Os usuarios são autenticados com OAuth 2.0 e criptografia de dados.</p>
                                <p>Stack usada: <b>Java/Spring, React/Vite, PostgreSQL</b></p>
                            </motion.div>
                        </motion.li>
                        <motion.li className="project-item" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                            <div className="project-item-image"></div>
                            <div className="project-item-content"></div>
                        </motion.li>
                    </motion.ul>
                </motion.div>
            </section>
        </>
    );
}

export default App;
