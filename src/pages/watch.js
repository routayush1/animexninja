import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Loading from "../components/Loading";

const Wrap = styled.div`
  width: 60%;
  height: auto;

  position: absolute;
  left: 20%;
  top: 57%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  &:after {
    display: block;
    content: "";
    width: 100%;
    padding-bottom: 56.25%;
  }
  @media ${(props) => props.theme.mediaQueries.medium} {
    left: 5%;
    top: 50%;
    width: 90%;
  }

  @media ${(props) => props.theme.mediaQueries.smaller} {
    left: 5%;
    top: 43%;
    width: 90%;
    height: 16rem;
  }
`;

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
  top: 780px;
  position: absolute;
  align-items: center;
  left: 8.5%;
  width: 80%;
  justify-content: space-between;
  @media ${(props) => props.theme.mediaQueries.medium} {
    top: 650px;
  }

  @media ${(props) => props.theme.mediaQueries.smaller} {
    top: 500px;
  }
`;
const Heading = styled.h2`
  color: white;
`;

const Watch = () => {
  const [loading, setLoading] = useState(true);
  const [iFr, setIfr] = useState(false);
  let history = useHistory();
  const { id, ep } = useParams();
  const [url, setUrl] = useState("");

  let uri = `https://anime-x.herokuapp.com/watching/${id}/${ep}`;
  useEffect(() => {
    setLoading(true);

    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        if (data.links.length >= 1 || data.link.length >= 2) {
          if (data.links.length === 0 || data.links[0].label === "hls P") {
            setIfr(true);
            setUrl(data.link);
          } else {
            setUrl(data.links[0]["url"]);
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
        Watching :- {id.split("-").join(" ")} EPISODE_NO_{ep}
      </Heading>

      <Wrap>
        {iFr ? (
          <iframe
            title="outer"
            src={url}
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              boxShadow: "10px 10px 20px rgba(0,0,0,0.5)",
            }}
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        ) : (
          <video
            src={url}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              boxShadow: "10px 10px 20px rgba(0,0,0,0.5)",
            }}
            autoPlay
            controls
          ></video>
        )}
      </Wrap>
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
