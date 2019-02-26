import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 500px;
  background-color: rgb(0, 0, 0, 0.5);
  width: 400px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  box-shadow: 49px 70px 67px -4px rgba(0, 0, 0, 0.57);
`;

const Header = styled.div`
  width: 100%;
  height: 80px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-size: 30px;
  text-shadow: 10px 10px 4px #ffffff;
  flex-grow: 0;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  background-color: rgb(0, 0, 0, 0.5);
  border-radius: 0px 0px 16px 16px;
`;

const ArrowLeft = styled.span`
  margin-left: 15px;
  border-right: 20px solid white;
  border-bottom: 20px solid white;
  border-radius: 4px;
  height: 10px;
  width: 10px;
  opacity: 0.8;
  transform: rotate(-45deg);
  transform: rotate(45deg) scaleX(-1);
`;

const ArrowRight = styled.span`
  margin-right: 15px;
  border-right: 20px solid white;
  border-bottom: 20px solid white;
  border-radius: 4px;
  height: 10px;
  width: 10px;
  opacity: 0.8;
  transform: rotate(-45deg);
`;

const PlayArrowLeft = styled.span`
  border-right: 8px solid white;
  border-bottom: 8px solid white;
  border-radius: 1px;
  height: 10px;
  width: 10px;
  opacity: 0.8;
  transform: rotate(45deg) scaleX(-1);
`;

const PlayArrowRight = styled.span`
  border-right: 8px solid white;
  border-bottom: 8px solid white;
  border-radius: 1px;
  height: 10px;
  width: 10px;
  opacity: 0.8;
  transform: rotate(-45deg);
`;

const PlayLeft = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px"
    }}
  >
    <PlayArrowLeft />
    <PlayArrowLeft />
  </div>
);

const PlayRight = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px"
    }}
  >
    <PlayArrowRight />
    <PlayArrowRight />
  </div>
);

const SongContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Content = () => (
  <Container>
    <Header>
      <ArrowLeft />
      <div style={{ flexGrow: 1, textAlign: "center" }}>MUSIC</div>
      <ArrowRight />
    </Header>
    <SubContainer>
      <PlayLeft />
      <SongContainer>
        <iframe
          src="https://open.spotify.com/embed/track/4hvmK2HZPB2MwKjWprYCxg"
          width="270"
          height="300"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </SongContainer>
      <PlayRight />
    </SubContainer>
  </Container>
);

export default Content;
