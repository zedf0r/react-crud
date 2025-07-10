import { Route, Routes } from "react-router-dom";
import { MainPage, NewPostPage, PostEdit } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/posts/new" element={<NewPostPage />} />
      <Route path="/posts/:id" element={<PostEdit />} />
    </Routes>
  );
}

export default App;
