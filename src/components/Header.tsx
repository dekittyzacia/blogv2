import { BlogLogo } from '../assets/BlogLogo'
import './index.css'
import { Button, Space } from 'antd'

const Header = () => {
  return (
    <header className="header">
      <BlogLogo />
      <Space className="button-group">
        <Button>Sign in</Button>
        <Button type="primary">Sign up!</Button>
      </Space>
    </header>
  )
}

export { Header }
