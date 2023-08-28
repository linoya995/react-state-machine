import { render, fireEvent } from "@testing-library/react";
import ToggleButton from "../components/containers/ToggleButton";
import "@testing-library/jest-dom";

describe("ToggleButton Component", () => {
  // Test initial state
  it("should render with initial state", () => {
    const { getByText } = render(<ToggleButton />);
    const button = getByText("Click me ❌");
    expect(button).toBeInTheDocument();
  });

  // Test toggle state
  it("should toggle state when button is clicked", () => {
    const { getByText } = render(<ToggleButton />);
    const button = getByText("Click me ❌");

    fireEvent.click(button);
    expect(button.textContent).toBe("Click me ✅");

    fireEvent.click(button);
    expect(button.textContent).toBe("Click me ❌");
  });
});
