function Contact(){
    return (
        <div className="contact">
            <h2>Contact: </h2>
            <div className="links">
                <div className="media">
                    <i class="fa-solid fa-envelope contact-icon"></i>
                    <a href="mailto:meghanakotha105@gmail.com" target="_blank" rel="noopener noreferrer">
                        <p className="label">Gmail</p>
                    </a>
                </div>
                <div className="media">
                    <i class="fa-brands fa-linkedin contact-icon"></i> 
                    <a href="https://www.linkedin.com/in/kotha-meghana510" target="_blank" rel="noopener noreferrer">
                        <p className="label">LinkedIn</p>
                    </a>
                </div>
                <div className="media">
                    <i class="fab fa-github contact-icon"></i>
                    <a href="https://github.com/kothaMeghana510" target="_blank" rel="noopener noreferrer">
                        <p className="label">Github</p>
                    </a>
                </div>
                <div className="media">
                    <i class="fa-solid fa-file contact-icon"></i>
                    <a href={`${process.env.PUBLIC_URL}/Kotha-Meghana-Frontend-Developer-Resume.pdf`}  target="_blank" rel="noopener noreferrer">
                        <p className="label">View My Resume</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;