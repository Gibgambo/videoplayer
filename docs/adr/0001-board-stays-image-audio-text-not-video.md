# Board bleibt Bild+Audio+Text, kein Video

Beim Referenzvorbild (Onilo) ist ein Board vermutlich ein Video mit eingebetteter Vorlesung und Untertiteln als synchroner Track. Für die Erweiterung um Untertitel-, Impuls-, Quiz- und Suchspiel-Button bleiben wir bewusst beim bestehenden Modell (`imageUrl` + optionales `audioUrl` + `textSections`) statt jetzt auf videobasierte Boards umzustellen.

**Warum:** Eine Video-Migration ist ein eigenständiger, deutlich größerer Umbau (Datenmodell, Editor-UX für Video/Untertitel-Dateien, Hosting) und würde den Rahmen dieser Erweiterung sprengen. Die vier neuen Features lassen sich sauber auf dem aktuellen Modell umsetzen (Suchspiel-Klickziele funktionieren z.B. genauso auf einem statischen Bild wie auf einem Video-Frame), ohne dass die Arbeit bei einer späteren Video-Migration verloren wäre.

**Konsequenz:** Der Untertitel-Button schaltet die Sichtbarkeit der bestehenden `textSections` um (kein echtes zeitsynchrones Mitlesen zur Audiospur, da keine Timing-Daten existieren). Eine Video-Migration bleibt ein separates, später zu entscheidendes Vorhaben.
