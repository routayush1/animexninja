import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/card/Container";
import Layout from "../../components/Layout";
import { asyncDataAction } from "../../redux/actions/asyncDataAction";
import { URL } from "../../utils/URLS";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const { data } = useSelector((state) => state);
  const {
    query: { pages },
  } = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (pages) {
      const SEARCHURL = URL.SEARCH + pages.join("/");
      dispatch(asyncDataAction(SEARCHURL));
    }
  }, [pages]);

  return (
    <Layout title={pages?.[0]}>
      <Container
        Data={data.results}
        heading={"Showing Results for"}
        page={pages}
        Icon={FaSearch}
      />
    </Layout>
  );
};

export default Search;
