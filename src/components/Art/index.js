import React from "react";
import styled, { keyframes } from "styled-components";
import randomColor from "randomcolor";
import { textures } from "./Textures";
import Content from "../Content";

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    opacity: .5;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.5;
  }
`;

const Stripe = styled.div`
  height: 100%;
  width: ${props => props.width}px;
  background-color: ${props => props.color};
  display: flex;
  flex-grow: 1;
  animation: ${pulse} ${() => randomInteger(4, 8)}s infinite;
`;

const StripeContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  overflow: auto;
  flex-grow: 1;
  animation: ${fadeIn} 2s;
`;

const LogoContainer = styled.div`
  font-size: 100px;
  color: white;
  font-family: "Times New Roman", Times, serif;
  animation: ${fadeIn} 6s;
  padding-bottom: 100px;
  text-shadow: 100px 50px 40px #000000;
`;

const Texture = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  ${props => props.texture};
  animation: ${fadeIn} 6s;
  color: white;
`;

const Gradient = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.5),
    rgba(255, 255, 255, 0.5)
  );
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  animation: ${fadeIn} 3s;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
`;

const generateColors = (number, hue) => {
  return randomColor({
    count: number,
    luminosity: "random",
    hue: hue
  });
};

const Art = () => {
  return (
    <StripeContainer width="100%" height="100%">
      {generateColors(15, "random").map(color => (
        <Stripe color={color} width={Math.random() * 100} />
      ))}
      {console.log(textures[randomInteger(1, 87)])}
      <Texture texture={textures[randomInteger(1, textures.length)].value} />
      <Gradient />
      <ContentContainer>
        <div
          style={{
            marginRight: "100px",
            height: "100px",
            position: "relative",
            display: "flex",
            paddingBottom: "200px"
          }}
        >
          <LogoContainer>VEDADO</LogoContainer>
        </div>
        <div style={{ marginLeft: "100px" }}>
          <Content />
        </div>
      </ContentContainer>
    </StripeContainer>
  );
};

const ArtWithForwardedRef = React.forwardRef((props, ref) => (
  <Art {...props} forwardedRef={ref} />
));

export default ArtWithForwardedRef;
