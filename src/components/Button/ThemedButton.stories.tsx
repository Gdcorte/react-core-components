import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemedButton } from './ThemedButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: ThemedButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ThemedButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThemedButton> = (args) => <ThemedButton {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const ButtonThemed = Template.bind({});
ButtonThemed.args = {
  children:  'Button',
  variant: 'primary',
  inverse: false,
  disabled: false,
  edges: 'rectangle',
};