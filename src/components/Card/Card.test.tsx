import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card Component", () => {
    const props = {
        image: "test.jpg",
        name: "Test Beer",
        tagline: "Test Tagline",
        description:
            "This is a test description. It should be truncated for testing.",
    };

    it("should render the Card component", () => {
        render(<Card {...props} />);

        expect(screen.getByAltText(props.name)).toBeInTheDocument();
        expect(screen.getByText(props.name)).toBeInTheDocument();
        expect(screen.getByText(`#${props.tagline}`)).toBeInTheDocument();
        expect(
            screen.getByText("This is a test description.")
        ).toBeInTheDocument();
    });
});
