// src/components/Button.js
import React from 'react';
import { Button as AntButton } from 'antd';

const Button = (args) => {
  return <AntButton {...args}>{args.children}</AntButton>;
};

export default Button;
