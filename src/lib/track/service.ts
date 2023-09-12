import Track from "./model";
import API from "../api";

const TRACKS_URL = 'tracks'

const getTracks = ():Promise<Track[]> => API.get(TRACKS_URL);

export default getTracks;

export const getTrackById = async (trackId: string) : Promise<Track> => await API.get(`${TRACKS_URL}/:${trackId}`);
