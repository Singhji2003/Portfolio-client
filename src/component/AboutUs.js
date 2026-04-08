const AboutUs = () => {
  return (
    <>
      <div id="main"></div>
      <section id="about" className="about-me">
        <h2 className="about-heading">
          About <span>Me</span>
        </h2>
        <div className="profile-image">
          <img src={require("./Image/arpanimg.jpeg")} alt="" />
          <span className="circle"></span>
        </div>
        <div className="about-content">
          <h3>Full Stack Developer !</h3>
          <p>
          I’m a Full Stack Web Developer at Infiheal, building modern,
          user-focused web solutions using ReactJS, AngularJS, and Tailwind CSS.
          Alongside my full-time role, I’ve completed multiple freelancing
          projects in WordPress and the MERN stack, strengthening both my
          frontend and backend expertise. I enjoy solving real-world problems
          and continuously improving my skills in fast-paced development
          environments. 🚀</p>
        </div>
      </section>
    </>
  );
};
export default AboutUs;
