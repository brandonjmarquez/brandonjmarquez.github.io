import { FaLinkedin, FaGithub } from "react-icons/fa";
import RandProjButton from "../components/Buttons/RandProjButton";
import IconGroup from "../components/Technologies/IconGroup";
import SoundCloudEmbed from "../components/SoundCloudEmbed";

const AboutMe = (props) => {
  return (
    <section id={(props.isCopy) ? "about-me-cp" : "about-me"} className="flex flex-col w-full hidden">
      <div className="flex flex-col bg-custom-100 pt-4">
        <div className="">
          <h1 className="text-3xl font-bold">Welcome!<br></br>My name is Brandon.</h1>
          {"\n"}
        </div>
        <div className="flex flex-col justify-center">
          <p className="subtext">I am a student at Texas State University pursuing a degree in computer science with a minor in applied mathematics.</p>
          <p className="m-auto text-3xl">
            <a href="https://www.linkedin.com/in/brandmarque/" target="_blank"><FaLinkedin className="inline-block m-4" /></a>
            <a href="https://www.github.com/brandonjmarquez/" target="_blank"><FaGithub className="inline-block m-4" /></a>
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <RandProjButton />
        <div className="lg:peer-has-[p:hover]:translate-y-60 z-2 transition-all duration-700 justify-center">
          <div className="flex sm:flex-row flex-col mx-auto my-7 relative align-middle">
            <div className="self-center h-max text-left sm:mr-7">
              <img src={`${import.meta.env.VITE_PUBLIC}/me/me.png`} width="6em" className="max-w-[300px] max-h-[300px] w-full object-cover rounded-md" loading="lazy"
                srcSet={`${import.meta.env.VITE_PUBLIC}/me/me-150.png 150w,
                        ${import.meta.env.VITE_PUBLIC}/me/me-275.png 275w,
                        ${import.meta.env.VITE_PUBLIC}/me/me-400.png 400w,
                        ${import.meta.env.VITE_PUBLIC}/me/me.png 536w`}
              ></img>
            </div>
            <div id="fax" className="h-max self-center">
              <p className="text-start text-xl font-bold">Some facts about me:</p>
              <ul>
                <li className="list-disc text-start">I will be graduating in December 2025 from Texas State University with an Bachelors Degree in Computer Science.</li>
                <li className="list-disc text-start">I have a <strong>strong</strong> passion for coding, music production, and my
                  <a id="cutest-cat-ever" href={`${import.meta.env.VITE_PUBLIC}/suzie.jpg`} target="_blank" className="relative"> cat
                    <span className="absolute hidden z-50">
                      <img className="border-r-8 border-none" src="/suzie.jpg" alt="cutest cat ever" height="300" />
                    </span>
                  </a>.
                </li>
                <li className="list-disc text-start">I make music!(Here's my <a href="https://soundcloud.com/user-550415450" target="_blank">soundcloud</a> if you want to check it out)</li>
              </ul>
              
            </div>
          </div>
          <IconGroup />
          <SoundCloudEmbed />
        </div>
      </div>
    </section>
  )
}

export default AboutMe;