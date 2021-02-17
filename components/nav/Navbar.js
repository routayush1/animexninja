import Image from "next/image";
import Link from "next/link";
import NavContainer from "./nav_container/navcontainer";
import { Discover, Genre } from "../../utils/data";
import Toggle from "./Toggle";
import { useSelector } from "react-redux";
const Navbar = ({ visit }) => {
  const { theme } = useSelector((state) => state);
  return (
    <div
      className={`flex flex-col w-2/12 ${theme.background} ${theme.border.notselected} border-r justify-start items-center border-opacity-50 hidden lg:flex `}
    >
      <Link href="/recentlyadded/1">
        <div
          className={`${theme.text.selected}  cursor-pointer text-4xl  justify-center flex-col  flex items-center text-center`}
        >
          <Image
            width={300}
            height={250}
            src={
              theme.theme == "dark"
                ? "/animexlogodark.svg"
                : "/animexlogolight.svg"
            }
          />
        </div>
      </Link>
      <Toggle />
      <NavContainer links={Discover} heading={"Discover"} />
      <NavContainer links={Genre} heading={"Genres"} />
      <span
        className={`${theme.text.notselected} text-lg px-10  w-full justify-start  flex items-center `}
      >
        Visits:&nbsp;
        <span className={`${theme.text.selected} text-xl font-bold`}>
          {visit}
        </span>
      </span>
    </div>
  );
};
export default Navbar;
