import Link from "next/link";
import tw, { styled } from "twin.macro";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const InSpan = styled.span`
  &:hover {
    border-color: ${({ border }) => border.notselected};
  }
`;

const Link2 = ({ theme, href, name, Icon }) => {
  const router = useRouter();
  const H = href.split("/");
  const H1 = H[H.length - 2];
  const Path = router.asPath.split("/");
  const Pp = Path[Path.length - 2];
  return (
    <Link href={href}>
      {H1 == Pp ? (
        <span
          className={`${theme.text.selected} ${theme.border.selected} `}
          tw="cursor-pointer my-0.5 p-1 items-center flex flex-row  border  rounded-full  "
        >
          <Icon size={13} style={{ margin: "0px 10px" }} />
          {name}
        </span>
      ) : (
        <InSpan
          className={`${theme.text.notselected}`}
          border={theme.border}
          tw="cursor-pointer my-0.5 p-1 items-center flex flex-row  border border-transparent rounded-full "
        >
          <Icon size={12} style={{ margin: "0px 10px" }} />
          {name}
        </InSpan>
      )}
    </Link>
  );
};
const NavContainer = ({ links, heading }) => {
  const theme = useSelector((state) => state.theme);

  return (
    <div tw="w-10/12 my-5">
      <span
        className={`${theme.text.selected}`}
        tw="w-10/12 font-bold mx-2 text-xl "
      >
        {heading}
      </span>
      <div className={`${theme.line}`} tw="h-0.5 mx-2 w-1/12" />

      <div tw=" text-base flex flex-col my-1.5">
        {links?.map((Item) => (
          <Link2
            href={Item.link}
            name={Item.name}
            Icon={Item.icon}
            key={Item.index}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
};

export default NavContainer;
