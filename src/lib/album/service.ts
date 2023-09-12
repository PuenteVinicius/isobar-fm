import API from "../api";
import Album from "./model";

const ALBUMS_URL = 'albums'

const getAlbums = async (): Promise<Album[]> => await API.get(ALBUMS_URL);

export default getAlbums;

export const getAlbumById = async (albumId: string): Promise<Album> => await API.get(`${ALBUMS_URL}/:${albumId}`);