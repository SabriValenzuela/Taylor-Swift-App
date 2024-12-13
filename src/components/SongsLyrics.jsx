import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getLyrics } from "../api";

export default function Lyrics() {
  const { song_id } = useParams();

  const location = useLocation();
  const { album_id } = location.state || {};

  const [lyrics, setLyrics] = useState("");

  useEffect(() => {
    const fetchlyrics = async () => {
      const lyricsData = await getLyrics(song_id);
      setLyrics(lyricsData);
    };
    fetchlyrics();
  }, [song_id]);

  console.log(lyrics);

  const gradients = {
    1: "linear-gradient(0deg, rgba(187,229,247,1) 0%, rgba(123,137,149,1) 100%)",
    2: "linear-gradient(0deg, rgba(93,111,93,1) 0%, rgba(180,207,174,1) 100%)",
    3: "linear-gradient(0deg, rgba(247,198,133,1) 0%, rgba(216,179,114,1) 100%)",
    4: "linear-gradient(0deg, rgba(169,138,172,1) 0%, rgba(223,132,233,1) 100%)",
    5: "linear-gradient(0deg, rgba(100,53,58,1) 0%, rgba(207,30,59,1) 100%)",
    6: " linear-gradient(0deg, rgba(51,43,46,1) 0%, rgba(148,138,141,1) 100%)",
    7: "linear-gradient(0deg, rgba(196,137,158,1) 0%, rgba(254,142,188,1) 100%)",
    8: "linear-gradient(0deg, rgba(132,132,130,1) 0%, rgba(207,203,195,1) 100%)",
    9: "linear-gradient(0deg, rgba(176,89,37,1) 0%, rgba(107,51,38,1) 100%)",
    10: "linear-gradient(0deg, rgba(70,78,98,1) 0%, rgba(124,159,182,1) 100%)",
    11: "linear-gradient(0deg, rgba(111,106,102,1) 0%, rgba(167,158,143,1) 100%)",
  };

  const background = gradients[album_id];

  const lyricsText = lyrics.lyrics;
  const songTitle = lyrics.song_title;

  return (
    <div
      style={{
        background: background,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: "0",
        padding: "0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
          padding: "30px",
        }}
      >
        <h2>{songTitle}</h2>
        <br />
        <div style={{ whiteSpace: "pre-line" }}>{lyricsText}</div>
      </div>
    </div>
  );
}
