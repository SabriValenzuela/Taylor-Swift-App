import React, { useEffect, useState } from "react";
import { getAlbums } from "../api";
import "./Cards.css";

export default function Cards() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const albumsData = await getAlbums();
      setAlbums(albumsData);
    };
    fetchAlbums();
  }, []);

  console.log(albums);

  return (
    <section class="articles">
      {albums.map((item) => (
        <article>
          <div class="article-wrapper">
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/${item.album_id}.png`}
                alt=""
              />
            </figure>
            <div class="article-body">
              <h2>{item.title}</h2>
              <p>{item.release_date}</p>
              <a href="#" class="read-more">
                Ver canciones{" "}
                <span class="sr-only">about this is some title</span>
              </a>
            </div>
          </div>
        </article>
      ))}
      ;
      {/*  <article>
        <div class="article-wrapper">
          <figure>
            <img src="./fearless.jpg" alt="" />
          </figure>
          <div class="article-body">
            <h2>This is some title</h2>
            <p>
              Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
              euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
              lobortis porta. Vestibulum ultrices iaculis enim imperdiet
              egestas.
            </p>
            <a href="#" class="read-more">
              Read more <span class="sr-only">about this is some title</span>
            </a>
          </div>
        </div>
      </article>
      <article>
        <div class="article-wrapper">
          <figure>
            <img src="./speakNow.jpg" alt="" />
          </figure>
          <div class="article-body">
            <h2>This is some title</h2>
            <p>
              Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
              euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
              lobortis porta. Vestibulum ultrices iaculis enim imperdiet
              egestas.
            </p>
            <a href="#" class="read-more">
              Read more <span class="sr-only">about this is some title</span>
            </a>
          </div>
        </div>
      </article> */}
    </section>
  );
}
