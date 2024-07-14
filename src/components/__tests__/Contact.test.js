import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("Should load button component", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Should load input component", () => {
  render(<Contact />);
  const inp = screen.getByPlaceholderText("Message");
  expect(inp).toBeInTheDocument();
});

test("Should load 2 input components", () => {
  render(<Contact />);
  const inputBoxes = screen.getByRole("textbox");
  expect(inputBoxes).toBeInTheDocument();
});
