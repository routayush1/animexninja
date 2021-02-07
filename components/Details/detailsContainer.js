import tw from "twin.macro";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { AiFillPlayCircle } from "react-icons/ai";
import EpisodeContainer from "./EpisodeContainer";
import Loader from "../Loader/Loader";
import {
  addToMyList,
  removeFromMyList,
} from "../../redux/actions/myLIstDataAction";

import { useEffect, useState } from "react";
import Lottie from "lottie-react-web";
import Heart from "../../public/heart.json";

const DetailsContainer = ({ id, data = [] }) => {
  const [click, setClick] = useState(false);
  const { theme, loading, myList } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const current = myList.filter((item) => item.id == id);
    current.length > 0 ? setClick(true) : setClick(false);
  }, []);
  const handleClick = () => {
    if (click) {
      setClick(false);
      dispatch(removeFromMyList(id));
    } else {
      dispatch(addToMyList({ id: id, image: data.image, title: data.title }));
      setClick(true);
    }
  };
  return loading ? (
    <Loader />
  ) : (
    <>
      <div
        className={`${theme.background} ${theme.text.selected}`}
        tw="w-full  py-20 lg:px-20 lg:py-8 flex justify-center"
      >
        <div tw="w-full lg:w-10/12 flex flex-col justify-center items-center lg:(flex-row justify-start items-stretch) ">
          <div tw="rounded-lg w-8/12 lg:w-4/12 my-8 lg:my-0 shadow-2xl">
            <img src={data.image} tw=" w-full h-full rounded-lg object-cover" />
          </div>
          <div tw=" flex flex-col w-11/12 px-0 lg:w-8/12  lg:px-10">
            <div tw="flex w-full justify-between py-2">
              <span tw="font-bold text-4xl  md:text-5xl  ">
                {data.title}
                <div
                  className={`${theme.line}`}
                  tw="h-0.5 mx-2 my-1 w-1/3 rounded-full"
                />
              </span>
              <span
                tw="text-base font-medium p-2"
                className={`${theme.text.notselected}`}
              >
                {data.type}
              </span>
            </div>

            <div tw="flex flex-col w-full ">
              <span tw=" flex justify-between w-full items-end font-bold text-3xl">
                The Synopsis
                <span
                  tw=" w-12 h-12 hover:scale-110 transform transition-all duration-200"
                  className={`${theme.text.notselected} `}
                  onClick={handleClick}
                >
                  <Lottie
                    options={{
                      animationData: Heart,
                      loop: false,
                    }}
                    direction={click ? 1 : -1}
                  />
                </span>
              </span>
              <span tw="text-base font-light p-2">{data.summary}</span>
            </div>
            <div tw="flex w-full justify-between items-center">
              <div tw="flex flex-col py-3">
                <span tw="font-bold text-xl">Released</span>
                <span tw="px-2" className={`${theme.text.notselected}`}>
                  {data.relased}
                </span>
              </div>

              <div tw="flex flex-col py-3">
                <span tw="font-bold text-xl">Status</span>
                <span tw="" className={`${theme.text.notselected}`}>
                  {data.status}
                </span>
              </div>
            </div>
            <div tw="py-2 w-10/12">
              <span tw="text-xl font-bold">The Genres</span>
              <span
                tw="flex flex-row flex-wrap w-full items-center"
                className={`${theme.text.notselected}`}
              >
                {data.genres?.split(", ").map((Item, index) => (
                  <Link
                    href={`/genre/${Item.split(" ").join("-")}/1`}
                    key={index}
                  >
                    <span tw=" py-1 cursor-pointer flex justify-center whitespace-nowrap items-center transform hover:scale-110 transition-transform duration-500">
                      <AiFillPlayCircle
                        size={13}
                        style={{ margin: "0px 10px" }}
                      />
                      {Item}
                    </span>
                  </Link>
                ))}
              </span>
            </div>
            <div tw="flex flex-col py-4">
              <span tw="text-xl font-bold">Total Episodes</span>
              <span tw="text-sm font-bold p-2">{data.totalepisode}</span>
            </div>
          </div>
        </div>
      </div>

      <EpisodeContainer number={data.totalepisode} id={id} image={data.image} />
    </>
  );
};

export default DetailsContainer;
