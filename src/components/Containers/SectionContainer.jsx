import React from 'react';

const SectionContainer = (props) => {
  return (
    <div className="w-[80vw] mx-[10vw] h-min">
      {props.children}
    </div>
  );
};

export default SectionContainer;
