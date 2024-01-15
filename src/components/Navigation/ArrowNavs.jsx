import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const ArrowNavs = (props) => {
  return (
    <div>
      <button disabled={props.isDisabled.disabled} className="fixed left-[3%] sm:top-1/2 top-3/4 bg-transparent text-custom-300 rounded-full p-0 z-50" onClick={() => props.handleLeftMove()}><FaArrowCircleLeft className="text-3xl" /></button>
      <button disabled={props.isDisabled.disabled} className="fixed right-[3%] sm:top-1/2 top-3/4 bg-transparent text-custom-300 rounded-full p-0 z-50" onClick={() => props.handleRightMove()}><FaArrowCircleRight className="text-3xl" /></button>
    </div>
  );
};

export default ArrowNavs;
