import { useNavigate } from "react-router-dom";
import "./BandPage.css";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useBand from "../../hooks/useBand";

const BandPage = () => {
  const navigate = useNavigate();

  const { band } = useBand();

  return (
    <main>
      <header className="band-page-header">
        <p className="band-page-header__title">
          Isobar.<span>fm</span>
        </p>
        <FontAwesomeIcon
          onClick={() => navigate(-1)}
          className="band-page-header__icon"
          icon={icon({ name: "arrow-left" })}
        />
      </header>
      <div className="band-page__img-wrapper">
        <img className="band-page__img" src={band?.image} alt="" />
        <h1 className="band-page__title">{band?.name}</h1>
        <img className="band-page__small-img" src={band?.image} alt="" />
      </div>
      <div className="band-page">
        <p className="band-page__info">
          <span className="band-page-info__text">{band?.genre}</span>
          <span className="band-page-info__text">{band?.numPlays} Plays</span>
        </p>
        <p className="band-page__description">{band?.biography}</p>
      </div>
    </main>
  );
};

export default BandPage;
