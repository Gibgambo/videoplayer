# Custom Video Player mit Vidstack

## Ziel

Übungsprojekt zum Kennenlernen von Vidstack und React-Patterns. Schrittweiser Aufbau von Vidstack-Defaults hin zu vollständig eigenen Custom Controls.

## Architektur-Entscheidungen

| Thema | Entscheidung | Begründung |
|---|---|---|
| Lernziel | Vidstack-Basics + React-Patterns | Beides — erst verstehen, dann selbst bauen |
| Video-Quelle | MP4 (lokal / CDN) | Einfachster Einstieg, keine Streaming-Infrastruktur nötig |
| Build-Tool | Vite + React | Schnell, modern, kein Overhead |
| Sprache | TypeScript | Typsicherheit hilft beim Verstehen der Vidstack-APIs |
| Styling | Tailwind CSS | Vidstack hat native Tailwind-Integration, schnelles Prototyping |
| Features | Basis-Set | Play/Pause, Lautstärke, Seek, Fullscreen, Zeit-Anzeige |

## Dateien

| Datei | Aktion | Beschreibung |
|---|---|---|
| `package.json` | erstellen | Vite + React + TS + Tailwind + Vidstack |
| `vite.config.ts` | erstellen | Vite-Konfiguration |
| `tailwind.config.ts` | erstellen | Tailwind-Konfiguration |
| `src/main.tsx` | erstellen | React-Einstiegspunkt |
| `src/App.tsx` | erstellen | Root-Komponente mit Player |
| `src/components/Player.tsx` | erstellen | Vidstack-Player mit Default-Controls (Schritt 3) |
| `src/components/controls/PlayPauseButton.tsx` | erstellen | Eigener Play/Pause-Button |
| `src/components/controls/SeekBar.tsx` | erstellen | Eigene Seek-Leiste |
| `src/components/controls/VolumeControl.tsx` | erstellen | Eigene Lautstärke-Steuerung |
| `src/components/controls/TimeDisplay.tsx` | erstellen | Zeit-Anzeige (aktuell / gesamt) |
| `src/components/controls/FullscreenButton.tsx` | erstellen | Fullscreen-Toggle |
| `src/components/controls/ControlBar.tsx` | erstellen | Zusammensetzung aller Controls |
| `src/hooks/useMediaStore.ts` | erstellen | Custom Hook für Vidstack-State |
| `index.html` | erstellen | HTML-Einstiegspunkt |

## Implementierungsplan

### Step 1 — Projekt-Setup
Vite-Projekt erstellen, TypeScript konfigurieren, Tailwind installieren und konfigurieren. Sicherstellen, dass `npm run dev` eine leere React-App zeigt.

### Step 2 — Vidstack installieren & konfigurieren
`@vidstack/react` installieren, Vidstack-Styles importieren, Tailwind-Plugin einbinden. Einen minimalen Player mit einer Test-MP4 rendern (komplett mit Vidstack Default-UI).

### Step 3 — Vidstack Default-Player erkunden
Den fertigen Default-Player analysieren: Welche Komponenten bietet Vidstack? Wie funktioniert `useMediaStore`? Kommentierter Code als Lerngrundlage.

### Step 4 — Custom Play/Pause Button
Vidstack Default-Controls entfernen, ersten eigenen Button bauen. Verbindung zum Player-State via `useMediaStore` und `useMediaRemote`.

### Step 5 — Seek-Leiste (Fortschrittsbalken)
Eigene Seek-Leiste mit `<input type="range">`, aktueller Position und Gesamtdauer. Klick-/Drag-Interaktion mit Vidstack verbinden.

### Step 6 — Zeit-Anzeige
Aktuelle Zeit und Gesamtdauer formatiert anzeigen (z.B. `1:23 / 5:42`). Eigene Formatierungsfunktion schreiben.

### Step 7 — Lautstärke-Steuerung
Lautstärke-Slider + Mute-Button. Vidstack-State für Volume und Muted nutzen.

### Step 8 — Fullscreen-Toggle
Fullscreen-Button mit eigenem Icon. Browser Fullscreen API über Vidstack-Remote nutzen.

### Step 9 — ControlBar zusammenbauen
Alle Controls in einer `ControlBar`-Komponente zusammenfassen. Styling mit Tailwind: Overlay über dem Video, Ein-/Ausblenden bei Hover.
