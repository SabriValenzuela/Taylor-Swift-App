import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLyrics } from "../api";
import ListGroup from "react-bootstrap/ListGroup";

export default function Lyrics() {
  const { song_id } = useParams();

  const [lyrics, setLyrics] = useState("");

  useEffect(() => {
    const fetchlyrics = async () => {
      const lyricsData = await getLyrics(song_id);
      setLyrics(lyricsData);
    };
    fetchlyrics();
  }, [song_id]);

  console.log(lyrics);

  return (
    <div>
      <ListGroup>
        <ListGroup.Item>{lyrics.lyrics}</ListGroup.Item>
      </ListGroup>
    </div>
  );
}
