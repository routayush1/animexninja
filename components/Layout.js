import Head from "next/head"

const Layout = ({ children,title="Animex" }) => {
  return (
    <div className="w-full justify-center items-center min-h-screen lg:h-full lg:w-10/12">
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
};

export default Layout;
