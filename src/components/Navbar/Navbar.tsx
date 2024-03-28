import { FormEventHandler } from "react";
import "./Navbar.scss";
import SearchBox from "../SearchBox/SearchBox";

type NavbarProps = {
    searchTerm: string;
    onSearchTermChange: (term: string) => void;
};

const Navbar = ({ searchTerm, onSearchTermChange }: NavbarProps) => {
    const handleInput: FormEventHandler<HTMLInputElement> = (event) => {
        onSearchTermChange(event.currentTarget.value);
    };

    return (
        <nav className="navbar-container">
            <h1 className="navbar-logo">Punk API</h1>
            <SearchBox
                label="Search Beer by Name"
                searchTerm={searchTerm}
                handleInput={handleInput}
            />
        </nav>
    );
};

export default Navbar;
