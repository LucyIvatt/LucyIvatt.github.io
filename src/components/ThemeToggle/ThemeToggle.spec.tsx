import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeToggle } from "./ThemeToggle";
import { Theme } from "@/utils/constants";
import "@testing-library/jest-dom";

describe("ThemeToggle Component", () => {
  it("should apply the dark theme by default", () => {
    render(<ThemeToggle />);

    expect(document.querySelector("html")?.classList.contains("dark")).toBe(
      true
    );
  });

  it("should toggle theme on button click", () => {
    render(<ThemeToggle />);

    const button = screen.getByRole("button");

    expect(document.querySelector("html")?.classList.contains("dark")).toBe(
      true
    );

    fireEvent.click(button);

    expect(document.querySelector("html")?.classList.contains("dark")).toBe(
      false
    );

    fireEvent.click(button);

    expect(document.querySelector("html")?.classList.contains("dark")).toBe(
      true
    );
  });

  it("should change icon on toggle", () => {
    render(<ThemeToggle />);

    const button = screen.getByRole("button");

    expect(screen.getByTestId("moon-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("sun-icon")).not.toBeInTheDocument();

    fireEvent.click(button);

    expect(screen.getByTestId("sun-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("moon-icon")).not.toBeInTheDocument();

    fireEvent.click(button);

    expect(screen.getByTestId("moon-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("sun-icon")).not.toBeInTheDocument();
  });
});
