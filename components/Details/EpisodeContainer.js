import { useSelector } from "react-redux";
import Link from "next/link";
import styled from "styled-components";

const EpButton = styled.div`
  border: 2px solid ${({ detailsButton }) => detailsButton.border};
  color: ${({ detailsButton }) => detailsButton.text};
  background: ${({ detailsButton }) => detailsButton.background};
  &:hover {
    border: 2px solid ${({ detailsButton }) => detailsButton.hover.border};
    color: ${({ detailsButton }) => detailsButton.hover.text};
    background: ${({ detailsButton }) => detailsButton.hover.background};
  }
`;

const EpisodeContainer = ({ title, id, number, image }) => {
  var myArray = [];
  const myFunc = () => {
    for (let i = number; i >= 1; i--) {
      myArray.push(i);
    }
  };
  const theme = useSelector((state) => state.theme);
  return (
    <div className="w-full flex flex-col py-0 px-5 lg:px-20">
      <span
        className={`${theme.text.selected} flex flex-col font-bold text-3xl py-5`}
      >
        <span>{title}</span>
        <span className={"text-blue-500 text-lg"}>
          {number != 0 ? number + " -1" : "Coming Soon"}
        </span>
      </span>
      <div className="grid grid-cols-3 gap-2 lg:grid-cols-4 py-8 lg:gap-8 w-full md:grid-cols-5 xl:grid-cols-6">
        {
          (myFunc(),
          myArray.map((index) => (
            <Link key={index} href={`/watching/${id}/${index}`}>
              <EpButton
                className="flex cursor-pointer border-2 rounded-full  relative h-10 lg:h-14 w-24 lg:w-40 shadow-lg hover:scale-105 transition-transform transform duration-300"
                key={index}
                detailsButton={theme.detailsButton}
              >
                <div className="rounded-full w-1/3 h-full p-1 shadow-2xl">
                  <img
                    src={image}
                    className="h-full rounded-full w-full  object-cover"
                    alt={id}
                  />
                </div>
                <span className="w-2/3 flex justify-center items-center text-center h-full">
                  Ep -<span className={"font-semibold"}>{index}</span>
                </span>
              </EpButton>
            </Link>
          )))
        }
      </div>
    </div>
  );
};

export default EpisodeContainer;
