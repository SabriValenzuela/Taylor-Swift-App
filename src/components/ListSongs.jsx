import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSongs } from "../api";
import ListGroup from "react-bootstrap/ListGroup";

export default function ListSongs() {
  const { id } = useParams();

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const songsData = await getSongs(id);
      setSongs(songsData);
    };
    fetchSongs();
  }, [id]);

  console.log(songs);

  return (
    <div>
      <ListGroup>
        {songs.map((item) => (
          <ListGroup.Item>
            <a href={`/song/${item.song_id}`}> {item.title}</a>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
