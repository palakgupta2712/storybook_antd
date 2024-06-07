// src/components/Button.stories.js
import React from 'react';
import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button,
};

  
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'Primary Button',
  size:"default"
};

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  children: 'Default Button',
  size:"default"
};

export const Dashed = Template.bind({});
Dashed.args = {
  type: 'dashed',
  children: 'Dashed Button',
  size:"default"
};

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  children: 'Text Button',
  size:"default"
};

export const Link = Template.bind({});
Link.args = {
  type: 'link',
  children: 'Link Button',  
  size:"default"
};

export const Loading = Template.bind({});
Loading.args = {
  type: 'primary',
  children: 'Loading',  
  size: "default",
  loading:true
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'primary',
  children: 'Disabled',  
  size: "default",
  disabled:true
};
