import { useEffect, useRef, useState } from "react";
import CertificatesData from "../CertificatesData";

function Certificates(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionRef = useRef(null);
    const intervalRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting){
                intervalRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) => {
                if(prevIndex < CertificatesData.length - 1){
                    return prevIndex + 1;
                }else{
                    clearInterval(intervalRef.current);
                    return prevIndex;
                }
            });
        }, 3000);
        }
    },
        {
                threshold: 0.5,
        })
        const current = sectionRef.current;
        if(current){
            observer.observe(current);
        }

        return () => {
            if(current){
                observer.unobserve(current);
            }
        }

    }, []);

    function handleLeftClick(){
        if(currentIndex >= 1){
            setCurrentIndex((prevIndex) => prevIndex - 1 );
        }
    }

     function handleRightClick(){
        if(currentIndex < CertificatesData.length - 1){
            setCurrentIndex((prevIndex) => prevIndex + 1 );
        }
    }

    return (
        <div className="arrows">
            <button onClick = {() => handleLeftClick(currentIndex)} className="button"><i class="fa-solid fa-arrow-left left-arrow"></i></button>
            <div className="certificate-slider">
                <h2 className="heading">My Achievements: </h2> 
                <div className="slider" ref={sectionRef} style={{ transform: `translateX(-${currentIndex * 100}%)`} }>
                    {CertificatesData.map((work) => <Achievement work={work} key = {work.id}/>)}
                </div>
            </div>
            <button onClick = {() => handleRightClick(currentIndex)} className="button"><i class="fa-solid fa-arrow-right right-arrow"></i></button>

        </div>
    )
}

function Achievement({work}){
    return (
        <div className="credits">
                <img src={work.image} className="certificates-images"/>
        </div>
    )
}

export default Certificates;