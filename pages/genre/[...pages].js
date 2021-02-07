import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/card/Container";
import Layout from "../../components/Layout";
import { asyncDataAction } from "../../redux/actions/asyncDataAction";
import { URL } from "../../utils/URLS";
const Genres = () => {
  const { data } = useSelector((state) => state);
  const {
    query: { pages },
  } = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (pages) {
      const GENREURL = URL.GENRES + pages.join("/");
      dispatch(asyncDataAction(GENREURL));
    }
  }, [pages]);

  return (
    <Layout>
      <Container Data={data.results} heading={"Genres"} page={pages} />
    </Layout>
  );
};

export default Genres;
