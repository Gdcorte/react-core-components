import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BaseButton } from './BaseButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: BaseButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof BaseButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseButton> = (args) => <BaseButton {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const ButtonBase = Template.bind({});
ButtonBase.args = {
  children:  'Button',
  inverse: false,
  disabled: false,
  shape: 'rectangle',
};