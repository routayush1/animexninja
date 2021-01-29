import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Loading from "../components/Loading";

const PageB = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: x-large;

  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    transform: scale(1.2);
    ::after {
      transform: scaleY(1);
      opacity: 1;
    }
  }
  &::after {
    transform: scaleY(0);
    transform-origin: top;
    opacity: 0;
    background-color: white;
    box-shadow: 0rem 2rem 5rem;
    transition: all 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;

const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  align-items: center;
  width: 100%;
  justify-content: space-around;
`;
const Heading = styled.div`
  text-transform: capitalize;
  font-size: 40px;
  color: white;
  margin: 50px auto;
  @media ${(props) => props.theme.mediaQueries.medium} {
    font-size: 30px;
  }
`;

const Video = styled.video`
  width: 55vw;
  height: auto;

  @media ${(props) => props.theme.mediaQueries.smaller} {
    width: 90vw;
  }
`;

const Watch = () => {
  const [loading, setLoading] = useState(true);

  let history = useHistory();
  const { id, ep } = useParams();
  const [url, setUrl] = useState("");

  let uri = `https://anime-x.vercel.app/api/watching/${id}/${ep}`;
  useEffect(() => {
    setLoading(true);

    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        if (data.links.length >= 1 || data.link.length >= 2) {
          if (data.links.length === 0) {
            setUrl(data.link);
          } else {
            setUrl(data.links[0].link);
          }
          setLoading(false);
        } else {
          history.push("/error");
        }
      });
  }, [uri, ep, id, history]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Heading>
        Watching :- {id.split("-").join(" ")} &nbsp; Episode-{ep}
      </Heading>

      <Video
        src={url}
        style={{
          boxShadow: "10px 10px 20px rgba(0,0,0,0.5)",
        }}
        autoPlay
        controls
      ></Video>

      <Pagination>
        {ep === "1" ? null : (
          <PageB to={`/watch/${id}/${Number(ep) - 1}`}>
            Previous
            <FaRegArrowAltCircleLeft
              style={{ position: "relative", top: "5px" }}
            />
          </PageB>
        )}
        <PageB to={`/watch/${id}/${Number(ep) + 1}`}>
          <FaRegArrowAltCircleRight
            style={{ position: "relative", top: "5px" }}
          />
          Next
        </PageB>
      </Pagination>
    </>
  );
};

export default Watch;
