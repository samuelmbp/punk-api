import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
    it("should render the Navbar component", () => {
        render(
            <Navbar
                searchTerm=""
                onSearchTermChange={() => {}}
                filterOptions={{
                    abv: false,
                    brewedBefore2010: false,
                    ph: false,
                }}
                onFilterOptionsChange={() => {}}
            />
        );

        expect(screen.getByText("BrewDog's Beer")).toBeInTheDocument();
        expect(screen.getByAltText("Logo")).toBeInTheDocument();
        expect(screen.getByLabelText("Search 🍺 by Name")).toBeInTheDocument();
        expect(screen.getByLabelText("ABV > 6")).toBeInTheDocument();
        expect(screen.getByLabelText("Brewed Before 2010")).toBeInTheDocument();
        expect(screen.getByLabelText("PH < 4")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("E.g.: Buzz"));
    });
});
