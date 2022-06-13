import React from 'react';
import { Col, Row, Typography } from 'antd';

import {
  HeaderTopMain,
  HeaderContact,
  HeaderContactLeft,
  HeaderContactRight,
} from './style';
import {
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

const { Link } = Typography;

const HeaderTop = () => {
  return (
    <HeaderTopMain>
      <Row>
        <Col xl={24}>
          <HeaderContact>
            <HeaderContactLeft>
              <ul>
                <li>
                  <Link href="tel:+12544-515156">+12544-515156</Link>
                </li>
                <li>
                  <Link href="mailto:info@noto.com">info@noto.com</Link>
                </li>
              </ul>
            </HeaderContactLeft>
            <HeaderContactRight>
              <ul>
                {socialContact.map((social, i) => {
                  return (
                    <li key={i}>
                      <Link href={social.link} target="_blank">
                        {social.icon}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </HeaderContactRight>
          </HeaderContact>
        </Col>
      </Row>
    </HeaderTopMain>
  );
};

export default HeaderTop;

const socialContact = [
  {
    icon: <LinkedinOutlined />,
    link: 'https://www.linkedin.com/',
  },
  {
    icon: <GithubOutlined />,
    link: 'https://github.com/mamun07',
  },
  {
    icon: <FacebookOutlined />,
    link: 'https://facebook.com/mamunben7',
  },
];
