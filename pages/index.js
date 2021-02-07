import Container from "../components/card/Container";
import tw from "twin.macro";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const { data } = useSelector((state) => state);
  useEffect(() => {
    router.push("/recentlyadded/1");
  }, []);
  return (
    <Layout>
      <Container Popular={data} heading={"Recently Added"} />
    </Layout>
  );
}
