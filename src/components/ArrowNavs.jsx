import React, { useEffect, useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const ArrowNavs = (props) => {
  // const pageOrder = ["/resume-cp", "/about-me", "/projects", "/resume", "/about-me-cp"];
  // const [currentPage, setCurrentPage] = useState(props.tab);
  
  // useEffect(() => {
  //   const sectionContainer = document.getElementById("section-container");
  //   console.log("currentPage: " + currentPage);
  //   if(currentPage === "/about-me-cp") {
  //     console.log(1);
  //     props.setTab("/about-me");
  //   } else if(currentPage === "/resume-cp") {
  //     props.setTab("/resume");
  //   } else {
  //     props.setTab(currentPage);
  //   }

  //   setTimeout(() => {
  //     sectionContainer.classList.remove("slide-left");
  //     sectionContainer.classList.remove("slide-right");
  //     sectionContainer.classList.remove("translate-x-[-" + (pageOrder.indexOf(currentPage) - 1) + "00vw]");
  //     sectionContainer.classList.remove("translate-x-[-" + (pageOrder.indexOf(currentPage) + 1) + "00vw]");
  //     if(pageOrder.indexOf(currentPage) === pageOrder.length - 1) {
  //       sectionContainer.classList.remove("translate-x-[-" + (pageOrder.length - 1) + "00vw]");
  //     } else if(pageOrder.indexOf(currentPage) === pageOrder.length) {
  //       sectionContainer.classList.remove("translate-x-[-" + (pageOrder.length) + "00vw]");
  //     } else {
  //       sectionContainer.classList.add("translate-x-[-" + pageOrder.indexOf(props.currentPage) + "00vw]");
  //     }

  //     // if(currentPage === "/about-me-cp") {
  //     //   setCurrentPage("/about-me");
  //     // } else if(currentPage === "/resume-cp") {
  //     //   setCurrentPage("/resume");
  //     // }
  //   }, 250);
  // }, [currentPage]);

  // const handleLeftArrow = () => {
  //   const sectionContainer = document.getElementById("section-container");
  //   sectionContainer.classList.add("slide-left");
  //   if(pageOrder.findIndex((page) => page === props.tab) - 1 >= 0) {
  //     setCurrentPage(pageOrder[pageOrder.findIndex((page) => page === props.tab) - 1]);
  //   } else {
  //     setCurrentPage(pageOrder[pageOrder.length - 2]);
  //   }
  // }

  // const handleRightArrow = () => {
  //   const sectionContainer = document.getElementById("section-container");
  //   sectionContainer.classList.add("slide-right");
  //   if(pageOrder.findIndex((page) => page === currentPage) + 1 < pageOrder.length) {
  //     console.warn(pageOrder.findIndex((page) => page === currentPage) + 1, );
  //     setCurrentPage(pageOrder[pageOrder.findIndex((page) => page === currentPage) + 1])
  //   } else {
  //     setCurrentPage(pageOrder[1]);
  //   }
  // }

  return (
    <div>
      {/* <style>
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
            animation: slideLeft 0.25s ease-in-out forwards;
          }
          
          .slide-right {
            animation: slideRight 0.25s ease-in-out forwards;
          }`
        }
      </style> */}
      {/* <button className="fixed left-[3%] top-1/2 bg-transparent text-custom-300 rounded-full p-0 z-50" onClick={() => props.setCurrentPage(pageOrder[(pageOrder.findIndex((page) => page === props.tab) - 1 >= 0) ? pageOrder.findIndex((page) => page === props.tab) - 1 : pageOrder.length - 1])}><FaArrowCircleLeft className="text-3xl" /></button>
      <button className="fixed right-[2%] top-1/2 bg-transparent text-custom-300 rounded-full p-0 z-50" onClick={() => props.setCurrentPage(pageOrder[(pageOrder.findIndex((page) => page === props.tab) + 1 < pageOrder.length) ? pageOrder.findIndex((page) => page === props.tab) + 1 : 0])}><FaArrowCircleRight className="text-3xl" /></button> */}
      <button className="fixed left-[3%] top-1/2 bg-transparent text-custom-300 rounded-full p-0 z-50" onClick={() => props.handleLeftMove()}><FaArrowCircleLeft className="text-3xl" /></button>
      <button className="fixed right-[2%] top-1/2 bg-transparent text-custom-300 rounded-full p-0 z-50" onClick={() => props.handleRightMove()}><FaArrowCircleRight className="text-3xl" /></button>
    </div>
  );
};

export default ArrowNavs;
