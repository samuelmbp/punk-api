import { FormEventHandler } from "react";
import { FilterOptions } from "../../types/types";
import Checkbox from "../Checkbox/Checkbox";
import SearchBox from "../SearchBox/SearchBox";
import "./Navbar.scss";

type NavbarProps = {
    searchTerm: string;
    onSearchTermChange: (term: string) => void;
    filterOptions: FilterOptions;
    onFilterOptionsChange: (newOptions: FilterOptions) => void;
};

const Navbar = ({
    searchTerm,
    onSearchTermChange,
    filterOptions,
    onFilterOptionsChange,
}: NavbarProps) => {
    const handleInput: FormEventHandler<HTMLInputElement> = (event) => {
        onSearchTermChange(event.currentTarget.value);
    };

    const handleCheckboxChange = (option: keyof FilterOptions) => {
        const newOptions = {
            ...filterOptions,
            // Check || Uncheck Box.
            [option]: !filterOptions[option],
        };
        onFilterOptionsChange(newOptions);
    };

    return (
        <nav className="navbar-container">
            <h1 className="navbar-logo">Punk API</h1>
            <SearchBox
                label="Search 🍺 by Name"
                searchTerm={searchTerm}
                handleInput={handleInput}
            />
            <div className="checkbox-container">
                <Checkbox
                    label="ABV > 6"
                    checked={filterOptions.abv}
                    onChange={() => handleCheckboxChange("abv")}
                />
                <Checkbox
                    label="Brewed Before 2010"
                    checked={filterOptions.brewedBefore2010}
                    onChange={() => handleCheckboxChange("brewedBefore2010")}
                />
                <Checkbox
                    label="PH < 4"
                    checked={filterOptions.ph}
                    onChange={() => handleCheckboxChange("ph")}
                />
            </div>
        </nav>
    );
};

export default Navbar;
