import { useRef } from "react";
import projects from "../projectsData";


function Projects(){
    return (
        <div className="projects-container">
            <h2>My Projects:</h2>
            <div  className="work">
                {projects.map((project) => (<Project project={project} key = {project.id}/>))}
            </div>
        </div>
    )
}

function Project({project}){
    return (
        <div className="project-card">
           <img src={project.image} alt="image" className="work-images"/>
           <video  autoPlay loop muted playsInline  className="work-vedios" >
                <source src={project.vedio}  type="video/mp4"></source>
           </video>
            <h3 className="title">{project.title}</h3>
            <a href={project.githubLink} className="link" alt={project.title}><i class="fa-solid fa-link link-icon"></i> Try It Out</a>

           <div className="overlay">
                {/* <h3>{project.title}</h3> */}
                <p>{project.description}</p>
                <div className="techStack">{project.techStack.map((skill) => <Skill key={skill} skill={skill}/>)}</div>
           </div>
        </div>
    )
}

function Skill({skill}){
    return (
        <div className="tools">
            <span>{skill}</span>
        </div>
    )
}

export default Projects;