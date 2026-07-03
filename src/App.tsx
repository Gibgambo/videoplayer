import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { VideoPlayerPage } from "./pages/VideoPlayerPage";
import { BoardstoryPlayerPage } from "./pages/BoardstoryPlayerPage";
import { EditorPage } from "./pages/EditorPage";
import { StoryEditorPage } from "./pages/StoryEditorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/player" element={<VideoPlayerPage />} />
        <Route path="/boardstory/:id" element={<BoardstoryPlayerPage />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/editor/:id" element={<StoryEditorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
