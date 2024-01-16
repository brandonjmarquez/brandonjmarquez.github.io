import { useEffect } from "react";
import HeaderButton from "../Buttons/HeaderButtons";

function Header(props) {
  return (
    <nav id='navbar' className='fixed sm:w-3/4 w-full sm:top-[5vh] top-[2vh] sm:left-[12.5%] left-[0] sm:mb-[0%] mb-[15%] mx-auto z-50 shadow rounded-full bg-custom-200'>
      <div className='m-auto py-2 w-full text-white whitespace-nowrap z-50 shadow-md'>
        <div className=''>
          <div className='header-container flex items-center justify-evenly'>
            <HeaderButton href="/about-me" label="About Me" pageOrder={props.pageOrder} currentPage={props.currentPage} tab={props.tab} setTab={props.setTab} handleLeftMove={props.handleLeftMove} handleRightMove={props.handleRightMove} />
            <HeaderButton href="/projects" label="Projects" pageOrder={props.pageOrder} currentPage={props.currentPage} tab={props.tab} setTab={props.setTab} handleLeftMove={props.handleLeftMove} handleRightMove={props.handleRightMove} />
            <HeaderButton href="/resume" label="Resume" pageOrder={props.pageOrder} currentPage={props.currentPage} tab={props.tab} setTab={props.setTab} handleLeftMove={props.handleLeftMove} handleRightMove={props.handleRightMove} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;