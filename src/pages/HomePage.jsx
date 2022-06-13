import React from 'react';
import { Button } from 'antd';

import { ProfileInfo, ProfileText, ProfileThumb } from './style';

const HomePage = () => {
  return (
    <ProfileInfo>
      <ProfileText>
        <h5>Hi, My Name is</h5>
        <h1>Carmen Winstead</h1>
        <h4>React Developer</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          obcaecati. Sapiente impedit labore dolorum nesciunt neque qui, porro
          harum voluptatibus enim a aliquid excepturi, at nemo dignissimos et
          eaque earum.
        </p>
        <Button>Check My CV</Button>
      </ProfileText>
      <ProfileThumb>
        <img src="/images/4.svg" alt="profile" />
      </ProfileThumb>
    </ProfileInfo>
  );
};

export default HomePage;
