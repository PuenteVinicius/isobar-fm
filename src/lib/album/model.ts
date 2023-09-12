import Band from "../band/model";
import Track from "../track/model";

export default interface Album {
	name: string,
  id: string,
  releaseDate: string,
  image: string,
  numPlays: number,
  band: Band,
	tracks: Track[],
};