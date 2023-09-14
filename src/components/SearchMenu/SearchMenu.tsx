import { useState } from "react";
import { sortBandAlphabetically, sortBandByPopularity } from "../../utils/band";
import Band from "../../lib/band/model";
import "./SearchMenu.css";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type searchMenuType = {
  shouldShowMenu: Boolean;
  filteredBands: Band[];
  onConditionChange: any;
};

const filterOptionsLibrary: any = {
  AlphabeticOrder: sortBandAlphabetically,
  Popularity: sortBandByPopularity,
};

const SearchMenu = ({
  shouldShowMenu,
  filteredBands,
  onConditionChange,
}: searchMenuType) => {
  const [openFilterMenu, setOpenFilterMenu] = useState<Boolean>(false);
  const [option, setOption] = useState<String>("");

  const onOptionChange = (option: string) => {
    setOption(option);
    return onConditionChange(filterOptionsLibrary[option](filteredBands));
  };

  return (
    <>
      {shouldShowMenu && (
        <div className="search-menu">
          <p className="search-menu__results">
            {filteredBands.length} <span>resultados</span>
          </p>
          <button
            className="search-menu__condition-button"
            onClick={() => setOpenFilterMenu(!openFilterMenu)}
          >
            <FontAwesomeIcon
              className="search-menu__icon"
              icon={icon({ name: "filter" })}
            />
          </button>
          {openFilterMenu && (
            <ul className="filter-menu">
              <li
                className={`filter-menu__item ${
                  option === "AlphabeticOrder"
                    ? "filter-menu__item--selected"
                    : ""
                }`}
                onClick={() => onOptionChange("AlphabeticOrder")}
              >
                Ordem alfabetica
              </li>
              <li
                className={`filter-menu__item ${
                  option === "Popularity" ? "filter-menu__item--selected" : ""
                }`}
                onClick={() => onOptionChange("Popularity")}
              >
                Popularidade
              </li>
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default SearchMenu;
