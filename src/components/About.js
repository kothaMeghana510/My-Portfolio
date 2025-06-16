import about from "../assets/about.png";

function About(){
    
    return (
        <div className="about">
            <div className="details">
                <h2>About Me:</h2>
                <b><p>I’m Meghana — a frontend developer driven by a simple idea: every expert once started as a beginner, and this is my beginning.</p></b>
                <p>I graduated with a B.Tech in 2024 and soon after, immersed myself in the world of web development. Over time, I’ve built a strong foundation in HTML, CSS, JavaScript, and React by creating hands-on projects that push me to think, build, and grow.</p>
                <p>Now, I’m ready to take the next step — applying my skills in real-world environments, learning from experienced teams, and contributing to meaningful projects. I’m passionate about creating user-friendly, responsive, and visually engaging interfaces that not only function well but feel intuitive to use.</p>
                <b><p>This portfolio is more than just a collection of my work — it’s a glimpse into my journey, my dedication to growth, and the path I’m excited to follow next.</p></b>
            </div>
            <div className="image-container">
                <img src={about} alt="image" className="about-image"/>
            </div>
        </div>
    )
}
export default About;