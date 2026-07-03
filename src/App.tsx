import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { VideoPlayerPage } from "./pages/VideoPlayerPage";
import { BoardstoryPlayerPage } from "./pages/BoardstoryPlayerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/player" element={<VideoPlayerPage />} />
        <Route path="/boardstory/:id" element={<BoardstoryPlayerPage />} />
        <Route
          path="/editor"
          element={
            <div className="text-white p-8">Editor (kommt in Step 6)</div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
