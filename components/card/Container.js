import tw from "twin.macro";
import Card from "./Card";
import { useSelector } from "react-redux";
import PagiNation from "../PagiNation";
import Loader from "../Loader/Loader";
function Container({ Data = [], heading, page }) {
  console.log(page)
  const { theme, loading } = useSelector((state) => state);
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
        <span className={`${theme.text.selected}`} tw=" capitalize px-8 font-thin text-xl">
          {heading=="Showing Results for"?page[0]:heading == "Genres" ?page[0]: "Anime"}
        </span>
      </div>

      <div tw="grid grid-cols-2  w-full px-10 my-6  gap-10  justify-center  md:grid-cols-3 lg:grid-cols-4 lg:px-16 lg:my-16   xl:grid-cols-5 xl:gap-8">
        {Data?.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </div>
      {page ? <PagiNation page={page} heading={"Page"} /> : null}
    </>
  );
}

export default Container;
