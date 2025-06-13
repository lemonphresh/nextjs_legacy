import { render, screen } from "@testing-library/react";
import { describe, expect,it } from "vitest";

import Container from "./Container";

describe("Container", () => {
  it("renders children inside the container", () => {
    render(
      <Container>
        <p>Hello world</p>
      </Container>,
    );
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });
});
