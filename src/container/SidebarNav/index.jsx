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
import { Tooltip } from 'antd';

const SidebarNav = () => {
  return (
    <SideNavbar>
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
    link: '/',
    icon: <TrophyOutlined />,
  },
  {
    title: 'My CV',
    link: '/',
    icon: <DownloadOutlined />,
  },
  {
    title: 'Contact Me',
    link: '/',
    icon: <ContactsOutlined />,
  },
];
