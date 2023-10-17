import "../assets/css/navbar.css"
import logo from "../assets/images/logo.svg"

const Navbar = () => {
  return (
    <>
        <div className='navContainer'>
            <a href="#"><img src={logo} alt='portfolio logo'></img></a>
            <div className='mainMenu'>
                <ul className='menu'>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export {Navbar};
