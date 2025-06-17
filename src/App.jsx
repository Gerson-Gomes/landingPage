import {motion} from "framer-motion";
import github from "./assets/icons8-github-50.svg"
import linkedin from "./assets/icons8-linkedin-50.svg"
import instagram from "./assets/icons8-instagram-50.svg"
import './App.css'

function App() {


    return (
        <>
            <section className="App">
                <section className={`profile `}>
                    <div className="profile-description">
                        <motion.p
                            id={"ola"}
                            initial={{opacity:0,y:-100}}
                            animate={{opacity:1,y:0}}
                            transition={{duration: 1}}
                        >
                            Olá
                        </motion.p>
                        <motion.div
                            className={"ola-secundario"}
                            initial={{opacity:0,x:-100}}
                            animate={{opacity:1,x:0}}
                            transition={{duration:1}}

                        >
                            bem vindo(a) ao meu perfil
                        </motion.div>
                        <p className={"profile-description"}>Descrição</p>
                    </div>
                    <div className={"socials"}>
                        <img src={github} alt="Github Logo"/>
                        <img src={linkedin} alt={"linkedin"}/>
                        <img src={instagram} alt="Instagram"/>
                    </div>
                    <motion.div
                        className={"dark-mode"}
                    >

                    </motion.div>
                </section>
                <section>
                    <div className={"image"}>
                        <motion.div
                            className={"personal-photo"}
                            initial={{opacity:0,x:100, scale:1}}
                            animate={{opacity:1,x:25, scale:1.6}}
                            transition={{duration:1, delay:0.6}}
                        >

                        </motion.div>
                        <motion.div
                            className={"second-photo"}
                            initial={{opacity:0,x:100,y:100, scale:1}}
                            animate={{opacity:1,x:25,y:126, scale:1}}
                            transition={{duration:1, delay:0.4}}
                        >

                        </motion.div>

                    </div>
                </section>
            </section>
            <section className={`projects-container`}>
                <motion.div
                    className={"projects"}

                >
                    <motion.div
                        className={"arrow-down"}
                    >
                        &darr;

                    </motion.div>
                    <motion.ul className="projects-ul">
                        <motion.li className={"project-item"}>
                            <div className={"project-item-image"}>

                            </div>
                            <div className={"project-item-content"}>

                            </div>
                        </motion.li>
                        <motion.li className={"project-item"}>

                            <div className={"project-item-image"}>

                            </div>
                            <div className={"project-item-content"}>

                            </div>
                        </motion.li>
                        <motion.li className={"project-item"}>
                            <div className={"project-item-image"}>

                            </div>
                            <div className={"project-item-content"}>

                            </div>
                        </motion.li>
                    </motion.ul>

                </motion.div>
            </section>

        </>
    )
}

export default App
