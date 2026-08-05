# videoplayer

Frontend-Showcase mit zwei Playern: einem Vidstack-Videoplayer und einem Boardstory-Player (bilderbuchartige Slideshow mit Audio-Vorlesung, CRUD-Editor, localStorage-Persistenz).

## Language

**Board**:
Eine einzelne Seite/Tafel einer Boardstory — Bild, optionales Vorlese-Audio, Textabschnitte (`textSections`).

**Boardstory**:
Eine Sammlung von Boards, die nacheinander abgespielt werden (wie ein digitales Bilderbuch).

**Untertitel**:
Die bestehenden `textSections` eines Boards, standardmäßig ausgeblendet. Der Untertitel-Button schaltet nur die Sichtbarkeit des gesamten Text-Blocks um — das bestehende "Weiter ▼"-Verhalten (abschnittsweise Freigabe per Klick, siehe `TextReveal`) bleibt davon unberührt.
_Avoid_: Text, Caption (im Sinne von "immer sichtbarer Text" — das ist nicht mehr die Default-Bedeutung)

Alle vier neuen Buttons (Untertitel, Impuls, Quiz, Suchspiel) sitzen in `BoardstoryControls` neben Vor/Zurück und sind nur sichtbar, wenn das aktuelle Board die jeweiligen Daten besitzt. Kein Auto-Trigger/Timing (siehe [[0001-board-stays-image-audio-text-not-video]]).

**Impuls**:
Eine Diskussions-/Reflexionsfrage zu einem Board, per Impuls-Button eingeblendet (z.B. als Overlay). Ein Board hat eine Liste von Impulsfragen (0 bis n). Jeder Klick auf den Button zeigt die nächste; nach der letzten geht es zurück zur ersten (Loop). Gedacht, um mit Kindern ins Gespräch zu kommen.
_Avoid_: Frage (zu unspezifisch — Quiz hat auch Fragen, aber andere Funktion)

**Quiz**:
Eine Multiple-Choice-Frage zu einem Board mit genau 3 Antwortoptionen und richtig/falsch-Feedback nach Auswahl. Bei falscher Antwort darf erneut gewählt werden (mit Feedback), bis die richtige gefunden ist. Ein Board hat höchstens eine Quizfrage.
_Avoid_: Impuls (offene Diskussionsfrage ohne richtig/falsch — andere Funktion)

**Suchspiel**:
Ein Klick-Suchspiel zu einem Board: Icon erscheint, Klick zeigt eine Frage ("Wo schläft Dr. Brumm?") + Button "Auf zur Suche", danach muss im Boardbild die richtige Stelle (Zielbereich) angeklickt werden. Zielbereich ist ein Kreis (Mittelpunkt + Radius, in % der Bildgröße, editierbar per Klick+Radius-Slider im Editor mit Live-Vorschau). Bei Treffer: Spotlight-Effekt (Rest abgedunkelt) + kurz sichtbares grünes Häkchen, dann Erfolgsmeldung + Weiter-Button. Bei Fehlklick: kurzer Shake, sonst keine Reaktion. Ein Board hat höchstens ein Suchziel (Stand jetzt — bewusst nicht mehrere pro Runde).
_Avoid_: Quiz (kein Multiple-Choice, sondern Klick-Ziel im Bild)
