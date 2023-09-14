import "./SearchBar.css";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type searchBarType = { onInputChange: any };

const SearchBar = ({ onInputChange }: searchBarType) => {
  const onInputType = (e: any) => onInputChange(e.target.value.toLowerCase());

  return (
    <div className="search-bar">
      <div className="search-bar__input-wrapper">
        <input
          className="search-bar__input"
          type="text"
          onChange={(e) => onInputType(e)}
        />
        <FontAwesomeIcon
          className="search-bar__icon"
          icon={icon({ name: "magnifying-glass" })}
        />
      </div>
      <p className="search-bar__title">
        Isobar.<span>fm</span>
      </p>
    </div>
  );
};

export default SearchBar;
