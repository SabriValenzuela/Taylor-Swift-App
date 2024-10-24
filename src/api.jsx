import axios from "axios";

const api_url = "https://taylor-swift-api.sarbo.workers.dev";

const api = axios.create({
  baseURL: api_url,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAlbums = async () => {
  try {
    const response = await api.get("/albums");
    return response.data;
  } catch (error) {
    console.error("Error en obtener los datos de los albums");
    throw error;
  }
};

export const getSongs = async (id) => {
  try {
    const response = await api.get(`/albums/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error en obtener los datos de las canciones");
    throw error;
  }
};

export const getLyrics = async (id) => {
  try {
    const response = await api.get(`/lyrics/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error en obtener las letras de las canciones");
    throw error;
  }
};