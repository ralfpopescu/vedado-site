import React from "react";
import styled from "styled-components";
import { ReactComponent as Twitter } from "../Icons/twitter.svg";
import { ReactComponent as Instagram } from "../Icons/instagram.svg";
import { ReactComponent as SoundCloud } from "../Icons/soundcloud.svg";
import { ReactComponent as Spotify } from "../Icons/spotify.svg";
import { ReactComponent as Facebook } from "../Icons/facebook.svg";
import * as Constants from "../../util/Constants";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  height: 40px;
`;

const IconContainer = styled.a`
  height: 25px;
  width: 25px;
  margin-right: 16px;
  fill: white;
  opacity: 0.7;
  z-index: 1;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    opacity: 1;
  }
`;

const Contact = () => (
  <Container>
    <IconContainer href={Constants.IG_URL}>
      <Instagram />
    </IconContainer>
    <IconContainer href={Constants.TWITTER_URL}>
      <Twitter />
    </IconContainer>
    <IconContainer href={Constants.FB_URL}>
      <Facebook />
    </IconContainer>
    <IconContainer href={Constants.SOUNDCLOUD_URL}>
      <SoundCloud />
    </IconContainer>
    <IconContainer>
      <Spotify />
    </IconContainer>
  </Container>
);

export default Contact;
