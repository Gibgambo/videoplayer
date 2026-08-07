# Videoplayer & Boardstory

React/TypeScript-Showcase-Projekt: ein individuell gestalteter Video-Player auf Basis von [Vidstack](https://vidstack.io/) sowie ein "Boardstory"-Feature — eine Bilderbuch-artige Slideshow mit Audio, abschnittsweiser Textanzeige und einem eigenen Editor.

![Screenshot](src/assets/hero.png)

## Features

- **Video Player** — eigener Vidstack-Player mit selbstgebauten Controls (Play/Pause, Seek, Lautstärke, Zeit-Anzeige, Fullscreen) statt der Vidstack-Standard-UI.
- **Boardstory Player** — Slideshow aus einzelnen "Boards" (Bild + Audio + Textabschnitte), die per Klick/Pfeiltaste durchgeblättert wird; Text wird sukzessive eingeblendet, Audio läuft synchron über Vidstack.
- **Boardstory Editor** — CRUD-Oberfläche zum Anlegen und Bearbeiten von Boardstories und ihren Boards (Bild-URL, Audio-URL, Textabschnitte).
- **Kein Backend nötig** — Boardstories werden per `localStorage` persistiert (siehe `src/hooks/useBoardstories.ts`), inklusive einer Demo-Story als Startzustand.

## Tech-Stack

- React 19 + TypeScript
- Vite 8
- [@vidstack/react](https://vidstack.io/) für Video- und Audio-Wiedergabe
- react-router v8
- Tailwind CSS 4

## Setup

```bash
npm install
npm run dev
```

Die App läuft danach unter der von Vite ausgegebenen lokalen Adresse (üblicherweise `http://localhost:5173`).

### Weitere Skripte

| Befehl | Beschreibung |
|---|---|
| `npm run dev` | Startet den Dev-Server mit Hot Reload |
| `npm run build` | Typecheck (`tsc -b`) + Produktions-Build |
| `npm run preview` | Zeigt den Produktions-Build lokal an |
| `npm run lint` | Führt ESLint über das Projekt aus |

## Struktur

```
src/
├── components/
│   ├── controls/      # Wiederverwendbare Video-Player-Controls
│   ├── boardstory/     # Boardstory-Player-Komponenten (View, Controls, Audio, TextReveal)
│   └── editor/         # Boardstory-Editor
├── pages/              # Routen-Komponenten (Home, Player, Boardstory, Editor)
├── hooks/              # useBoardstories (localStorage-Persistenz)
├── types/              # Domänentypen (Boardstory, Board, TextSection)
└── data/               # Demo-Boardstory als Startdaten
```

### Routen

| Pfad | Seite |
|---|---|
| `/` | Übersicht aller Boardstories |
| `/player` | Video-Player |
| `/boardstory/:id` | Boardstory-Player |
| `/editor` | Liste/Anlage von Boardstories |
| `/editor/:id` | Boardstory bearbeiten |

## Hintergrund

Die ursprünglichen Design-Entscheidungen sind in `docs/implementation/` dokumentiert (Videoplayer- und Boardstory-Feature getrennt beschrieben).
