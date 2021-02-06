import Link from "next/link";

import { useSelector } from "react-redux";
import Container from "../components/card/Container";
import Layout from "../components/Layout";
const MyList = () => {
  const { myList, theme } = useSelector((state) => state);

  return (
    <Layout>
      {myList.length > 0 ? (
        <Container Data={myList} heading={"My List"} />
      ) : (
        <div className="flex flex-col h-screen justify-start items-center">
          <div className="w-full flex pt-16 pb-4 justify-center items-center">
            <img
              width={400}
              src={theme.theme == "dark" ? "/404dark.svg" : "/404light.svg"}
            />
          </div>
          <div className=" flex flex-col justify-center items-center w-full">
            <span className={`${theme.text.notselected} text-4xl`}>
              There is nothing to see
            </span>
            <span className={`${theme.text.selected} py-10 font-thin text-lg`}>
              Add your favorite animes
              <Link href={"/popular/1"}>
                <span
                  className={` text-blue-400 mx-1 cursor-pointer font-bold text-xl `}
                >
                  here
                </span>
              </Link>
            </span>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default MyList;
