import React from "react"
import './About.css'
import profile_img from '../../assets/i1.png'

function About() {
  return (
    <div id="about" className="about">
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <h1>Full Stack Developer</h1>
                    <p>I’m a Full Stack Developer with a strong grasp of Data Structures and Algorithms. I enjoy building clean, responsive web applications and solving real-world problems through code. With a passion for both frontend design and backend logic. I'm always excited to learn, build, and grow.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React Js</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Node Js</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>EJS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Express</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>SQL & MongoDB</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>C++</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Data Structure and Algorithms</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Object Oriented Programming</p><hr style={{width:"50%"}}/></div>

                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>Rank 4</h1>
                <p>Crown for Code : A Coding Competition , Organised by team iconnect under T&P Cell.</p>
            </div>
            <div className="about-achievement">
                <h1>Going On</h1>
                <p>Journey is still Continue</p>
            </div>
        </div>
    
    </div>
  )
}

export default About