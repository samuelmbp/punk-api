import { FormEventHandler } from "react";
import "./Navbar.scss";
import SearchBox from "../SearchBox/SearchBox";

type FilterOptions = {
    abv: boolean;
    brewedBefore2010: boolean;
    ph: boolean;
};

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
                label="Search Beer by Name"
                searchTerm={searchTerm}
                handleInput={handleInput}
            />
            <div className="checkbox-container">
                <label>
                    ABV &gt; 6
                    <input
                        type="checkbox"
                        checked={filterOptions.abv}
                        onChange={() => handleCheckboxChange("abv")}
                    />
                </label>
                <label>
                    Brewed before 2010
                    <input
                        type="checkbox"
                        checked={filterOptions.brewedBefore2010}
                        onChange={() =>
                            handleCheckboxChange("brewedBefore2010")
                        }
                    />
                </label>
                <label>
                    PH &lt; 4
                    <input
                        type="checkbox"
                        checked={filterOptions.ph}
                        onChange={() => handleCheckboxChange("ph")}
                    />
                </label>
            </div>
        </nav>
    );
};

export default Navbar;
