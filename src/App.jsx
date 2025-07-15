import { animate, motion, useInView } from "framer-motion";
import github from "./assets/icons8-github-50.svg";
import linkedin from "./assets/icons8-linkedin-50.svg";
import instagram from "./assets/icons8-instagram-50.svg";
import './App.css';
import { useEffect, useRef, useState } from "react";
import SunIcon  from "./assets/sun-regular.svg?react";
import MoonIcon from "./assets/moon-solid.svg?react";
import photo from "./assets/foto.jpg"

function App() {
    const projectItemRef = useRef(null);
    const isInView = useInView(projectItemRef, { once: true });
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
        localStorage.setItem('dark-mode', darkMode)
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    }

    useEffect(() => {
        const saved = localStorage.getItem('dark-mode') === true;
        setDarkMode(saved)
    }, []);

    

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
                        <a href="https://github.com/Gerson-Gomes"><img src={github} alt="Github Logo" /></a>
                        <a href="https://www.linkedin.com/in/gersoncgomes/"><img src={linkedin} alt="linkedin" /></a>
                        <a href="https://www.instagram.com/gersoncastrogomes/"><img src={instagram} alt="Instagram" /></a>
                    </div>
                    <motion.div className="dark-mode-button"> <button onClick={toggleDarkMode}>{darkMode ? <SunIcon id="sunIcon"/> : <MoonIcon/>}</button></motion.div>
                </section>
                <section>
                    <div className="image">
                        <motion.div
                            className="personal-photo"
                            initial={{ opacity: 0, x: 100, scale: 1 }}
                            animate={{ opacity: 1, x: 25, scale: 1.6 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        ><img className="personal-photo-image" src={photo}/></motion.div>
                        <motion.div
                            className="second-photo"
                            initial={{ opacity: 0, x: 100, y: 100, scale: 1 }}
                            animate={{ opacity: 1, x: 25, y: 126, scale: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        ><p id="nome">Gerson de Castro Gomes</p></motion.div>
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
                            <div className="project-item-image" id="react-image"></div>
                            <div className="project-item-content">
                                <p>Burger-React é um template de um website para restaurantes e outros serviços. O template usa tecnologias de frontend (React) e uma conexão com banco de dados através de uma API REST.</p>
                                <p>Esse projeto mostra um pouco da minha proficiencia em desenvolvimento Web Fullstack</p>
                                <p>Stack usada: <b>Java/Spring, React/Vite, PostgreSQL</b></p>
                            </div>
                        </motion.li>
                        <motion.li className="project-item" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                            <div className="project-item-image" id="forum-image"></div>
                            <motion.div
                                className="project-item-content"
                                ref={projectItemRef}
                            >
                                <p>+PraTi-Forum é um projeto de um forum, usado como trabalho de conclusão do bootcamp de desenvolvimento Fullstack da +PraTi.</p>
                                <p>O fórum ultiliza uma api em Spring Boot, que conecta o banco de dados, de posts e usuarios, a uma roupagem elegante e responsiva com React. Os usuarios são autenticados com OAuth 2.0 e criptografia de dados.</p>
                                <p>Stack usada: <b>Java/Spring, React/Vite, PostgreSQL</b></p>
                            </motion.div>
                        </motion.li>
                        {/* Template de item */}
                        {/*<motion.li className="project-item" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                            <div className="project-item-image"></div>
                            <div className="project-item-content"></div>
                        </motion.li>*/}

                    </motion.ul>
                </motion.div>
            </section>
        </>
    );
}

export default App;
