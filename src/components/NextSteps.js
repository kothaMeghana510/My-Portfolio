import { useState } from "react";

const Goals = [
    {
        title: 'Career Goal',
        description: 'Actively looking for a frontend developer role or internship to apply and strengthen my skills in a real-world environment. I’m focused on contributing meaningfully to a team while continuing to grow as a developer.'
    },

   {
    title: ' Begin Backend Development with Node.js',
    description: `I want to take my first steps into backend development using Node.js and Express to understand how server-side logic, APIs, and databases work together with frontend technologies.`
   },

   {
    title: 'Build Real-World Projects',
    description: 'I aim to create full-stack projects that reflect real-world use cases, integrating both frontend and backend skills to solve practical problems and enhance my portfolio.'
   }
]

function NextSteps() {
    return (
        <div className="next">
            <h2>My Goals:</h2>
            <div className="goals-container">
                {Goals.map((goal) => <Goal goal={goal} key={goal.title}  />)}
            </div>
        </div>
    )
}

function Goal({goal}){
    const [showinfo, setShowInfo] = useState(false);
    function handleShowInfo(){
        setShowInfo(!showinfo);
    }
    return (
        <div className="goals">
            <div className="contain" onClick={() => handleShowInfo()}>
                <h3 className="step">{goal.title}</h3>
                <button onClick={() => handleShowInfo()} className="down-arrow"><i className={`fa-solid ${showinfo ? "fa-chevron-up" : "fa-chevron-down"}`}></i></button>
            </div>
            <div className={showinfo  ? "show" : "hide"}>
                <p className="para">{goal.description}</p>
            </div>
        </div>
    )
}

export default NextSteps;