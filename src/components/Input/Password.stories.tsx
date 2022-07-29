import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PasswordInput } from './';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Input',
  component: PasswordInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof PasswordInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PasswordInput> = (args) => <PasswordInput {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Password = Template.bind({});
Password.args = {
  validInput: true,
};
