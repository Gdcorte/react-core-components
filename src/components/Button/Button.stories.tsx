import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  children:  'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children:  'Button',
  variant: "secondary",
};

export const Info = Template.bind({});
Info.args = {
  children:  'Button',
  variant: "info",
};

export const Success = Template.bind({});
Success.args = {
  children:  'Button',
  variant: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  children:  'Button',
  variant: "warning",
};

export const Danger = Template.bind({});
Danger.args = {
  children:  'Button',
  variant: "danger",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children:  'Disabled Button',
  disabled: true,
};

export const DisabledInverse = Template.bind({});
DisabledInverse.args = {
  children:  'Disabled Inverse Button',
  inverse: true,
  disabled: true,
};

export const Inverse = Template.bind({});
Inverse.args = {
  children:  'Inverse Button',
  inverse: true,
};

export const InverseSecondary = Template.bind({});
InverseSecondary.args = {
  children:  'Inverse Button',
  variant: 'secondary',
  inverse: true,
};

export const Oval = Template.bind({});
Oval.args = {
  children:  'Oval Button',
  edges: 'oval',
};

export const Round = Template.bind({});
Round.args = {
  children:  'Round Button',
  edges: 'round',
};

export const Pill = Template.bind({});
Pill.args = {
  children:  'Pill Button',
  edges: 'pill',
};