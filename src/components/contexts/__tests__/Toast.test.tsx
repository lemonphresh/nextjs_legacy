import { act, cleanup,fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { afterEach,beforeEach, describe, expect, it, vi } from "vitest";

import { ToastContainer,ToastProvider, useToast } from "../Toast";

function TestAddButton() {
  const { addToast } = useToast();
  return <button onClick={() => addToast("Hello World")}>Add Toast</button>;
}

describe("Toast auto-remove (real timers)", () => {
  beforeEach(() => {
    vi.useRealTimers(); // required to make the setTimeout work reliably
  });

  afterEach(() => {
    cleanup(); // make sure nothing is leaking
  });

  it("should add and auto-remove toast after 3 seconds", async () => {
    render(
      <ToastProvider>
        <TestAddButton />
        <ToastContainer />
      </ToastProvider>,
    );

    await act(async () => {
      fireEvent.click(screen.getByText("Add Toast"));
    });

    expect(screen.getByText("Hello World")).toBeDefined();

    await waitFor(
      () => {
        expect(screen.queryByText("Hello World")).toBeNull();
      },
      { timeout: 3100 },
    );
  });
});
