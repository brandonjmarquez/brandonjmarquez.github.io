import RandProjButton from "../components/RandProjButton";
import { FaLinkedin } from "react-icons/fa";

function AboutMe() {
  return (
    <section id='about-me' className='flex flex-col w-full'>
      <div className="flex flex-col">
        <div className='left-header'>
          <h1 className='title'>Welcome!<br></br>My name is Brandon.</h1>
          {"\n"}
        </div>
        <div className='right-header flex flex-col justify-center'>
          <p className='subtext'>I am a student at Texas State University pursuing a degree in computer science with a minor in applied mathematics.</p>
          <a href="https://www.linkedin.com/in/brandmarque/" target="_blank"><FaLinkedin className="m-auto" /></a>
          <RandProjButton />
        </div>
      </div>
      <div className='flex mx-auto my-0 relative align-middle'>
        <div className='h-max text-left'>
          <img src='/me/me.png' width="10em" className='max-w-[500px] max-h-[500px] w-full object-cover' loading='lazy'
            srcSet='/me/me-150.png 150w,
                    /me/me-275.png 275w,
                    /me/me-400.png 400w,
                    /me/me.png 536w'
          ></img>
        </div>
        <div className='h-max'>
          <p className='text-start about-subtitle'>Some facts about me:</p>
          <ul>
            <li className='text-start'>I will be graduating in December 2025 from Texas State University with an Bachelors Degree in Computer Science.</li>
            <li className='text-start'>I have a <strong>strong</strong> passion for coding, music production, and my
              <a id="cutest-cat-ever" href="/suzie.jpg" target="_blank" className="relative"> cat
                <span className="absolute hidden z-50">
                  <img className="border-r-8 border-none" src="/suzie.jpg" alt="cutest cat ever" height="300" />
                </span>
              </a>.
            </li>
            <li className='text-start'>I make music!(Here's my <a href='https://soundcloud.com/user-550415450'>soundcloud</a> if you want to check it out)</li>
            <li className='text-start'>I've been coding for about 7 years now, and I'm not stopping any time soon.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;