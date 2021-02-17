import { useSelector } from "react-redux";
import styled,{ keyframes } from "styled-components";
const loader = keyframes`

  0% { left:-100px }
  100% { left: 110%; }

`;

const Load = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
  animation: ${loader} 3s linear infinite;
`;
const animate = keyframes`
17% {
  border-bottom-right-radius: 5px;
}
25% {
  transform: translateY(9px) rotate(22.5deg);
}
50% {
  transform: translateY(18px) scale(1, 0.9) rotate(45deg);
  border-bottom-right-radius: 100px;
}
75% {
  transform: translateY(9px) rotate(67.5deg);
}
100% {
  transform: translateY(0) rotate(90deg);
}
`;

const Box = styled.div`
  width: 130px;
  height: 130px;
  background: ${({ card }) => card.bghover};
  animation: ${animate} 0.5s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
`;
const shadow = keyframes`

50% {
  transform: scale(1.2, 1);
}
`;
const Shadow = styled.div`
  width: 100px;
  height: 5px;
  background: ${({ card }) => card.bghover};
  opacity: 0.4;
  position: absolute;
  top: 150px;
  left: 0;
  border-radius: 50%;
  animation: ${shadow} 0.5s linear infinite;
`;
const Loading = ({ card }) => {
  return (
    <Load>
      <Shadow card={card} />
      <Box card={card} />
    </Load>
  );
};

const Loader = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      className={`w-full relative overflow-hidden h-screen flex justify-center items-center ${theme.text.selected} `}
    >
      <Loading {...theme} />
    </div>
  );
};

export default Loader;
