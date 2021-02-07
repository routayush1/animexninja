import Link from "next/link";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import tw, { styled } from "twin.macro";

const PB = styled.span`
  &:hover {
    background: ${({ button }) => button.hover.background};
    color: ${({ button }) => button.hover.text};
  }
`;

const PageButton = ({ href, children, style }) => {
  const { theme } = useSelector((state) => state);
  return (
    <Link href={href}>
      <PB
        button={theme.button}
        tw="p-2 px-4 flex justify-center items-center border rounded-full cursor-pointer"
        className={`${style} ${theme.button.background} border ${theme.button.text} ${theme.button.border} shadow-2xl transition-all duration-500`}
      >
        {children}
      </PB>
    </Link>
  );
};

const PagiNation = ({ page, total }) => {
  const pgn = parseInt(page[page.length - 1]);
  const nxt =
    page.length == 1 ? String(pgn + 1) : page[0] + "/" + String(pgn + 1);
  const prev =
    page.length == 1 ? String(pgn - 1) : page[0] + "/" + String(pgn - 1);
  return (
    <div tw="px-8 py-2 mb-16 relative flex flex-row h-16 w-full  items-center  ">
      {pgn === 1 ? null : (
        <PageButton style={"absolute left-12"} href={prev} pre={true}>
          <BiLeftArrowAlt size={20} />
          Page {pgn - 1}
        </PageButton>
      )}
      {pgn != total ? (
        <PageButton style={"absolute right-12"} href={nxt} pre={false}>
          Page {pgn + 1}
          <BiRightArrowAlt size={20} />
        </PageButton>
      ) : null}
    </div>
  );
};

export default PagiNation;
