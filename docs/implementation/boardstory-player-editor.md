# Boardstory Player & Editor

## Ziel

Erweiterung des bestehenden Vidstack-Videoplayers um einen Boardstory-Player und einen Basis-Editor — als Übungsprojekt für die Onilo-Bewerbung (Vidstack, React, TypeScript).

## Architektur-Entscheidungen

| Thema | Entscheidung | Begründung |
|---|---|---|
| Videoplayer | Bleibt erhalten, beide Modi parallel | Stellenbeschreibung: Vidstack für alle Player-Modi |
| Routing | React Router — `/`, `/player`, `/boardstory`, `/editor` | Realistisches SPA-Pattern, zeigt Routing-Kenntnisse |
| Datenspeicherung | localStorage + Demo-Boardstory als Startzustand | Kein Backend nötig, Elixir-Backend später andockbar |
| Bilder | URLs (Textfeld im Editor) | Kein File-Upload-Aufwand, sofort nutzbar |
| Audio pro Board | Vidstack `MediaPlayer` mit Audio-Source | Konsistent mit Stack, zeigt Vidstack-Kompetenz |
| Textanzeige | Sukzessiv — abschnittsweise per Klick/Pfeil | Kern-Feature von Onilo-Boardstories |
| Editor-Scope | Basis: Boardstory + Boards CRUD, Felder pro Board | Solider, fertiggestellter Umfang > halbfertiger Overkill |

## Datenmodell

```typescript
interface TextSection {
  id: string;
  content: string;
}

interface Board {
  id: string;
  imageUrl: string;
  audioUrl?: string;
  textSections: TextSection[];
}

interface Boardstory {
  id: string;
  title: string;
  boards: Board[];
  createdAt: string;
  updatedAt: string;
}
```

## Dateien

| Datei | Aktion | Beschreibung |
|---|---|---|
| `src/main.tsx` | ändern | React Router `BrowserRouter` einbinden |
| `src/App.tsx` | ändern | Routen definieren (`/`, `/player`, `/boardstory/:id`, `/editor/:id`) |
| `src/types/boardstory.ts` | erstellen | TypeScript-Typen (TextSection, Board, Boardstory) |
| `src/data/demoBoardstory.ts` | erstellen | Eine Demo-Boardstory mit 3 Boards als Startzustand |
| `src/hooks/useBoardstories.ts` | erstellen | localStorage-Hook: laden, speichern, CRUD |
| `src/pages/HomePage.tsx` | erstellen | Startseite mit Links zu allen Modi |
| `src/pages/VideoPlayerPage.tsx` | erstellen | Bestehender Videoplayer, aus App.tsx ausgelagert |
| `src/pages/BoardstoryPlayerPage.tsx` | erstellen | Boardstory-Player-Seite |
| `src/pages/EditorPage.tsx` | erstellen | Editor-Seite |
| `src/components/boardstory/BoardView.tsx` | erstellen | Einzelnes Board: Bild + sukzessiver Text |
| `src/components/boardstory/TextReveal.tsx` | erstellen | Sukzessive Text-Anzeige mit Abschnitten |
| `src/components/boardstory/BoardstoryControls.tsx` | erstellen | Navigation (Board vor/zurück), Audio-Controls |
| `src/components/editor/BoardList.tsx` | erstellen | Liste aller Boards mit Sortierung (hoch/runter) |
| `src/components/editor/BoardEditor.tsx` | erstellen | Einzelnes Board bearbeiten (Bild-URL, Text, Audio) |
| `src/components/controls/` | behalten | Alle bestehenden Video-Controls unverändert |

## Implementierungsplan

### Step 1 — React Router einrichten
`react-router-dom` installieren. `BrowserRouter` in `main.tsx`. `App.tsx` mit Routen für `/`, `/player`, `/boardstory/:id`, `/editor/:id`. Bestehenden Videoplayer-Code in `VideoPlayerPage.tsx` auslagern. `HomePage` mit einfachen Links zu allen Routen.

### Step 2 — Datenmodell & localStorage-Hook
`src/types/boardstory.ts` mit TypeScript-Interfaces. `src/data/demoBoardstory.ts` mit einer Beispiel-Boardstory (3 Boards, Bild-URLs von picsum.photos, Lorem-Text in Abschnitten, kein Audio zunächst). `src/hooks/useBoardstories.ts` mit Funktionen: `getAll`, `getById`, `save`, `deleteById`.

### Step 3 — BoardView Komponente
`BoardView.tsx`: Zeigt das Bild eines Boards (volle Breite). `TextReveal.tsx`: Zeigt Textabschnitte sukzessiv an — ein Button/Pfeil blendet den nächsten Abschnitt ein. State: `visibleSections` (Index).

### Step 4 — Boardstory Player zusammenbauen
`BoardstoryControls.tsx`: Vorheriges/nächstes Board, aktueller Board-Fortschritt (z.B. "3 / 8"). `BoardstoryPlayerPage.tsx`: Lädt Boardstory per ID aus localStorage, rendert `BoardView` + `BoardstoryControls`.

### Step 5 — Audio via Vidstack im Player
Audio-URL pro Board über Vidstack `MediaPlayer` (audio-only) abspielen. Play/Pause in `BoardstoryControls` integrieren. Beim Board-Wechsel Audio stoppen und neu laden.

### Step 6 — Editor: Boardstory-Liste & CRUD
`EditorPage.tsx`: Listet alle Boardstories aus localStorage. Neue Boardstory erstellen (Titel-Eingabe). Boardstory löschen. Link zum Bearbeiten einer Boardstory.

### Step 7 — Editor: Boards bearbeiten
`BoardList.tsx`: Zeigt alle Boards einer Boardstory, Board hinzufügen/löschen, Reihenfolge mit Hoch/Runter-Buttons ändern. `BoardEditor.tsx`: Felder für Bild-URL, Audio-URL, Textabschnitte (hinzufügen/löschen/bearbeiten). Live-Vorschau des Bildes.

### Step 8 — Feinschliff & Navigation
HomePage gestalten (Boardstory-Karten mit Titel + erstes Bild als Vorschau). Zwischen Editor und Player direkt navigieren (Button "Vorschau" im Editor). Keyboard-Navigation im Player (Pfeiltasten).
