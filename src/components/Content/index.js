import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useTransition, animated } from "react-spring";
import { songs } from "../songs";

const Container = styled.div`
  height: 550px;
  background-color: rgb(0, 0, 0, 0.5);
  width: 450px;
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
  cursor: pointer;
  z-index: 1;
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
  cursor: pointer;
  z-index: 1;
`;

const PlayArrowLeft = styled.div`
  border-right: 8px solid white;
  border-bottom: 8px solid white;
  border-radius: 1px;
  height: 10px;
  width: 10px;
  opacity: 0.8;
  transform: rotate(45deg) scaleX(-1);
`;

const PlayArrowRight = styled.div`
  border-right: 8px solid white;
  border-bottom: 8px solid white;
  border-radius: 1px;
  height: 10px;
  width: 10px;
  opacity: 0.8;
  transform: rotate(-45deg);
`;

const PlayButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  z-index: 1;
`;

const PlayButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const PlayLeft = ({ onClick }) => (
  <PlayButtonContainer>
    <PlayButtonWrapper onClick={onClick}>
      <PlayArrowLeft />
      <PlayArrowLeft />
    </PlayButtonWrapper>
  </PlayButtonContainer>
);

const PlayRight = ({ onClick }) => (
  <PlayButtonContainer>
    <PlayButtonWrapper onClick={onClick}>
      <PlayArrowRight />
      <PlayArrowRight />
    </PlayButtonWrapper>
  </PlayButtonContainer>
);

const SongContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const changeSongs = (change, currentSongIndex) => {
  if (currentSongIndex === songs.length - 1 && change === 1) {
    return 0;
  }
  if (currentSongIndex === 0 && change === -1) {
    return songs.length - 1;
  }
  return currentSongIndex + change;
};

const contentPages = ["MUSIC", "TOUR"];

const changeContentPage = (change, currentPageIndex) => {
  if (currentPageIndex === contentPages.length - 1 && change === 1) {
    return 0;
  }
  if (currentPageIndex === 0 && change === -1) {
    return contentPages.length - 1;
  }
  return currentPageIndex + change;
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const SlideAnimationWrapper = ({ children, k }) => {
  const transitions = useTransition(children, () => k, {
    from: { opacity: 0, transform: "translate3d(10%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-10%,0,0)" }
  });
  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div
          key={key}
          style={{
            ...props,
            display: "flex",
            flexGrow: 1,
            justifyContent: "center"
          }}
        >
          {item}
        </animated.div>
      )
  );
};

const SongPlaceholder = styled.div`
  height: 380px;
  width: 300px;
  background-color: rgb(255, 255, 255, 0.2);
`;

const Content = () => {
  const [songIndex, setSongIndex] = useState(0);
  const [contentPageIndex, setContentPageIndex] = useState(0);

  return (
    <Container>
      <Header>
        <ArrowLeft
          onClick={() =>
            setContentPageIndex(changeContentPage(-1, contentPageIndex))
          }
        />
        <SlideAnimationWrapper key={contentPageIndex}>
          <div style={{ flexGrow: 1, textAlign: "center" }}>
            {contentPages[contentPageIndex]}
          </div>
        </SlideAnimationWrapper>
        <ArrowRight
          onClick={() =>
            setContentPageIndex(changeContentPage(-1, contentPageIndex))
          }
        />
      </Header>
      {contentPages[contentPageIndex] === "MUSIC" && (
        <SubContainer>
          <PlayLeft onClick={() => setSongIndex(changeSongs(-1, songIndex))} />
          <SongContainer key={songIndex}>
            <SlideAnimationWrapper k={songIndex}>
              <SongPlaceholder>{songs[songIndex]()}</SongPlaceholder>
            </SlideAnimationWrapper>
          </SongContainer>
          <PlayRight onClick={() => setSongIndex(changeSongs(1, songIndex))} />
        </SubContainer>
      )}
      {contentPages[contentPageIndex] === "TOUR" && (
        <SlideAnimationWrapper key={contentPageIndex}>
          <SubContainer>
            <SongContainer>
              <div
                style={{
                  color: "white",
                  fontSize: "20px",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex"
                }}
              >
                No upcoming tour dates.
              </div>
            </SongContainer>
          </SubContainer>
        </SlideAnimationWrapper>
      )}
    </Container>
  );
};

export default Content;
