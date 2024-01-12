import React, { useEffect, useMemo, useRef } from "react";
import { SiCplusplus } from "react-icons/si";
import TechnologiesJSON from "../../json/technologies.json";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Icon from "./icon";

const IconGroup = (props) => {

  return (
    <>
      <div className="flex items-center flex-col">
        <div className="carousel w-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scrollbar-hide" onScroll={(e) => handleScroll(e)}>
          <div className="carousel-content">
            {TechnologiesJSON.map((item, i) => 
              <Icon key={i} className='carousel-item' item={item} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default IconGroup;