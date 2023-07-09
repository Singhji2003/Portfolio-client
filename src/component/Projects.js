const Projects = () => {
    return (
        <>
         <div id="project"></div>
    <section>
        <div className="projects">
            <div className="project-heading">
            <h1>My <span> Projects</span></h1>
        </div>
        <div className="project-items">
            <div className="project-each-item">
                <img src={require("./Image/singh tour.PNG")} alt=""/>
                <h3>Singh Tour</h3>
                <p>The vision of this site is to explore the new things with diffrent point of view. So Here you will find all the details of places and after the registrations you will get also best places details on email and can check on the site also. So feel free we will give the all updates in details. Thak you!!!!</p>
                <div className="projects-links">
                    <a className="icon" href="https://github.com/Singhji2003/singhTour-frontend" target="_singh"><i className="fa-brands fa-github-alt"></i></a>
                    <a className="icon" href="https://singhtour.netlify.app/" target="_singh"><i className="fa-solid fa-arrow-up-right-from-square"> </i></a>
                </div>
            </div>
            <div className="project-each-item">
                <img src={require("./Image/linkedin.PNG")} alt=""/>
                <h3>Linkedin Clone </h3>
                <p>This is simple clone of Linkedin. It is just the front page with responsive to practice the Tailwind css.</p>
                <div className="projects-links">
                    <a className="icon" href="https://github.com/Singhji2003/Linkedin-clone" target="_singh"><i className="fa-brands fa-github-alt"></i></a>
                    <a className="icon" href="https://singhlinkedin.netlify.app/" target="_singh"><i className="fa-solid fa-arrow-up-right-from-square"> </i></a>
                </div>
            </div>
        </div>
        <div className="project-items">
            <div className="project-each-item">
                <img src={require("./Image/phonebook.PNG")} alt=""/>
                <h3>Phonebook</h3>
                <p>The purpose of this site is to save your data on cloud and acces it grom anywhere with the unique email id and password. We will ake sure that your data will be secret for us and never loose it.</p>
                <div className="projects-links">
                    <a className="icon" href="https://github.com/Singhji2003/phonebookbakend" target="_singh"><i className="fa-brands fa-github-alt"></i></a>
                    <a className="icon" href="https://phonebookarpan.netlify.app/" target="_singh"><i className="fa-solid fa-arrow-up-right-from-square"> </i></a>
                </div>
            </div>
            <div className="project-each-item">
                <img src={require("./Image/youtube.PNG")} alt=""/>
                <h3>Youtube  Clone </h3>
                <p>It is something like Youtube. Which fetch the data through Rapid API. It is purly React js . It was just my practice to fetch the data through API and render it through diffrent call.</p>
                <div className="projects-links">
                    <a className="icon" href="https://github.com/Singhji2003/phonebookbakend" target="_singh"><i className="fa-brands fa-github-alt"></i></a>
                    <a className="icon" href="https://singhyoutube.netlify.app/" target="_singh"><i className="fa-solid fa-arrow-up-right-from-square"> </i></a>
                </div>
            </div>
        </div>
        <div className="project-items">
            <div className="project-each-item">
                <img src={require("./Image/calculator.PNG")} alt=""/>
                <h3>Calculator</h3>
                <p>This is a simple calculator where you can perfrom any calculations and also it will automatically save in backend to see what you have calculated.</p>
                <div className="projects-links">
                    <a className="icon" href="https://github.com/Singhji2003/phonebookbakend" target="_singh"><i className="fa-brands fa-github-alt"></i></a>
                    <a className="icon" href="https://singhjicalculator.netlify.app/" target="_singh"><i className="fa-solid fa-arrow-up-right-from-square"> </i></a>
                </div>
            </div>
            <div className="project-each-item">
                <img src={require("./Image/todo.PNG")} alt=""/>
                <h3>Todo App</h3>
                <p>This is Todo App where you can save and deleyte data only. Itr has backend part that's why it is important.</p>
                <div className="projects-links">
                    <a className="icon" href="https://github.com/Singhji2003/ToDo-Application" target="_singh"><i className="fa-brands fa-github-alt"></i></a>
                    <a className="icon" href="https://singhjitodo.netlify.app/" target="_singh"><i className="fa-solid fa-arrow-up-right-from-square"> </i></a>
                </div>
            </div>
        </div>
        </div>
    </section>
        </>
    )
}
export default Projects;