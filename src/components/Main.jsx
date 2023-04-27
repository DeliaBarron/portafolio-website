import { useInfoContext } from '../context/InfoContext'
import image from  '../assets/img/delia1.jpg'
import js from '../assets/img/js.png'
import react from '../assets/img/react.png'
import node from '../assets/img/node.png'
import express from '../assets/img/express.png'
import scss from '../assets/img/sass.png'
import git from '../assets/img/git.jpg'
import bt from '../assets/img/boo.png'


const Main = () => {
  const { AboutMeInfo } = useInfoContext()
  const cvInfoText = (
    <>
      <div className='col-lg-6 col-md-6 col-sm-12'>
       <br />
        <h6>DEVELOPMENT TOOLS</h6>
        <ul>
          <li>Responsive Design (HTML, CSS, SASS)</li>
          <li>JavaScript</li>
          <li>React.Js</li>
          <li>Node.Js</li>
          <li>Git</li>
          <h6>Apprentice :</h6>
          <li>Database Integration</li>
          <li>ThreeJS (WebGi) </li>
          <li>GSAP</li>
        </ul>
        <h6>COMMUNICATION SKILLS</h6>
        <ul>
          <li>Spanish</li>
          <li>English</li>
          <li>German </li>
          <li>French </li>
        </ul>
        <h6>PHILOSOPHY</h6>
        <ul>
          <li>Stoicism</li>
          <li>Kaizen</li>
          <li>Altruism</li>
        </ul>
        <h6>INTERESTS / HOBBIES</h6>
        <ul>
          <li>Learning languages</li>
          <li>Backpack traveling</li>
          <li>Music Production</li>
          <li>Passionate Biker</li>
        </ul>
      </div>
      <div className='col-lg-6 col-md-6 col-sm-12' />

    </>
  )
  const AboutMeInfoText = (
    <>
     <h3 className='mt-2'>Front-End Developer</h3>
     <h6 className='fst-italic'>''Pessimist of the intellect, optimist of the will''</h6> <hr />
      <span className='delia mt-3'>Hello I'm Delia!</span>
      <p>
      I'm a web developer that finds passion in the use of technologies to enable communications and interactions, problem solving on debugging abilities and the use of creativity to find quick and efficient solutions while developing a high quality UI/UX design.
      </p>
      <p>
        I'm currently collaborating at open-source code and getting into 3D animation websites with ThreeJS (WebGi) and GSAP.<br></br>
        Go to my GitHub down below to see what I'm up to!
      {/* I'm crazy about languages, communications, and creativity working on understanding and expanding my own, via coding... */}
      </p>  
      <div className='logos'>
        <img className='imgs' src={js} alt="" />
        <img className='imgs' src={react} alt="" />
        <img className='imgs' src={node} alt="" />
        <img className='imgs' src={express} alt="" />
        <img className='imgs' src={scss} alt="" />
        <img className='imgs' src={bt} alt="" />
        <img className='imgs' src={git} alt="" />
      </div>
    </>
    
  )

  return (
    <main className='container-fluid'>
      <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-12 border border-dark imgDisplay'>
          <img src={image} className='img-fluid' />
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 border border-start-0 border-dark infoDisplay'>
           
          {
            AboutMeInfo
              ? <div className='row infoDisplay__AboutMe'>{AboutMeInfoText}</div>
              : <div className='row infoDisplay__cvInfo'>{cvInfoText}</div>
          }
    
        </div>
      </div>
    </main>

  )
}

export default Main
