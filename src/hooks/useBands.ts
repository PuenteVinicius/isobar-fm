import { useEffect, useState } from "react";
import Band from "../lib/band/model";
import getBands from "../lib/band/service";

const useBands = () => {

  const [bands, setBands] = useState<Band[]>([]);

  useEffect(() => {
    if (bands?.length === 0) {
      updateBands();
    }
  }, [bands, setBands]);

  const updateBands = async () => {
    const bands: Band[] = await getBands();
    setBands(bands);
  };

  return { bands };

}

export default useBands;