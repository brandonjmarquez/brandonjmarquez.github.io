import React from 'react';

const SectionContainer = (props) => {
  return (
    <div className="w-[80vw] mx-[10vw]">
      {props.children}
    </div>
  );
};

export default SectionContainer;
