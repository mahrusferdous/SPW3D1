import PostsPage from "./views/PostsPage";
import PostPage from "./views/PostPage";
import CreatePostPage from "./views/CreatePostPage";
import { Routes, Route } from "react-router-dom";
import UpdatePostPage from "./views/UpdatePostPage";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<PostsPage />} />
                <Route path="/:id" element={<PostPage />} />
                <Route path="/post" element={<CreatePostPage />} />
                <Route path="/post/:id" element={<UpdatePostPage />} />
            </Routes>
        </div>
    );
}

export default App;
