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
import projectpic from "../assets/images/Project Picture.png"
import linkedin from "../assets/images/linkedin.svg"
import github2 from "../assets/images/github-2.svg"
import codepen from "../assets/images/codepen.svg"
import email from "../assets/images/email.svg"

const HeroBanner = () => {
  return (
    <>
        <section className='hero'>
            <p>Hello, I'm<span> Diane</span>!</p>
            <h1>Web Developer</h1>
            <p>Building something out of <span>ideas and innovation</span> by transforming it <br /> into a working <span>responsive websites</span></p>
            <div className="cta">
                <a href="#resume"><button>Resume</button></a>
                <a href="#contact"><button>Contact</button></a>
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
    // Projects Data 
    const projectCard = [
        {
            title: 'Project Title',
            desc: 'Project description about the tasks or roles for this  project from start to finish. Project description about the tasks or roles for this  project from start to finish.  Project description about the tasks or roles for this  project from start to finish. Project description about the tasks or roles for this  project from start to finish.  ',
            badge: ["HTML", "CSS", "JavaScript"],
            img: projectpic,
            demo: '#link',
            code: '#link',
        },
        {
            title: 'Project Title',
            desc: 'Project description about the tasks or roles for this  project from start to finish. Project description about the tasks or roles for this  project from start to finish.  Project description about the tasks or roles for this  project from start to finish. Project description about the tasks or roles for this  project from start to finish.  ',
            badge: ["React", "CSS"],
            img: projectpic,
            demo: '#link',
            code: '#link',
        },
        {
            title: 'Project Title',
            desc: 'Project description about the tasks or roles for this  project from start to finish. Project description about the tasks or roles for this  project from start to finish.  Project description about the tasks or roles for this  project from start to finish. Project description about the tasks or roles for this  project from start to finish.  ',
            badge: ["HTML", "CSS", "JavaScript"],
            img: projectpic,
            demo: '#link',
            code: '#link',
        },    
    ];
    
    return (
      <>
        <section className='projects'>
            <hr />
            <h2>Projects</h2>
            <div className='projectSection'>
                <div>
                <div class="custom-checkbox">
                    <input id="status" 
                            type="checkbox" 
                            name="status" />
                    <label for="status">
                        <div class="status-switch"
                            data-unchecked="Web Development"
                            data-checked="UI/UX">
                        </div>
                    </label>
                    </div>
                </div>

                <div className='projectContainer'>
                    {projectCard.map((el) => 
                        <div className='projectEntry'>
                            <div className='projectPicture profile'>
                                <img src={el.img} alt='project screenshot'></img>
                            </div>

                             <div className='projectDetails'>
                                <h2>{el.title}</h2>
                                <p>{el.desc}</p>
                                <div className='badgeContainer'>
                                    {el.badge.map((badge,indx) => 
                                        <div className='badge' key={indx}>{badge}</div>
                                    )}
                                </div>

                                <div className="projectBtn">
                                    <a href="#demo"><button>Demo</button></a>
                                    <a href="#code"><button>Code</button></a>
                                </div>
                             </div>

                        </div>
                    )}
                </div>
            </div>
        </section>
      </>
    )
}

const Contact = () => {
    return (
      <>
        <section className='contact'>
            <hr />
            <h2>Contact</h2>

            <div className='contactContainer'>
                <div className='contactContent'>
                    <h3>Let's Connect!</h3>
                    <div className='connect'>
                        <p>Email Address: <a href="mailto:emailaddress@domain.com">emailaddress@domain.com</a></p>
                        <p>Contact Number: <a href="tel:+639123456789">+639123456789</a></p>
                    </div>
                    <div className='socialMedia'>
                        <a href='#linkedin' className='icons'>
                            <img src={linkedin} alt='linkedin logo'></img>
                        </a>
                        <a href='#github' className='icons'>
                            <img src={github2} alt='github logo'></img>
                        </a>
                        <a href='#icons' className='icons'>
                            <img src={codepen} alt='codepen logo'></img>
                        </a>
                        <a href='mailto:emailaddress@domain.com' className='icons'>
                            <img src={email} alt='email logo'></img>
                        </a>
                    </div>
                </div>

                <div className='contactContent'>
                    <h3>Get in touch with me!</h3>
                    
                    <form>
                        <div className='firstRow'>
                            <div className='form sameRow'>
                                <label>Name</label>
                                <input
                                type="text"
                                name="name"
                                placeholder='Full Name'
                                />
                            </div>
                            <div className='form sameRow'>
                                <label>Email</label>
                                <input
                                type="email"
                                name="email"
                                placeholder='Email Address'
                                />
                            </div>                     
                        </div>

                        <div className='form fullRow'>
                                <label>Subject</label>
                                <input
                                type="text"
                                name="subject"
                                placeholder='Subject'
                                />
                        </div>   

                        <div className='form fullRow'>
                                <label>Message</label>
                                <textarea id="message" name="message" rows="10" cols="92" placeholder='Message'></textarea>
                        </div>   

                        <div className='submit'>
                            <a href="#submit"><button type="submit">Submit</button></a>
                        </div>
                        </form>
                </div>
            </div>

        </section>
      </>
    )
}

const Footer = () => {
    return (
      <>
        <section className='footer'>
            <p>© 2023 Diane Besmonte All Rights Reserved.</p>
        </section>
   
      </>
    )
}

export {HeroBanner, About, Skills, Projects, Contact, Footer};