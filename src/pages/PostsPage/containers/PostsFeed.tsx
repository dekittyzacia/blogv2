import { PostsList } from '../components/PostsList'

const PostsFeed = () => {
  const posts = {
    articles: [
      {
        slug: 'how-to-train-your-dragon',
        title: 'How to train your dragon',
        description: 'Ever wonder how?',
        body: 'It takes a Jacobian',
        tags: ['dragons', 'training'],
        createdAt: '2021-02-18T03:22:56.637Z',
        updatedAt: '2021-02-18T03:48:35.824Z',
        favorited: false,
        favoritesCount: 0,
        author: {
          username: 'jake',
          bio: 'I work at State Farm.',
          image: 'https://i.stack.imgur.com/xHWG8.jpg',
          following: false,
        },
      },
      {
        slug: 'how-to-train-your-dragon-2',
        title: 'How to train your dragon 2',
        description: 'So toothless',
        body: 'It is a dragon',
        tags: ['dragons', 'training'],
        createdAt: '2021-02-18T03:22:56.637Z',
        updatedAt: '2021-02-18T03:48:35.824Z',
        favorited: false,
        favoritesCount: 0,
        author: {
          username: 'jake',
          bio: 'I work at State Farm.',
          image: 'https://i.stack.imgur.com/xHWG8.jpg',
          following: false,
        },
      },
    ],
    articlesCount: 2,
  }

  return <PostsList posts={posts.articles} />
}

export { PostsFeed }
