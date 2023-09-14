import Band from "./model";
import API from "../api";

const BANDS_URL = 'bands'

const getBands = async (): Promise<Band[]> => await API.get(BANDS_URL);

export default getBands;

export const getBandById = async (bandId: string): Promise<Band> => await API.get(`${BANDS_URL}/${bandId}`);
