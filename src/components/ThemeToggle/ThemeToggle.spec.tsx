import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeToggle } from "./ThemeToggle";
import { Theme } from "@/utils/constants";
import "@testing-library/jest-dom";

beforeEach(() => {
  Storage.prototype.setItem = jest.fn();
  Storage.prototype.getItem = jest.fn().mockReturnValue(Theme.Dark);
  jest.clearAllMocks();
});

describe("ThemeToggle Component", () => {
  it("should apply the dark theme by default if localStorage is empty", () => {
    Storage.prototype.getItem = jest.fn(() => null);

    render(<ThemeToggle />);

    expect(document.querySelector("html")?.classList.contains("dark")).toBe(
      true
    );
  });

  it("should load theme from localStorage", () => {
    Storage.prototype.getItem = jest.fn().mockReturnValue(Theme.Light);

    render(<ThemeToggle />);

    expect(document.querySelector("html")?.classList.contains("dark")).not.toBe(
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

  it("should save theme to local storage on toggle", () => {
    render(<ThemeToggle />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(localStorage.setItem).toHaveBeenCalledWith("theme", Theme.Light);

    fireEvent.click(button);

    expect(localStorage.setItem).toHaveBeenCalledWith("theme", Theme.Dark);
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
