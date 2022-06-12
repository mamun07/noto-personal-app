import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  ContactsOutlined,
  DownloadOutlined,
  HomeOutlined,
  TrophyOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { SideNavbar } from './style';
import { Tooltip, Typography } from 'antd';

const { Title } = Typography;

const SidebarNav = () => {
  return (
    <SideNavbar>
      <Title>
        <NavLink to="/">N</NavLink>
      </Title>
      <ul>
        {sideBar?.map((menu, i) => {
          return (
            <li key={i}>
              <Tooltip placement="right" title={menu.title}>
                <NavLink to={menu.link}>{menu.icon}</NavLink>
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </SideNavbar>
  );
};

export default SidebarNav;

const sideBar = [
  {
    title: 'Home',
    link: '/',
    icon: <HomeOutlined />,
  },
  {
    title: 'About Me',
    link: '/about-me',
    icon: <UserOutlined />,
  },
  {
    title: 'My Skill',
    link: '/my-skill',
    icon: <TrophyOutlined />,
  },
  {
    title: 'Contact Me',
    link: '/contact-me',
    icon: <ContactsOutlined />,
  },
  {
    title: 'My CV',
    link: '/my-cv',
    icon: <DownloadOutlined />,
  },
];
