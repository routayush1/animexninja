import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/card/Container";
import Layout from "../../components/Layout";
import { asyncDataAction } from "../../redux/actions/asyncDataAction";
import { URL } from "../../utils/URLS";
import {Discover} from "../../utils/data"
const Popular = () => {
  const { data } = useSelector((state) => state);
  const router = useRouter();
  const { pages } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    if (pages) {
      var PopularURL = URL.POPULAR + pages;

      dispatch(asyncDataAction(PopularURL));
    }
  }, [pages]);

  return (
    <Layout title={"Popular"}>
      <Container Data={data.results} heading={"Popular"} Icon={Discover[1].icon} page={[pages]} />
    </Layout>
  );
};

export default Popular;
