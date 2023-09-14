import { useNavigate } from "react-router-dom";
import Band from "../../lib/band/model";
import "./BandList.css";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type BandListProps = { bands: Band[]; searchPerformed: Boolean };

const BandList = ({ bands, searchPerformed }: BandListProps) => {
  const navigate = useNavigate();

  return (
    <>
      {bands.length === 0 ? (
        <div className="no-results">
          <p className="no-results__text">Sem resultados</p>
          <FontAwesomeIcon
            className="no-results__icon"
            icon={icon({ style: "regular", name: "face-sad-cry" })}
          />
        </div>
      ) : (
        <ul
          className={`band-list ${
            searchPerformed ? "band-list--filter-opened" : ""
          }`}
        >
          {bands.map((band) => (
            <li
              className="band-list-item"
              onClick={() => navigate(`band/${band.id}`)}
              key={`band-${band.name}`}
              data-testid={`band-${band.name}`}
            >
              <img
                className="band-list-item__image"
                src={band.image}
                alt="Imagem representativa da banda"
              />
              <div className="band-list-item__content">
                <h4 className="band-list-item__name">{band.name}</h4>
                <p className="band-list-item__plays">
                  {band.numPlays}
                  <span> plays</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default BandList;
