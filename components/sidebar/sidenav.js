import tw from "twin.macro";
import NavContainer from "../nav/nav_container/navcontainer";
import { Discover, Genre } from "../../utils/data";
import Toggle from "../nav/Toggle";
import { useSelector } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
      } lg:hidden transition-all duration-1000 ease-in-out `}
    >
      <div
        className={`flex flex-col w-48 space-x-2 m-4 whitespace-nowrap ${theme.background}`}
      >
        <div className=" flex w-full justify-between items-center">
          <Toggle />

          <AiOutlineCloseCircle
            onClick={onClick}
            size={35}
            className={`${theme.button.hover.background} cursor-pointer ${theme.button.hover.text}  rounded-full p-1  `}
          />
        </div>
        <Link href="/recentlyadded/1">
          <div
            className={`${theme.text.selected}`}
            tw="  cursor-pointer text-4xl  justify-center flex-col  flex items-center text-center"
          >
            <Image
              width={150}
              height={125}
              src={
                theme.theme == "dark"
                  ? "/animexlogodark.svg"
                  : "/animexlogolight.svg"
              }
            />
          </div>
        </Link>
        <NavContainer links={Discover} heading={"Discover"} />
        <NavContainer links={Genre} heading={"Genres"} />
        <span
          className={`${theme.text.notselected}`}
          tw="text-xl p-4 w-full justify-start flex-col  flex items-start "
        >
          Visits: {visit}
        </span>
      </div>
    </div>
  );
};
export default Sidenav;
