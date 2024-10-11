import { Routes, BrowserRouter, Route } from "react-router-dom";
import HomePage from './pages/HomePage.jsx'
import Blog from './pages/Blog.jsx';
import Post from './pages/Post.jsx';
import NotFound from './pages/NotFound.jsx';
import DefaultLayout from "./DefaultLayout.jsx";
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { AuthProvider } from "./contexts/AuthProvider.jsx";

function App() {

  return (
    <>
    <AuthProvider>

      <BrowserRouter>
        {/* il layout di default */}
        <Routes>
          {/* //homepage  */}
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            {/* //Blog e post  */}
            {/* questa rotta è protetta  */}
            <Route path="/blog">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <Blog />
                  </ProtectedRoute>
                }
                />
              <Route path=":slug" element={<Post />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App
