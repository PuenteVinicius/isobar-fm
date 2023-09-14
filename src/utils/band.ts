import Band from "../lib/band/model";

export const sortBandAlphabetically = (bands: Band[]): Array<Band> => {
  return bands.sort((a: Band, b: Band) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
};

export const sortBandByPopularity = (bands: Band[]): Array<Band> => {
  return bands.sort((a: Band, b: Band) => {
    if (a.numPlays < b.numPlays) {
      return -1;
    }
    if (a.numPlays > b.numPlays) {
      return 1;
    }
    return 0;
  });
};

const filterBandByTerm = (bands: Band[], term: string): Array<Band> => bands.filter((band: Band) => band.name.toLocaleLowerCase().includes(term));

export default filterBandByTerm;