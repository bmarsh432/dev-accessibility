import React from "react";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import App from "./App";

expect.extend(toHaveNoViolations);

describe("App renders", () => {
  test("App renders in accessible way", async () => {
    const { container } = render(<App />);
    const app = await axe(container);
    expect(app).toHaveNoViolations();
  });
});
