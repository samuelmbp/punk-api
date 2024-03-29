import { useState } from "react";
import "./App.scss";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import { FilterOptions } from "./types/types";

const App = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filterOptions, setFilterOptions] = useState<FilterOptions>({
        abv: false,
        brewedBefore2010: false,
        ph: false,
    });

    const handleFilterOptionsChange = (newOptions: FilterOptions) => {
        setFilterOptions(newOptions);
    };

    return (
        <div className="app-container">
            <Navbar
                searchTerm={searchTerm}
                onSearchTermChange={setSearchTerm}
                filterOptions={filterOptions}
                onFilterOptionsChange={handleFilterOptionsChange}
            />
            <Main searchTerm={searchTerm} filterOptions={filterOptions} />
        </div>
    );
};

export default App;
