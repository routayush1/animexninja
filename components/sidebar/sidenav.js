import NavContainer from "../nav/nav_container/navcontainer";
import { Discover, Genre } from "../../utils/data";
import Toggle from "../nav/Toggle";
import { useSelector } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useEffect } from "react";

const Sidenav = ({ onClick, show, visit }) => {
  const { theme } = useSelector((state) => state);
  useEffect(() => {
    var Mymenu = document.getElementById("sidemenu");
    document.addEventListener("click", function (event) {
      var isClicked = Mymenu.contains(event.target);
      if (!isClicked) onClick();
    });
  }, []);
  return (
    <div
      className={` fixed  ${
        show ? "flex max-w-full overflow-y-scroll  " : "max-w-0 overflow-hidden"
      } h-full left-0 top-0 z-50  ${
        theme.background
      } lg:hidden transition-all duration-1000 ease-in-out shadow-2xl`}
    >
      <div
        className={`flex flex-col w-48 space-x-2 m-4 whitespace-nowrap ${theme.background}`}
      >
        <div className=" flex w-full justify-between items-center">
          <Toggle />

          <AiOutlineCloseCircle
            onClick={onClick}
            size={35}
            style={{ color: `${theme.detailsButton.text}` }}
            className={` cursor-pointer  rounded-full p-1  `}
          />
        </div>

        <NavContainer links={Discover} heading={"Discover"} />
        <NavContainer links={Genre} heading={"Genres"} />
        <span
          className={`${theme.text.notselected} text-lg pb-10 px-4 w-full justify-start  flex items-center `}
        >
          Visits:&nbsp;
          <span className={`${theme.text.selected} text-xl font-bold`}>
            {visit}
          </span>
        </span>
      </div>
    </div>
  );
};
export default Sidenav;
