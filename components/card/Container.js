import tw from "twin.macro";
import Card from "./Card";
import { useSelector } from "react-redux";
import PagiNation from "../PagiNation";
import Loader from "../Loader/Loader";
function Container({ Data = [], heading, page }) {
  const { theme, loading, resumeId } = useSelector((state) => state);
  return loading ? (
    <Loader />
  ) : (
    <>
      <div tw="mt-28 lg:mt-0">
        <span
          className={`${theme.text.selected}`}
          tw="px-8 flex flex-col font-light  text-3xl"
        >
          {heading}
        </span>
        <span className={`${theme.text.selected}`} tw="px-8 font-thin text-xl">
          {heading != "Genres" ? "Anime" : ""}
        </span>
      </div>

      <div tw="grid grid-cols-2  w-full px-10 my-6  gap-10  justify-center  md:grid-cols-3 lg:grid-cols-4 lg:px-16 lg:my-16   xl:grid-cols-5 xl:gap-8">
        {Data?.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </div>
      {page ? <PagiNation page={page} /> : null}
    </>
  );
}

export default Container;
