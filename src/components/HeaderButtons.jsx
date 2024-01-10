import { useCallback, useEffect, useState } from "react";

function HeaderButton(props) {
  const [isCurrentPage, setIsCurrentPage] = useState(false);
  
  // Calculates the distance between the current page and the page the button is supposed to go to.
  // If the distance is 1 or -2, the page moves to the right of the current page.
  // If the distance is -1 or 2, the page moves to the left of the current page.
  const handleClick = useCallback(() => {
    if(props.pageOrder.findIndex(page => page === props.href) - props.pageOrder.findIndex(page => page === props.currentPage) === 1 ||
       props.pageOrder.findIndex(page => page === props.href) - props.pageOrder.findIndex(page => page === props.currentPage) === -2) {
      props.handleRightMove();
    } else if(props.pageOrder.findIndex(page => page === props.href) - props.pageOrder.findIndex(page => page === props.currentPage) <= -1 ||
       props.pageOrder.findIndex(page => page === props.href) - props.pageOrder.findIndex(page => page === props.currentPage) === 2) {
      props.handleLeftMove();
    }
  }, [props.tab, props.currentPage]);

  // Sets the isCurrentPage to true if it is equal to tab, otherwise it is false. This is used to 
  // change the color of the button depending whether or not it is the current page.
  useEffect(() => {
    if(props.tab === props.href) setIsCurrentPage(true);
    else setIsCurrentPage(false);
  }, [props.tab, props.href]);
  
  return <button className={`w-max sm:px-4 sm:py-3 px-2 py-1 rounded-full bg-custom-300 border-2 hover:border-custom-400 hover:animate-pulse ${(isCurrentPage) ? " text-violet-400" : "text-red-600"}`} onClick={handleClick}>{props.label}</button>
}

export default HeaderButton;