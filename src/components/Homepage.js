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
    
    // Web Development Cards
    const webDevelopmentContent = (
      <>
        <div className='w-full mx-auto container'>
            {webProjectCard.map((el) => 
                <div className='flex flex-col lg:flex-row my-24 w-full items-center lg:items-start'>
                    <div className='projectPicture profile order-1'>
                        <img src={el.img} alt='project screenshot'></img>
                    </div>

                    <div className='py-5 px-10 order-2 w-full lg:w-1/2'>
                        <h2 className='text-left text-tertiary md:text-4xl text-2xl py-3'>{el.title}</h2>
                        <p className='text-left text-white text-base lg:text-xl xl:text-2xl font-light'>{el.desc}</p>
                        <div className='text-center w-36 flex'>
                            {el.badge.map((badge,indx) => 
                                <div className='text-tertiary py-1.5 px-6 bg-secondary m-2.5 w-full min-w-min rounded text-xs' key={indx}>{badge}</div>
                            )}
                        </div>

                        <div className="text-center flex w-full justify-center my-5">
                            <a className='text-white' href={el.project} target='_blank' rel="noopener noreferrer"><button className='xl:py-4 md:py-3 sm:py-1 py-2 px-8 md:px-12 text-lg m-2 md:m-5 text-white border-y-2 border-x-2 border-l-0 border-r-0 border-tertiary hover:bg-tertiary'>Demo</button></a>
                            <a className='text-white' href={el.demo} target='_blank' rel="noopener noreferrer"><button className='xl:py-4 md:py-3 sm:py-1 py-2 px-8 md:px-12 text-lg m-2 md:m-5 text-white border-y-2 border-x-2 border-l-0 border-r-0 border-tertiary hover:bg-tertiary'>Code</button></a>
                        </div>
                    </div>

                </div>
            )}
        </div>
      </>
    );
  
    // UI/UX Cards
    const uiUxContent = (
      <>
      <div className='w-full mx-auto container'>
            {uiuxProjectCard.map((el) => 
                <div className='flex flex-col lg:flex-row my-24 w-full items-center lg:items-start'>
                    <div className='projectPicture profile w-1/2 order-1'>
                        <img src={el.img} alt='project screenshot'></img>
                    </div>

                        <div className='py-5 px-10 order-2 w-full lg:w-1/2'>
                            <h2 className='text-left text-tertiary md:text-4xl text-2xl py-3'>{el.title}</h2>
                            <p className='text-left text-white lg:text-xl xl:text-2xl font-light'>{el.desc}</p>
                            <div className='text-center w-36 flex'>
                                {el.badge.map((badge,indx) => 
                                    <div className='text-tertiary py-1.5 px-6 bg-secondary m-2.5 w-full min-w-min rounded text-xs' key={indx}>{badge}</div>
                                )}
                            </div>

                            <div className="text-center flex w-full justify-center my-5">
                                <a className='text-white' href={el.project} target='_blank' rel="noopener noreferrer"><button className='xl:py-4 md:py-3 sm:py-1 py-2 px-8 md:px-12 text-lg m-2 md:m-5 text-white border-y-2 border-x-2 border-l-0 border-r-0 border-tertiary hover:bg-tertiary'>Project</button></a>
                                <a className='text-white' href={el.demo} target='_blank' rel="noopener noreferrer"><button className='xl:py-4 md:py-3 sm:py-1 py-2 px-8 md:px-12 text-lg m-2 md:m-5 text-white border-y-2 border-x-2 border-l-0 border-r-0 border-tertiary hover:bg-tertiary'>Demo</button></a>
                            </div>
                        </div>

                </div>
            )}
      </div>

      </>
    );

  return (
    <>
        {/* Hero Section */}
        <section className='container mx-auto w-full xl:px-20 lg:px-20 md:px-20 px-10 py-0 text-center text-white my-20'>
            <p className='xl:text-4xl lg:text-3xl sm:text-2xl text-xl my-5 font-semibold'>Hello, I'm<span className='text-tertiary'> Diane</span>!</p>
            <h1 className='lg:text-8xl md:text-7xl sm:text-6xl text-6xl my-8 font-bold'>Web Developer</h1>
            <p className='xl:text-4xl lg:text-3xl sm:text-2xl text-xl font-normal lg:leading-10'>Building something out of <span className='text-tertiary'>ideas and innovation</span> by transforming it <br /> into a working <span className='text-tertiary'>responsive websites</span>.</p>
            <div className="flex justify-center md:pt-16 pt-11 pb-11">
                <a href="#resume"><button className='hover:bg-tertiary border-y-2 border-tertiary xl:py-4 md:py-3 sm:py-1 py-2 xl:px-16 md:px-12 sm:px-10 px-10 lg:mx-5 mx-2 md:text-xl text-l'>Resume</button></a>
                <a href="#contact"><button className='hover:bg-tertiary border-y-2 border-tertiary xl:py-4 md:py-3 sm:py-1 py-2 xl:px-16 md:px-12 sm:px-10 px-10 lg:mx-5 mx-2 md:text-xl text-l'>Contact</button></a>
            </div>
        </section>

        {/* About Section */}
        <section id='about' class='container mx-auto w-full xl:px-20 lg:px-20 md:px-20 px-10 py-0 my-20'> 
            <hr className='border-tertiary xl:w-64 md:w-52 sm:w-36 w-32 mx-auto border-2'/>
            <h2 className='text-white lg:text-4xl text-3xl text-center mt-5 font-semibold'>About</h2>
            <div className='flex flex-col md:flex-row w-full mt-16 mx-auto justify-between'>
                <div className='w-full md:w-1/2 order-2 md:order-1'>
                    <p className='text-left text-white'>I'm passionate about becoming a Web Developer and have some know-how about tech tools. Right now, I'm gearing up to step into the tech world. I'm constantly learning and improving myself. Lately, I've been exploring UI and UX—how things look and feel for users. I took a course from Google Coursera on UX, which was a game-changer. It helped me create this portfolio and taught me a lot of great stuff about how to do things right.</p>
                    <br />
                    <p className='text-left text-white'>Beyond UI and UX, I'm on a continual journey to enhance my developer skills. I'm diving deeper into coding languages, refining my understanding of programming concepts, and experimenting with different development frameworks. It's an ongoing process where I'm always looking for new challenges and projects to further improve my abilities. The tech world is vast and always evolving, so I'm committed to staying curious and learning more every day. This drive to keep growing is what fuels my passion for this field.</p>
                </div>
                <div className='w-full md:w-1/3 order-1 md:order-2'>
                    <img className='mx-auto w-10/12 md:w-full pb-10 md:mx-0 md:pb-0 text-center drop-shadow-lg' src={profile} alt='profile vector artwork'></img>
                </div>
            </div>
        </section>

        {/* Skills Section */}
        <section id='skills' class='container mx-auto w-full xl:px-20 lg:px-20 md:px-20 px-10 py-0 my-20'>
            <hr className='border-tertiary xl:w-64 md:w-52 sm:w-36 w-32 mx-auto border-2 mt-40'/>
            <h2 className='text-white lg:text-4xl text-3xl text-center mt-5 font-semibold'>Skills</h2>
            <div className='flex w-full flex-wrap justify-center px-10'>
                {tools.map((el) => 
                    <div className='bg-secondary rounded-2xl text-center w-1/6 max-w-xs min-w-max m-4 p-4 box-border'>
                        <img className='mx-auto w-6/12' src={el.img} alt='logo'></img>
                        <p className='text-sm md:text-base xl:text-lg text-tertiary pt-2'>{el.title}</p>
                    </div>
                )}
            </div>
        </section>
        
        {/* Projects Section */}
        <section id='projects' class='container mx-auto w-full xl:px-20 lg:px-20 md:px-20 px-10 py-0 my-20'>
            <hr className='border-tertiary xl:w-64 md:w-52 sm:w-36 w-32 mx-auto border-2 mt-40'/>
            <h2 className='text-white lg:text-4xl text-3xl text-center mt-5 font-semibold'>Projects</h2>
            <div className='projectSection'>
                <div>
                    <div class="custom-checkbox w-1/2 h-20 text-base mx-auto my-7">
                        <input id="status" 
                        className='hidden w-full h-full'
                                type="checkbox" 
                                checked={isChecked}
                                name="status" 
                                onChange={() => setIsChecked(!isChecked)}/>
                        <label for="status" className='w-full h-full'>
                            <div className="statusSwitch cursor-pointer w-full h-full relative bg-secondary text-tertiary transition-all duration-500 ease-linear p-1 rounded-xl"
                                data-checked="Websites"
                                data-unchecked="UI/UX">
                            </div>
                        </label>
                    </div>
                </div>

                <div className='projectsContent'>
                    {isChecked ? webDevelopmentContent : uiUxContent}
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id='contact' class='container mx-auto w-full xl:px-20 lg:px-20 md:px-20 px-10 py-0 my-20'>
            <hr className='border-tertiary xl:w-64 md:w-52 sm:w-36 w-32 mx-auto border-2 mt-40'/>
            <h2 className='text-white lg:text-4xl text-3xl text-center mt-5 font-semibold'>Contact</h2>

            <div className='flex flex-col lg:flex-row w-full justify-between my-16 px-0'>
                <div className='w-full lg:w-6/12'>
                    <h3 className='text-tertiary lg:text-4xl text-2xl text-center m-5'>Let's Connect!</h3>
                    <div className='w-full'>
                        <p className='text-white text-center lg:text-left text-base md:text-lg lg:text-lg xl:text-lg py-2'>Email Address: <a className='no-underline text-white hover:bg-tertiary' href="mailto:dianecoding@gmail.com">dianecoding@gmail.com</a></p>
                        <p className='text-white text-center lg:text-left text-lg md:text-lg lg:text-lg xl:text-lg py-2'>Contact Number: <a className='no-underline text-white hover:bg-tertiary' href="tel:+639123456789">+639123456789</a></p>
                    </div>
                    <div className='flex w-full min-w-fit justify-center'>
                        <a className='no-underline rounded-full bg-secondary p-3 m-3 xl:m-4 cursor-pointer hover:bg-tertiary' href='https://www.linkedin.com/in/diane-besmonte' target='_blank' rel="noopener noreferrer">
                            <img src={linkedin} alt='linkedin logo'></img>
                        </a>
                        <a className='no-underline rounded-full bg-secondary p-3 m-3 xl:m-4 cursor-pointer hover:bg-tertiary' href='https://github.com/Diane-Besmonte' target='_blank' rel="noopener noreferrer">
                            <img src={github2} alt='github logo'></img>
                        </a>
                        <a className='no-underline rounded-full bg-secondary p-3 m-3 xl:m-4 cursor-pointer hover:bg-tertiary' href='https://codepen.io/diane-besmonte' target='_blank' rel="noopener noreferrer">
                            <img src={codepen} alt='codepen logo'></img>
                        </a>
                        <a className='no-underline rounded-full bg-secondary p-3 m-3 xl:m-4 cursor-pointer hover:bg-tertiary' href='mailto:dianecoding@gmail.com'>
                            <img src={email} alt='email logo'></img>
                        </a>
                    </div>
                </div>

                <div className='w-full lg:w-6/12'>
                    <h3 className='text-tertiary lg:text-4xl text-2xl text-center m-5'>Get in touch with me!</h3>
                    
                    <form action="https://getform.io/f/b2342af1-c5a2-4dc2-a775-940643f06fc6" method="POST" className='mx-10'>
                        <div className='flex w-full justify-between'>
                            <div className='form sameRow'>
                                <label className='text-white text-left block my-4'>Name</label>
                                <input
                                type="text"
                                name="name"
                                placeholder='Full Name'
                                className='border-2 border-tertiary bg-secondary text-sm text-white box-border w-full py-3 px-2.5'
                                />
                            </div>
                            <div className='form sameRow'>
                                <label className='text-white text-left block my-4'>Email</label>
                                <input
                                type="email"
                                name="email"
                                placeholder='Email Address'
                                className='border-2 border-tertiary bg-secondary text-sm text-white box-border w-full py-3 px-2.5'
                                />
                            </div>                     
                        </div>

                        <div className='form w-full'>
                                <label className='text-white text-left block my-4'>Subject</label>
                                <input
                                type="text"
                                name="subject"
                                placeholder='Subject'
                                className='border-2 border-tertiary bg-secondary text-sm text-white box-border w-full py-3 px-2.5'
                                />
                        </div>   

                        <div className='form w-full'>
                                <label className='text-white text-left block my-4'>Message</label>
                                <textarea id="message" name="message" rows="8" placeholder='Message' className='text-left py-3 px-2.5 border-2 border-tertiary bg-secondary text-sm text-white w-full'></textarea>
                        </div>   

                        <div className='submit my-5 text-center'>
                            <a href="#submit"><button className='hover:bg-tertiary border-y-2 border-tertiary xl:py-3.5 md:py-2.5 sm:py-0.5 py-1.5 xl:px-14 md:px-10 sm:px-8 px-8 lg:mx-4 mx-1.5 md:text-xl text-l text-white' type="submit">Submit</button></a>
                        </div>
                        </form>


                </div>
            </div>

        </section>

        <section className='footer text-white border-t-2 border-white py-5'>
            <p className='text-center md:text-sm text-xs'>© 2023 Diane Besmonte All Rights Reserved.</p>
        </section>
        {/* ************************************************ */}
    </>
  )
}

export default Homepage;

