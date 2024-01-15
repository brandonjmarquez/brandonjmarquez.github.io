import { useCallback, useEffect, useState } from "react";

function HeaderButton(props) {
  const [isCurrentPage, setIsCurrentPage] = useState(false);
  
  /* 
    Calculates the distance between the current page and the page the button is supposed to go to.
    If the distance is 1 or -2, the page moves to the right of the current page.
    If the distance is -1 or 2, the page moves to the left of the current page.
  */
  const handleClick = useCallback(() => {
    if(props.pageOrder.findIndex(page => page === props.href) - props.pageOrder.findIndex(page => page === props.currentPage) === 1 ||
       props.pageOrder.findIndex(page => page === props.href) - props.pageOrder.findIndex(page => page === props.currentPage) === -2) {
      props.handleRightMove();
    } else if(props.pageOrder.findIndex(page => page === props.href) - props.pageOrder.findIndex(page => page === props.currentPage) <= -1 ||
       props.pageOrder.findIndex(page => page === props.href) - props.pageOrder.findIndex(page => page === props.currentPage) === 2) {
      props.handleLeftMove();
    }
  }, [props.tab, props.currentPage]);

  /*
    Sets the isCurrentPage to true if it is equal to tab, otherwise it is false. This is used to 
    change the color of the button depending whether or not it is the current page.
  */
  useEffect(() => {
    if(props.tab === props.href) setIsCurrentPage(true);
    else setIsCurrentPage(false);
  }, [props.tab, props.href]);
  
  return (
    <button
      className={`
        header-button sm:[px-5 py-4] px-3 py-2 z-30 bg-custom-300 rounded-full text-white relative font-semibold font-sans overflow-hidden 
        after:-z-20 after:absolute after:h-1 after:w-1 after:bg-custom-400 after:left-5 after:bottom-0 
        after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 
        after:transition-all after:duration-475 
        transition-all duration-700 ${(isCurrentPage) ? "bg-custom-400 current-page" : "bg-custom-300"} 
      `}
      onClick={handleClick}
    >
      {props.label}
    </button>
  );
}

export default HeaderButton;