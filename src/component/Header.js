import { useEffect } from "react";

const Header = ()=>{
    useEffect(()=>{
        const navbar = document.getElementById('navbar');
document.addEventListener('scroll', ()=>{
    if(window.scrollY>100){
        navbar.classList.add('changebg')
    }
    else{
       navbar.classList.remove('changebg')

    }
},[])
    })
    const showNav = ()=>{
        document.querySelector('ul').style.left = '0';
    }
    const hideNav  =()=>{
        document.querySelector('ul').style.left = '45rem';
    }
    return(
         <header className="header" id="navbar">
        <div className="logo">
            <h1>Arpan.</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#home" onClick={hideNav} >Home</a></li>
                <li><a href="#main" onClick={hideNav}>About</a></li>
                <li><a href="#skill"onClick={hideNav} >Skills</a></li>
                <li><a href="#project"onClick={hideNav} >Projects</a></li>
                <li><a href="#contact" onClick={hideNav}>Contact</a></li>
            </ul>
            <div class="navresponsive">
                <i id="show" className="fa-solid fa-bars" onClick={()=>{
                     document.querySelector('ul').style.left = '0';
                     document.getElementById('show').style.display = 'none'
                     document.getElementById('hide').style.display = 'block'
                }}></i>
                <i id="hide" className="fa-solid fa-xmark" onClick={()=>{
                      document.querySelector('ul').style.left = '45rem';
                      document.getElementById('show').style.display = 'block'
                      document.getElementById('hide').style.display = 'none'
                }}></i>
            </div>
        </nav>
    </header>
    )
}
export default Header;