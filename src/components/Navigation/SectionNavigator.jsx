import React, { useCallback, useEffect, useState } from 'react';
import ArrowNavs from './ArrowNavs';
import Header from './Header';

const SectionNavigator = (props) => {
  const pageOrder = ["/resume-cp", "/about-me", "/projects", "/resume", "/about-me-cp"];
  const slideSpeed = 250;
  const [currentPage, setCurrentPage] = useState(props.tab);

  /*
    Adds classes to the section container to animate the page moving left or right.
  */
  useEffect(() => {
    const sectionContainer = document.getElementById("section-container");

    if(currentPage === "/about-me-cp") {
      props.setTab("/about-me");
    } else if(currentPage === "/resume-cp") {
      props.setTab("/resume");
    } else {
      props.setTab(currentPage);
    }

    /*
      Removes the hidden class from the current page.
    */
    if(currentPage === "/about-me" || currentPage === "/about-me-cp") {
      sectionContainer.querySelector("#about-me").classList.remove("hidden");
      sectionContainer.querySelector("#about-me-cp").classList.remove("hidden");
    }
    if(currentPage === "/projects") {
      sectionContainer.querySelector("#projects").classList.remove("hidden");
    }
    if(currentPage === "/resume" || currentPage === "/resume-cp") {
      sectionContainer.querySelector("#resume").classList.remove("hidden");
      sectionContainer.querySelector("#resume-cp").classList.remove("hidden");
    }

    /*
      Removes the classes that animate the page moving left or right, and adds a class to keep the
      page in place after the animation is completed. 
    */
    setTimeout(() => {
      sectionContainer.classList.remove("slide-left");
      sectionContainer.classList.remove("slide-right");
      sectionContainer.classList.remove("translate-x-[-" + (pageOrder.indexOf(currentPage) - 1) + "00vw]");
      sectionContainer.classList.remove("translate-x-[-" + (pageOrder.indexOf(currentPage) + 1) + "00vw]");

      if(pageOrder.indexOf(currentPage) === pageOrder.length - 1) {
        sectionContainer.classList.remove("translate-x-[-" + (pageOrder.length - 1) + "00vw]");
        sectionContainer.classList.add("translate-x-[-100vw]");
        setCurrentPage("/about-me");
      } else if(pageOrder.indexOf(currentPage) === pageOrder.length) {
        sectionContainer.classList.remove("translate-x-[-" + (pageOrder.length) + "00vw]");
        sectionContainer.classList.add("translate-x-[-300vw]");
        setCurrentPage("/resume");
      } else {
        sectionContainer.classList.add("translate-x-[-" + pageOrder.indexOf(currentPage) + "00vw]");
      }

      /*
        Adds the hidden class to all pages except the current page. This is done because the height 
        of the projects page causes all other pages to be more scrollable than they should be.
      */

      if(currentPage !== "/about-me") {
        sectionContainer.querySelector("#about-me").classList.add("hidden");
      }
      if(currentPage !== "/projects") {
        sectionContainer.querySelector("#projects").classList.add("hidden");
      }
      if(currentPage !== "/resume") {
        sectionContainer.querySelector("#resume").classList.add("hidden");
      }
    }, slideSpeed);
  }, [currentPage]);

  /* 
    Adds the animation classes to the section container to move the page to the left, and sets
    currentPage to the new page.
  */
  const handleLeftMove = () => {
    const sectionContainer = document.getElementById("section-container");
    sectionContainer.classList.add("slide-left");
    if(pageOrder.findIndex((page) => page === props.tab) - 1 >= 0) {
      setCurrentPage(pageOrder[pageOrder.findIndex((page) => page === props.tab) - 1]);
    } else {
      setCurrentPage(pageOrder[pageOrder.length - 2]);
    }
  };

  /*
    Adds the animation classes to the section container to move the page to the right, and sets
    currentPage to the new page.
  */
  const handleRightMove = () => {
    const sectionContainer = document.getElementById("section-container");
    sectionContainer.classList.add("slide-right");
    if(pageOrder.findIndex((page) => page === currentPage) + 1 < pageOrder.length) {
      setCurrentPage(pageOrder[pageOrder.findIndex((page) => page === currentPage) + 1])
    } else {
      setCurrentPage(pageOrder[1]);
    }
  };

  return (
    <>
      <style>
        {
          `@keyframes slideLeft {
            0% {
              transform: translateX(-${(pageOrder.indexOf(currentPage) + 1)}00vw);
            }
            100% {
              transform: translateX(-${pageOrder.indexOf(currentPage)}00vw);
            }
          }

          @keyframes slideRight {
            0% {
              transform: translateX(-${(pageOrder.indexOf(currentPage) - 1)}00vw);
            }
            100% {
              transform: translateX(-${(pageOrder.indexOf(currentPage))}00vw);
            }
          }
          
          .slide-left {
            animation: slideLeft 0.${slideSpeed}s ease-in-out forwards;
          }
          
          .slide-right {
            animation: slideRight 0.${slideSpeed}s ease-in-out forwards;
          }`
        }
      </style>
      <Header pageOrder={pageOrder} currentPage={currentPage} tab={props.tab} setTab={props.setTab} handleLeftMove={handleLeftMove} handleRightMove={handleRightMove} />
      <ArrowNavs currentPage={currentPage} tab={props.tab} setTab={props.setTab} handleLeftMove={handleLeftMove} handleRightMove={handleRightMove} />
    </>
  );
};

export default SectionNavigator;
