import React, { useEffect } from 'react'
const HomePage = ()=>{
    useEffect(()=>{
        const animateText = document.querySelector('.profession-content')

const textChange = ()=>{
    setTimeout(()=>{
        animateText.textContent = "Full Stack Developer"
    },0)
    setTimeout(()=>{
        animateText.textContent = "Front End Developer"
    },3000)
    setTimeout(()=>{
        animateText.textContent = "Backend Developer"
    },6000)
    setTimeout(()=>{
        animateText.textContent = "Web Designer"
    },9000)
}
textChange();
setInterval(textChange, 12000)
    },[])

    return(
        <section id="home">
        <div className="main-heading">
            <div className="naming-heading">
                <h1>Hi, My Name is <i> Arpan Singh</i></h1>
                <h1>And I am a Passionate</h1>
                <div className="profession">
                    <div className="intro"></div>
                    <i>
                        <div className="profession-content"></div>
                    </i>
                </div>
                <div className="social-media-icons">
                    <a className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a className="icon" href="https://www.linkedin.com/in/arpan-singh-51914a243" target="_singh"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a className="icon" href="https://github.com/Singhji2003" target="_singh"><i className="fa-brands fa-github-alt"></i></a>
                    <a className="icon" href="https://www.instagram.com/arpan_singh_rajput__/?igshid=YmMyMTA2M2Y=" target="_singh"><i className="fa-brands fa-instagram"></i></a>
                </div>
                <div className="resume-button">
                    <a href={require("./Resume.pdf")} download="Resume-Arpan"><button>Downlaod Resume</button></a>
                </div>
            </div>
            <div className="image-heading">
                <img src={require("./Image/arpanimg.jpeg")} alt="" data-aos="flip-right"/>
            </div>
        </div>
    </section>
    )
}
export default HomePage;