import { List } from 'antd'
import { Post } from './Post'

export type Posts = {
  slug: string
  title: string
  description: string
  body: string
  tags: string[]
  createdAt: string
  updatedAt: string
  favorited: boolean
  favoritesCount: number
  author: {
    username: string
    bio: string
    image: string
    following: boolean
  }
}[]

const PostsList = ({ posts }: { posts: Posts }) => {
  return (
    <List
      grid={{
        gutter: 16,
        column: 2,
      }}
      dataSource={posts}
      renderItem={(post) => (
        <List.Item>
          <Post post={post} />
        </List.Item>
      )}
    />
  )
}

export { PostsList }
