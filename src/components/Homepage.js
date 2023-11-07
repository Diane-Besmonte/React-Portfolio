import "../assets/css/page.css"
import { useState } from 'react'
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
import linkedin from "../assets/images/linkedin.svg"
import github2 from "../assets/images/github-2.svg"
import codepen from "../assets/images/codepen.svg"
import email from "../assets/images/email.svg"
import projectpic from "../assets/images/Project Picture.png"
import MoBee from "../assets/images/MoBee.png"
import FindThatBiz from "../assets/images/FindThatBiz.png"
import MeantAlly from "../assets/images/MeantAlly.png"


const Homepage = () => {
    
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

    // Projects Data 
    const webProjectCard = [
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

    const uiuxProjectCard = [
        {
            title: 'MoBee App',
            desc: 'A mobile application for viewing movie trailers and booking tickets online was created to save users time and effort when purchasing movie tickets.',
            badge: ["Figma"],
            img: MoBee,
            project: 'https://305780da-6f98-4e59-8e80-63a1317b1693.filesusr.com/ugd/8d891c_a655b6b7c7994d7ca9116d975891d2f1.pdf',
            demo: 'https://www.figma.com/proto/oPoW81Do5M9BbQeF4ASYjv/MoBee-App---Google-UX-Coursera-Project?type=design&node-id=239-5033&scaling=scale-down&page-id=81%3A93&starting-point-node-id=239%3A5033',
        },
        {
            title: 'FindThatBiz',
            desc: 'A responsive website design project focused on small business directories. Our primary goal is to help small business owners strengthen their online presence and networks, to promote their business, and to help customers grow online using the multiple platforms available. Our goal is to help users reduce the time and effort spent searching for business information.',
            badge: ["Figma"],
            img: FindThatBiz,
            project: 'https://305780da-6f98-4e59-8e80-63a1317b1693.filesusr.com/ugd/8d891c_03aa5b02747040eb9eccb41205cde8cc.pdf',
            demo: 'https://www.figma.com/proto/UYaKPSPNPkjy0JT30otJoS/FindThatBiz---Google-UX-Coursera-Project-2?type=design&node-id=125-6408&scaling=min-zoom&page-id=36%3A597&starting-point-node-id=125%3A6408&show-proto-sidebar=1',
        },
        {
            title: 'MeantAlly',
            desc: 'A cross-platform initiative that focuses on providing users with various features that allow them to view various mental health resources and assist them in developing and enhancing their mental health. It also has capabilities that allow users to have various experiences with a single application. In addition, a responsive website was also built.',
            badge: ["Figma"],
            img: MeantAlly,
            project: 'https://305780da-6f98-4e59-8e80-63a1317b1693.filesusr.com/ugd/8d891c_1150410ed97440a49a38a4c7e8fefc7c.pdf',
            demo: 'https://www.figma.com/proto/UsNrMT2xtJIE78y7KogVfP/MeantAlly--Google-UX-Coursera-Project-3-Hi-Fi?type=design&node-id=1-1413&t=jhXVdij9WQuCnBXU-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A1413&mode=design',
        },    
    ];
    
    // For Projects Section
    const [isChecked, setIsChecked] = useState(false);

    const webDevelopmentContent = (
      <div>
        <div className='projectContainer'>
            {webProjectCard.map((el) => 
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
                                <a href={el.project} target='_blank' rel="noopener noreferrer"><button>Demo</button></a>
                                <a href={el.demo} target='_blank' rel="noopener noreferrer"><button>Code</button></a>
                            </div>
                        </div>

                </div>
            )}
        </div>
      </div>
    );
  
    const uiUxContent = (
      <div>
            {uiuxProjectCard.map((el) => 
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
                                <a href={el.project} target='_blank' rel="noopener noreferrer"><button>Project</button></a>
                                <a href={el.demo} target='_blank' rel="noopener noreferrer"><button>Demo</button></a>
                            </div>
                        </div>

                </div>
            )}
      </div>
    );

  return (
    <>
        <section className='hero'>
            <p>Hello, I'm<span> Diane</span>!</p>
            <h1>Web Developer</h1>
            <p>Building something out of <span>ideas and innovation</span> by transforming it <br /> into a working <span>responsive websites.</span></p>
            <div className="cta">
                <a href="#resume"><button>Resume</button></a>
                <a href="#contact"><button>Contact</button></a>
            </div>
        </section>

        {/* ************************************************ */}
        <section id='about'>
            <hr />
            <h2>About</h2>
            <div className='aboutContent'>
                <div className='introduction'>
                    <p>I'm an aspiring Web Developer with experience with some tech tools knowledge and currently preparing to have my big break in joining the tech industry, As I work on myself to upskill for my own personal growth, I found myself diving into the world of UI and UX that leads me to take the Google Coursera UX Program. With that, I was able to create my project and this portfolio along with the ton of knowledge I gained and the best practices I learned from the whole program and courses.</p>
                </div>
                <div className='profile'>
                    <img src={profile} alt='profile vector artwork'></img>
                </div>
            </div>
        </section>

        <section id='skills'>
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

        <section id='projects'>
            <hr />
            <h2>Projects</h2>
            <div className='projectSection'>
                <div>
                <div class="custom-checkbox">
                    <input id="status" 
                            type="checkbox" 
                            checked={isChecked}
                            name="status" 
                            onChange={() => setIsChecked(!isChecked)}/>
                    <label for="status">
                        <div className="statusSwitch"
                            data-checked="Web Development"
                            data-unchecked="UI/UX">
                        </div>
                    </label>
                    </div>
                </div>

                <div className='projectsContent'>
                    {isChecked ? webDevelopmentContent : uiUxContent}
                </div>

                
                {/* <div className='projectContainer'>
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
                </div> */}
            </div>
        </section>


        <section id='contact'>
            <hr />
            <h2>Contact</h2>

            <div className='contactContainer'>
                <div className='contactContent'>
                    <h3>Let's Connect!</h3>
                    <div className='connect'>
                        <p>Email Address: <a href="mailto:dianecoding@gmail.com">dianecoding@gmail.com</a></p>
                        <p>Contact Number: <a href="tel:+639123456789">+639123456789</a></p>
                    </div>
                    <div className='socialMedia'>
                        <a href='https://www.linkedin.com/in/diane-besmonte' className='icons' target='_blank' rel="noopener noreferrer">
                            <img src={linkedin} alt='linkedin logo'></img>
                        </a>
                        <a href='https://github.com/Diane-Besmonte' className='icons' target='_blank' rel="noopener noreferrer">
                            <img src={github2} alt='github logo'></img>
                        </a>
                        <a href='https://codepen.io/diane-besmonte' className='icons' target='_blank' rel="noopener noreferrer">
                            <img src={codepen} alt='codepen logo'></img>
                        </a>
                        <a href='mailto:dianecoding@gmail.com' className='icons'>
                            <img src={email} alt='email logo'></img>
                        </a>
                    </div>
                </div>

                <div className='contactContent'>
                    <h3>Get in touch with me!</h3>
                    
                    <form action="https://getform.io/f/b2342af1-c5a2-4dc2-a775-940643f06fc6" method="POST">
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

        <section className='footer'>
            <p>© 2023 Diane Besmonte All Rights Reserved.</p>
        </section>
        {/* ************************************************ */}
    </>
  )
}

export default Homepage;

