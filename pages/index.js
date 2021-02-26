import Container from "../components/card/Container";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Discover } from "../utils/data";
export default function Home() {
  const router = useRouter();
  const { data } = useSelector((state) => state);
  useEffect(() => {
    router.push("/recentlyadded/1");
  }, []);
  return (
    <Layout>
      <Container Popular={data} heading={"Recently Added"} Icon={Discover[1].icon} />
    </Layout>
  );
}
