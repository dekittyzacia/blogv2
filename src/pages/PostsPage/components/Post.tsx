import { Card, Avatar, Space, Typography } from 'antd'

const { Title } = Typography

export type Post = {
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
}

const Post = ({ post }: { post: Post }) => {
  const titleNode = (
    <Space align={'center'} wrap>
      <Avatar src={post.author?.image} />
      <Title style={{ margin: 0 }} level={5}>
        {post.title}
      </Title>
    </Space>
  )

  return (
    <Card title={titleNode}>
      <p>{post.description}</p>
    </Card>
  )
}

export { Post }
