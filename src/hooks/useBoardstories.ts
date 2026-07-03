import { useState, useEffect } from "react";
import type { Boardstory } from "../types/boardstory";
import { demoBoardstory } from "../data/demoBoardstory";

const STORAGE_KEY = "boardstories";

function loadFromStorage(): Boardstory[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) return JSON.parse(raw);
  return [demoBoardstory];
}

function saveToStorage(stories: Boardstory[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stories));
}

export function useBoardstories() {
  const [stories, setStories] = useState<Boardstory[]>(loadFromStorage);

  useEffect(() => {
    saveToStorage(stories);
  }, [stories]);

  function getById(id: string) {
    return stories.find((s) => s.id === id);
  }

  function save(story: Boardstory) {
    setStories((prev) => {
      const exists = prev.find((s) => s.id === story.id);
      if (exists) return prev.map((s) => (s.id === story.id ? story : s));
      return [...prev, story];
    });
  }

  function deleteById(id: string) {
    setStories((prev) => prev.filter((s) => s.id !== id));
  }

  return { stories, getById, save, deleteById };
}
