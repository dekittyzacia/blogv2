import './index.css'
import { UserOutlined, FormOutlined, AppstoreOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import { Link } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return { label, key, icon, children, type } as MenuItem
}

const sideMenuItems: MenuProps['items'] = [
  getItem('Me', 'sub1', <UserOutlined />, [
    getItem(<Link to={'/profile'}>Profile</Link>, 'profile'),
    getItem(<Link to={'/profile/edit'}>Edit profile</Link>, 'edit'),
    getItem(<Link to={'/posts/my-posts'}>Posts</Link>, 'posts'),
  ]),
  getItem('New post', 'sub2', <FormOutlined />, [getItem(<Link to={'/posts/create'}>Create new post</Link>, 'create')]),
  getItem('Feed', 'sub3', <AppstoreOutlined />, [
    getItem('Feed', 'feed'),
    getItem(<Link to={'/posts'}>All posts</Link>, 'all'),
  ]),
]

const SideMenu = () => {
  return (
    <aside className="side-menu">
      <Menu onClick={() => console.log('onClickMenu')} items={sideMenuItems} mode={'vertical'} />
    </aside>
  )
}

export { SideMenu }
