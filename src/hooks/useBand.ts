import { useEffect, useState } from "react";
import Band from "../lib/band/model";
import { getBandById } from "../lib/band/service";
import { useParams } from "react-router-dom";

const useBands = () => {

  const { bandId } = useParams<string>();

  const [band, setBand] = useState<Band>();

  useEffect(() => {
    if (band) return;
    updateBand(bandId);
  }, [bandId, band]);

  const updateBand = async (bandId?: string) => {
    if (bandId) {
      const band: Band = await getBandById(bandId);
      setBand(band);
    }
  };

  return { band };

}

export default useBands;