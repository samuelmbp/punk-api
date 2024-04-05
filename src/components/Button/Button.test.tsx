import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
    it("should be called with a label", () => {
        render(<Button label={"Test for button label"} />);

        expect(screen.getByText("Test for button label")).toBeInTheDocument();
    });
});
