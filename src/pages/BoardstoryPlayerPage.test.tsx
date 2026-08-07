import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router";
import { BoardstoryPlayerPage } from "./BoardstoryPlayerPage";
import { demoBoardstory } from "../data/demoBoardstory";

describe("BoardstoryPlayerPage", () => {
  it("renders the story title and the first board's image", () => {
    render(
      <MemoryRouter initialEntries={[`/boardstory/${demoBoardstory.id}`]}>
        <Routes>
          <Route path="/boardstory/:id" element={<BoardstoryPlayerPage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText(demoBoardstory.title)).toBeInTheDocument();
    expect(screen.getByAltText("Board Bild")).toBeInTheDocument();
  });
});
