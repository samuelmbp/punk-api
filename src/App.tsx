import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import BeerInfo from "./components/BeerInfo/BeerInfo";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import beers from "./data/beers";
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
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Navbar
                                searchTerm={searchTerm}
                                onSearchTermChange={setSearchTerm}
                                filterOptions={filterOptions}
                                onFilterOptionsChange={
                                    handleFilterOptionsChange
                                }
                            />
                            <Main
                                beers={beers}
                                searchTerm={searchTerm}
                                filterOptions={filterOptions}
                            />
                        </>
                    }
                />
                <Route
                    path="/beer-info/:id"
                    element={<BeerInfo beers={beers} />}
                />
            </Routes>
        </div>
    );
};

export default App;
