import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import WatchingContainer from "../../components/watch/watchingContainer";
import { asyncDataAction } from "../../redux/actions/asyncDataAction";

import { URL } from "../../utils/URLS";
const Recently = () => {
  const { data } = useSelector((state) => state);
  const router = useRouter();
  const { slug } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    if (slug) {
      var WatchingURL = URL.EPLINK + slug[0] + "/" + slug[1];
      dispatch(asyncDataAction(WatchingURL));
    }
  }, [slug]);

  return (
    <Layout title={"Watching " + slug?.[0]}>
      {slug && <WatchingContainer data={data} slug={slug} />}
    </Layout>
  );
};

export default Recently;
