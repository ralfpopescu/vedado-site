import React from "react";

const width = 300;
const height = 380;

export const songs = [
  () => (
    <iframe
      src="https://open.spotify.com/embed/track/2s1VpaLKaFTPHwP7q2QXT1"
      width="300"
      height="380"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
  ),
  () => (
    <iframe
      src="https://open.spotify.com/embed/track/4hvmK2HZPB2MwKjWprYCxg"
      width={width}
      height={height}
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
  )
];
