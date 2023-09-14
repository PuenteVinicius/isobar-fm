import { useEffect, useState } from "react";
import BandList from "../../components/BandList/BandList";
import Band from "../../lib/band/model";
import "./Home.css";
import useBands from "../../hooks/useBands";
import filterBandByTerm from "../../utils/band";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchMenu from "../../components/SearchMenu/SearchMenu";

const Home = () => {
  const { bands } = useBands();

  const [filteredBands, setFilteredBands] = useState<Band[]>([]);
  const [isPerformingSearch, setIsPerformingSearch] = useState<Boolean>(false);

  useEffect(() => {
    setFilteredBands(bands);
  }, [bands]);

  const inputHandler = (value: string) => {
    const isPerformingSearch = !!value;
    const filteredBands = isPerformingSearch
      ? filterBandByTerm(bands, value)
      : bands;

    setIsPerformingSearch(isPerformingSearch);
    setFilteredBands(filteredBands);
  };

  const conditionHandler = (bands: Band[]) => {
    const filteredBands = [...bands];
    setFilteredBands(filteredBands);
  };

  return (
    <main>
      <header className="header">
        <SearchBar onInputChange={(value: string) => inputHandler(value)} />
        <SearchMenu
          shouldShowMenu={isPerformingSearch && filteredBands.length !== 0}
          filteredBands={filteredBands}
          onConditionChange={(bands: Band[]) => conditionHandler(bands)}
        />
      </header>
      <section>
        <BandList bands={filteredBands} searchPerformed={isPerformingSearch} />
      </section>
    </main>
  );
};

export default Home;
