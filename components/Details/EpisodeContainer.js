import tw from "twin.macro";
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

const EpisodeContainer = ({ id, number, image }) => {
  var myArray = [];
  const myFunc = () => {
    for (let i = number; i >= 1; i--) {
      myArray.push(i);
    }
  };
  const theme = useSelector((state) => state.theme);
  return (
    <div tw="w-full flex flex-col py-0 px-5 lg:px-20">
      <span tw="font-bold text-3xl py-8 " className={`${theme.text.selected}`}>
        Episodes
      </span>
      <div tw="grid grid-cols-3 gap-2 lg:grid-cols-5 py-8 lg:gap-8 w-full md:grid-cols-4 xl:grid-cols-6">
        {
          (myFunc(),
          myArray.map((index) => (
            <Link key={index} href={`/watching/${id}/${index}`}>
              <EpButton
                tw="flex cursor-pointer border-2 rounded-full  relative h-10 lg:h-14 w-24 lg:w-40 shadow-lg hover:scale-105 transition-transform transform duration-300"
                key={index}
                detailsButton={theme.detailsButton}
              >
                <div tw="rounded-full w-1/3 h-full p-1 shadow-2xl">
                  <img
                    src={image}
                    tw="h-full rounded-full w-full  object-cover"
                  />
                </div>
                <span tw="w-2/3 flex justify-center items-center text-center h-full">
                  Ep {index}
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
