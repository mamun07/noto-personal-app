import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const HomePage = () => {
  return (
    <>
      <Title level={2}>Home Page</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
        obcaecati. Sapiente impedit labore dolorum nesciunt neque qui, porro
        harum voluptatibus enim a aliquid excepturi, at nemo dignissimos et
        eaque earum.
      </Paragraph>
    </>
  );
};

export default HomePage;
