import React, { useEffect, useState } from 'react';
import ArrowNavs from './ArrowNavs';
import Header from './Header';

const SectionNavigator = (props) => {
  const pageOrder = ["/resume-cp", "/about-me", "/projects", "/resume", "/about-me-cp"];
  const slideSpeed = 250;
  const [currentPage, setCurrentPage] = useState(props.tab);
  const [direction, setDirection] = useState("");
  const [isDisabled, setIsDisabled] = useState({timeout: 0, disabled: false});

  useEffect(() => {
    const sectionContainer = document.getElementById("section-container");
    clearTimeout(isDisabled.timeout);
    /*
      Removes the hidden class from the current page.
    */
    if(currentPage === pageOrder[1] || currentPage === pageOrder[pageOrder.length - 1]) {
      sectionContainer.querySelector(pageOrder[1].replace("/", "#")).classList.remove("hidden");
      sectionContainer.querySelector(pageOrder[pageOrder.length - 1].replace("/", "#")).classList.remove("hidden");
    }
    for(var i = 2; i < pageOrder.length - 1; i++) {
      if(currentPage === pageOrder[i]) {
        sectionContainer.querySelector(pageOrder[i].replace("/", "#")).classList.remove("hidden");
      }
    }
    if(currentPage === pageOrder[pageOrder.length - 2] || currentPage === pageOrder[0]) {
      sectionContainer.querySelector(pageOrder[pageOrder.length - 2].replace("/", "#")).classList.remove("hidden");
      sectionContainer.querySelector(pageOrder[0].replace("/", "#")).classList.remove("hidden");
    }
  }, []);

  /*
    Adds classes to the section container to animate the page moving left or right.
  */
  useEffect(() => {
    const sectionContainer = document.getElementById("section-container");
    /*
      Removes the hidden class from the current page.
    */
    if(currentPage === pageOrder[1] || currentPage === pageOrder[pageOrder.length - 1]) {
      sectionContainer.querySelector(pageOrder[1].replace("/", "#")).classList.remove("hidden");
      sectionContainer.querySelector(pageOrder[pageOrder.length - 1].replace("/", "#")).classList.remove("hidden");
    }
    for(var i = 2; i < pageOrder.length - 1; i++) {
      if(currentPage === pageOrder[i]) {
        sectionContainer.querySelector(pageOrder[i].replace("/", "#")).classList.remove("hidden");
      }
    }
    if(currentPage === pageOrder[pageOrder.length - 2] || currentPage === pageOrder[0]) {
      sectionContainer.querySelector(pageOrder[pageOrder.length - 2].replace("/", "#")).classList.remove("hidden");
      sectionContainer.querySelector(pageOrder[0].replace("/", "#")).classList.remove("hidden");
    }

    /*
      Removes the classes that animate the page moving left or right, and adds a class to keep the
      page in place after the animation is completed. 
    */
    sectionContainer.classList.remove("translate-x-page-" + (pageOrder.indexOf(currentPage) - 1));
    sectionContainer.classList.remove("translate-x-page-" + (pageOrder.indexOf(currentPage) + 1));

    if(direction === "left") {
      setDirection("");
      if(pageOrder.indexOf(currentPage) === 0) {
        sectionContainer.classList.add("translate-x-page-0");
        setCurrentPage(pageOrder[pageOrder.length - 2]);
        props.setTab(pageOrder[pageOrder.length - 2]);
        setTimeout(() => {
          sectionContainer.classList.add("transition-none");
          sectionContainer.classList.add("translate-x-page-" + (pageOrder.length - 2));
          sectionContainer.classList.remove("translate-x-page-0");
        }, slideSpeed);
      } else {
        sectionContainer.classList.remove("translate-x-page-0");
        sectionContainer.classList.add("translate-x-page-" + pageOrder.indexOf(currentPage));
        props.setTab(pageOrder[pageOrder.indexOf(currentPage)]);
      }
      sectionContainer.classList.remove("transition-none");
    } else if(direction === "right") {
      setDirection("");
      if(pageOrder.indexOf(currentPage) === pageOrder.length - 1) {
        // sectionContainer.classList.add("translate-x-page-" + pageOrder.length - 1); // Doesn't work for some reason.
        sectionContainer.classList.remove("translate-x-page-" + (pageOrder.length - 2));
        sectionContainer.classList.add("translate-x-[-" + (pageOrder.length - 1) + "00vw]");
        setCurrentPage(pageOrder[1]);
        props.setTab(pageOrder[1]);
        setTimeout(() => {
          sectionContainer.classList.add("transition-none");
          sectionContainer.classList.add("translate-x-page-1");
          sectionContainer.classList.remove("translate-x-[-" + (pageOrder.length - 1) + "00vw]");
        }, slideSpeed);
      } else {
        sectionContainer.classList.remove("translate-x-page-" + (pageOrder.indexOf(currentPage) - 1));
        sectionContainer.classList.add("translate-x-page-" + pageOrder.indexOf(currentPage));
        props.setTab(pageOrder[pageOrder.indexOf(currentPage)]);
      }
    }

    /*
      Adds the hidden class to all pages except the current page. This is done because the height 
      of the projects page causes all other pages to be more scrollable than they should be.
    */
    setTimeout(() => {
      if(currentPage !== pageOrder[1] && currentPage !== pageOrder[pageOrder.length - 1]) {
        sectionContainer.querySelector("#about-me").classList.add("hidden");
        sectionContainer.querySelector("#about-me-cp").classList.add("hidden");
      }
      for(var i = 2; i < pageOrder.length - 1; i++) {
        if(currentPage !== pageOrder[2]) {
          sectionContainer.querySelector("#projects").classList.add("hidden");
        }
      }
      if(currentPage !== pageOrder[pageOrder.length - 2] && currentPage !== pageOrder[0]) {
        sectionContainer.querySelector("#resume").classList.add("hidden");
        sectionContainer.querySelector("#resume-cp").classList.add("hidden");
      }
    }, slideSpeed);

    setIsDisabled((isDisabled) => ({...isDisabled, 
      timeout: setTimeout(() => {
        setIsDisabled({timeout: 0, disabled: false});
        sectionContainer.classList.remove("transition-none");
      }, slideSpeed + 50)
    }));
  }, [currentPage]);

  /* 
    Adds the animation classes to the section container to move the page to the left, and sets
    currentPage to the new page.
  */
  const handleLeftMove = () => {
    setDirection("left");
    setIsDisabled((isDisabled) => ({...isDisabled, disabled: true}));

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
    setDirection("right");
    setIsDisabled((isDisabled) => ({...isDisabled, disabled: true}));

    if(pageOrder.findIndex((page) => page === currentPage) + 1 < pageOrder.length) {
      setCurrentPage(pageOrder[pageOrder.findIndex((page) => page === currentPage) + 1])
    } else {
      setCurrentPage(pageOrder[1]);
    }
  };

  return (
    <>
      <Header pageOrder={pageOrder} currentPage={currentPage} tab={props.tab} setTab={props.setTab} handleLeftMove={handleLeftMove} handleRightMove={handleRightMove} />
      <ArrowNavs currentPage={currentPage} tab={props.tab} isDisabled={isDisabled} setTab={props.setTab} handleLeftMove={handleLeftMove} handleRightMove={handleRightMove} />
    </>
  );
};

export default SectionNavigator;
