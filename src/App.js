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
    // const startingRef = useRef(null);
    // const [showNabar, setShowNavbar] = useState(false);
    // useEffect(() => {
    //     const observer = new IntersectionObserver(([entry]) => {
    //     if(entry.isIntersecting){
    //         // console.log("hey it is visible");
    //         setShowNavbar(true);
    //         console.log(showNabar);
    //     }else{
    //         //console.log("no it is not visible");
    //         setShowNavbar(false);
    //     }
    // }, {
    //     threshold: 0.5,
    // });
    // const target = startingRef.current;
    // if(target) {
    //     observer.observe(target);
    // }

    // return () => {
    //     if (target) {
    //         observer.unobserve(target);
    //     }
    // };
    // }, []);

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