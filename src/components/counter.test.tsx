import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./counter";

describe("Counter", () => {
  it("counts up and down", async () => {
    const user = userEvent.setup();
    render(<Counter start={2} />);
    await user.click(screen.getByRole("button", { name: "Increase" }));
    expect(screen.getByRole("status")).toHaveTextContent("3");
    await user.click(screen.getByRole("button", { name: "Decrease" }));
    await user.click(screen.getByRole("button", { name: "Decrease" }));
    expect(screen.getByRole("status")).toHaveTextContent("1");
  });
});
