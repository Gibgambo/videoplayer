import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router";
import { BoardstoryPlayerPage } from "./BoardstoryPlayerPage";
import { demoBoardstory } from "../data/demoBoardstory";
import userEvent from "@testing-library/user-event";

function renderPlayerPage() {
  return render(
    <MemoryRouter initialEntries={[`/boardstory/${demoBoardstory.id}`]}>
      <Routes>
        <Route path="/boardstory/:id" element={<BoardstoryPlayerPage />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("BoardstoryPlayerPage", () => {
  it("renders the story title and the first board's image", () => {
    renderPlayerPage();

    expect(screen.getByText(demoBoardstory.title)).toBeInTheDocument();
    expect(screen.getByAltText("Board Bild")).toBeInTheDocument();
  });

  it("resets board-local interaction state when the board changes", async () => {
    const user = userEvent.setup();
    renderPlayerPage();

    const toggle = screen.getByRole("button", { name: "Weitere Optionen" });
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");

    await user.click(screen.getByRole("button", { name: "Weiter →" }));

    expect(
      screen.getByRole("button", { name: "Weitere Optionen" }),
    ).toHaveAttribute("aria-expanded", "false");
  });

  it("navigates between boards with the prev/next buttons and disables buttons at the boundaries", async () => {
    const user = userEvent.setup();
    renderPlayerPage();

    const prevButton = screen.getByRole("button", { name: "← Zurück" });
    const nextButton = screen.getByRole("button", { name: "Weiter →" });

    expect(prevButton).toBeDisabled();
    expect(screen.getByAltText("Board Bild")).toHaveAttribute(
      "src",
      demoBoardstory.boards[0].imageUrl,
    );

    await user.click(nextButton);
    await user.click(nextButton);

    expect(nextButton).toBeDisabled();
    expect(screen.getByAltText("Board Bild")).toHaveAttribute(
      "src",
      demoBoardstory.boards[2].imageUrl,
    );

    await user.click(prevButton);

    expect(nextButton).not.toBeDisabled();
    expect(screen.getByAltText("Board Bild")).toHaveAttribute(
      "src",
      demoBoardstory.boards[1].imageUrl,
    );
  });
});
