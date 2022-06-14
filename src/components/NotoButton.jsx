import React from 'react';
import { Buttons } from './style';

const NotoButton = ({ title, link }) => {
  return <Buttons href={link}>{title}</Buttons>;
};

export default NotoButton;
