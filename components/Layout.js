import tw from "twin.macro";

const Layout = ({ children }) => {
  return (
    <div tw="w-full justify-center items-center  lg:h-full lg:w-10/12">
      {children}
    </div>
  );
};

export default Layout;
