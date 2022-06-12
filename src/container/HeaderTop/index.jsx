import React from 'react';
import { Typography } from 'antd';

import { HeaderTopMain } from './style';

const { Title } = Typography;

const HeaderTop = () => {
  return (
    <HeaderTopMain>
      <Title level={5}>HeaderTop</Title>
    </HeaderTopMain>
  );
};

export default HeaderTop;
