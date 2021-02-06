import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";

const Error = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <Layout>
      <div className="w-full flex h-screen justify-center items-center">
        <img src={theme.theme == "dark" ? "/404dark.svg" : "/404light.svg"} />
      </div>
    </Layout>
  );
};

export default Error;
