import type { Boardstory } from "../types/boardstory";

export const demoBoardstory: Boardstory = {
  id: "demo-1",
  title: "Die kleine Raupe",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  boards: [
    {
      id: "board-1",
      imageUrl: "https://picsum.photos/seed/raupe1/800/450",
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      textSections: [
        { id: "ts-1", content: "Es war einmal eine kleine Raupe." },
        { id: "ts-2", content: "Sie lebte auf einem großen grünen Blatt." },
      ],
    },
    {
      id: "board-2",
      imageUrl: "https://picsum.photos/seed/raupe2/800/450",
      textSections: [
        { id: "ts-3", content: "Jeden Tag aß sie mehr und mehr." },
        { id: "ts-4", content: "Bald war sie sehr, sehr satt." },
      ],
    },
    {
      id: "board-3",
      imageUrl: "https://picsum.photos/seed/raupe3/800/450",
      textSections: [
        { id: "ts-5", content: "Dann baute sie sich einen Kokon." },
        {
          id: "ts-6",
          content: "Und wurde zu einem wunderschönen Schmetterling.",
        },
      ],
    },

  ],
};
