import { PostsFeed } from './containers/PostsFeed'

const PostsPage = ({ title }: { title: string }) => {
  return (
    <section className="page">
      <h1 className="page-header">{title}</h1>
      <PostsFeed />
    </section>
  )
}

export { PostsPage }
