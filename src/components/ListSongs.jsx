import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAlbums, getSongs } from "../api";
import ListGroup from "react-bootstrap/ListGroup";
import "./ListSongs.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ListSongs() {
  const { id } = useParams();

  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const songsData = await getSongs(id);
      setSongs(songsData);
    };
    fetchSongs();
  }, [id]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const albumsData = await getAlbums();
      setAlbums(albumsData);
    };
    fetchAlbums();
  }, []);

  const albumTitles = albums
    .filter((album) => album.album_id === parseInt(id, 10))
    .map((album) => album.title);

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

  const background = gradients[id];


  console.log(albums);
  console.log(albumTitles);

  console.log(songs);

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
      <h1 className="title-album">{albumTitles}</h1>
      <div className="list-songs">
        <ListGroup>
          {songs.map((item) => (
            <ListGroup.Item>
              <i className="bi bi-stars "></i>
              <Link to={`/song/${item.song_id}`} state={{ album_id: id }}>
                {item.title}
              </Link>
              {/*               <a href={`/song/${item.song_id}`}> {item.title}</a>
               */}{" "}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}
