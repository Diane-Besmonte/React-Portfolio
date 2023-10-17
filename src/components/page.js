import "../assets/css/page.css"
import profile from "../assets/images/profile.png"
import html from "../assets/images/html.svg"
import css from "../assets/images/css.svg"
import js from "../assets/images/JS.svg"
import figma from "../assets/images/figmavector.svg"
import wordpress from "../assets/images/wordpress.svg"
import reactjs from "../assets/images/react.svg"
import nodejs from "../assets/images/node-js.svg"
import mongodb from "../assets/images/mongodb.svg"
import github from "../assets/images/github.svg"
import vscode from "../assets/images/vs-code.svg"

const HeroBanner = () => {
  return (
    <>
        <section className='hero'>
            <p>Hello, I'm<span> Diane</span>!</p>
            <h1>Web Developer</h1>
            <p>Building something out of <span>ideas and innovation</span> by transforming it <br /> into a working <span>responsive websites</span></p>
            <div className="cta">
                <button>Resume</button>
                <button>Contact</button>
            </div>
        </section>
        

    </>
  )
}

const About = () => {
    return (
      <>
        <section className='about'>
            <hr />
            <h2>About</h2>
            <div className='aboutContent'>
                <div className='introduction'>
                    <p>Lorem ipsum dolor sit amet consectetur. Lectus ac elementum euismod nec congue pharetra id ultrices quam. In egestas scelerisque nulla viverra vitae iaculis. Faucibus pellentesque sapien donec nulla iaculis fringilla aliquet sollicitudin. Ac consequat condimentum ut aliquet congue molestie ac. Tincidunt tristique libero imperdiet quam tempor sit magna vitae.</p>
                </div>
                <div className='profile'>
                    <img src={profile} alt='profile vector artwork'></img>
                </div>
            </div>
        </section>
   
      </>
    )
}



const Skills = () => {
    const tools = [
        {
            title: 'HTML',
            img: html,
        },
        {
            title: 'CSS',
            img: css,
        },
        {
            title: 'JavaScript',
            img: js,
        },
        {
            title: 'Figma',
            img: figma,
        },
        {
            title: 'WordPress',
            img: wordpress,
        },
        {
            title: 'React JS',
            img: reactjs,
        },
        {
            title: 'Node JS',
            img: nodejs,
        },
        {
            title: 'MongoDB',
            img: mongodb,
        },
        {
            title: 'Github',
            img: github,
        },
        {
            title: 'VSCode',
            img: vscode,
        },
    ];

    return (
      <>
        <section className='skills'>
            <hr />
            <h2>Skills</h2>
            <div className='techLogos'>
                {tools.map((el) => 
                    <div className='techCard'>
                        <img src={el.img} alt='logo'></img>
                        <p>{el.title}</p>
                    </div>
                )}
            </div>
        </section>
      </>
    )
}

const Projects = () => {
    return (
      <>
            
      </>
    )
}

const Contact = () => {
    return (
      <>
            
      </>
    )
}

export {HeroBanner, About, Skills, Projects, Contact};