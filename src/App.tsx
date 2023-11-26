import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage/HomePage'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { PostPage } from './pages/PostPage/PostPage'
import { PostsPage } from './pages/PostsPage/PostsPage'
import { EditProfile } from './pages/EditProfile/EditProfile'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import { CreatePost } from './pages/CreatePostPage/CreatePostPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/edit" element={<EditProfile />} />

          <Route path="/posts" element={<PostsPage title={'All posts'} />} />
          <Route path="/posts/:slug" element={<PostPage />} />
          <Route path="/posts/create" element={<CreatePost />} />
          <Route path="/posts/my-posts" element={<PostsPage title={'My posts'} />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
