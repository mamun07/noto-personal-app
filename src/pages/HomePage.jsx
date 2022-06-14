import React from 'react';
// import Typewriter from 'svelte-typewriter';
import { NotoButton } from '../components';

import { ProfileInfo, ProfileText, ProfileThumb } from './style';

const HomePage = () => {
  return (
    <ProfileInfo>
      <ProfileText>
        <h5>Hi, My Name is</h5>
        <h1>Carmen Winstead</h1>
        <h4>
          Expert in
          {/* <Typewriter>
            <p>React</p>
          </Typewriter> */}
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          obcaecati. Sapiente impedit labore dolorum nesciunt neque qui.
        </p>
        <NotoButton title="Check My CV" link="/" />
      </ProfileText>
      <ProfileThumb>
        <img src="/images/4.svg" alt="profile" />
      </ProfileThumb>
    </ProfileInfo>
  );
};

export default HomePage;
