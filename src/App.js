import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import MobileView from "./components/MobileView";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import NextSteps from "./components/NextSteps";


function App(){
    return (
        <div>
            <header>
                <Navigation />
                <Banner />
            </header>

            <main>
                <section id="about">
                    <About />
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="projects">
                    <Projects />
                    <MobileView />
                    <Certificates />
                </section>
                <section>
                    <NextSteps />
                </section>
                <footer id="contact">
                    <Contact />
                </footer>
            </main>
        </div>
    )
}

export default App;