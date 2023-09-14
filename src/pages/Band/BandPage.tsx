import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Band from "../../lib/band/model";
import { getBandById } from "../../lib/band/service";

const BandPage = () => {
  const { bandId } = useParams<string>();
  const navigate = useNavigate();

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

  return (
    <div>
      <h1>Band page</h1>
      <div>{band?.id}</div>
      <div>{band?.image}</div>
      <div>{band?.name}</div>
      <div>{band?.numPlays}</div>
      <ul>
        {band?.albums.map((albumId) => (
          <li>
            <div
              onClick={() =>
                navigate(`/album/${albumId}`, {
                  replace: true,
                })
              }
            >
              {albumId}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BandPage;
