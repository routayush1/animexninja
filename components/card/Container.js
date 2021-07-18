import Card from "./Card";
import { useSelector } from "react-redux";
import PagiNation from "../PagiNation";
import Loader from "../Loader/Loader";
function Container({ Data = [], heading, page, Icon }) {
  const { theme, loading } = useSelector((state) => state);
  console.log(Data);
  return loading ? (
    <Loader />
  ) : Data.length > 0 ? (
    <>
      <div className="mt-28 lg:mt-0">
        <span
          className={`${theme.text.selected} px-8 flex  font-light items-center  text-3xl`}
        >
          {Icon ? (
            <Icon
              size={15}
              style={{
                margin: "0px 10px 0px 0px",
                color: heading == "My List" ? "red" : theme.text.selected,
              }}
            />
          ) : (
            ""
          )}
          {heading}
        </span>
        <span className={`text-blue-500  capitalize px-16 font-thin text-xl`}>
          {heading == "Showing Results for"
            ? page?.[0]
            : heading == "Genres"
            ? page?.[0]
            : "Anime"}
        </span>
      </div>

      <div className="grid grid-cols-2  w-full px-10 my-6  gap-10  justify-center  md:grid-cols-3 lg:grid-cols-3 lg:px-16 lg:my-16   xl:grid-cols-5 xl:gap-8">
        {Data?.map((item, index) => (
          <Card {...item} key={index} heading={heading} />
        ))}
      </div>
      {page ? <PagiNation page={page} heading={"Page"} /> : null}
    </>
  ) : (
    <div className={` flex flex-col h-screen  w-full text-lg`}>
      <div
        className={`h-full ${theme.text.notselected} flex flex-col justify-center items-center`}
      >
        <div className="w-full flex  flex-col justify-start items-center">
          <img
            width={400}
            src={theme.theme == "dark" ? "/404dark.svg" : "/404light.svg"}
          />
        </div>
        <span className="py-4">
          Nothing found for&nbsp;
          <span
            className={`${theme.text.selected} capitalize text-xl font-bold`}
          >
            {page?.[0]}
          </span>
        </span>
      </div>
    </div>
  );
}

export default Container;
