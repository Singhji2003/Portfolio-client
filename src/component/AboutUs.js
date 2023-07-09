const AboutUs = ()=>{
    return(
        <>
         <div id="main"></div>
    <section id="about" className="about-me">
        <h2 className="about-heading">About <span>Me</span></h2>
        <div className="profile-image">
            <img src={require("./Image/arpanimg.jpeg")} alt=""/>
            <span className="circle"></span>
        </div>
        <div className="about-content">
            <h3>Full Stack Developer !</h3>
            <p>Hii.. There I am Arpan Singh. I am from Bihar but for study Purpose I live in Gurugram Haryana. I am Pursuing Bvoc Software Development from Ramanujan collge Delhi University. And I am in My third year. I learn many things through online and also imply it in real life using Projects. I did many projects on My personal basis. Which shows my skills.  </p>
        </div>
    </section>
        </>
    )
}
export default AboutUs;