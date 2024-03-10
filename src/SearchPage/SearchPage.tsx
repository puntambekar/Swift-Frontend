import { SearchBar } from "./Components/SearchBar"
import { SportsTiles } from "./Components/SportTiles"
import { SportsTile } from "./Components/SportsTile";

export const SearchPage = () => {
    return (
        <div>
            <div className="container">
                <SearchBar />
            </div>

            <div className="container">
              <SportsTiles/>
            </div>
        </div>);




}