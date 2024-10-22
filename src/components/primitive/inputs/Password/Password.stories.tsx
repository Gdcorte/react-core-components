import type { Meta, StoryObj } from '@storybook/react';
import PasswordInput from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof PasswordInput> = {
  title: 'Primitive/Inputs/Password',
  component: PasswordInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <form style={{ margin: '3em' }}>
        <input
          type="text"
          name="username"
          autoComplete="username"
          style={{ display: 'none' }}
        />
        <Story />
      </form>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    tag: 'password',
    autoComplete: 'new-password',
  },
};

export const WithError: Story = {
  args: {
    tag: 'password',
    isValid: false,
    children: <span style={{ color: 'coral' }}>Invalid input</span>,
    autoComplete: 'new-password',
  },
};

export const Disabled: Story = {
  args: {
    tag: 'password',
    disabled: true,
    autoComplete: 'new-password',
  },
};

export const WithCustomColor: Story = {
  args: {
    tag: 'password',
    autoComplete: 'new-password',
    customColor: 'cyan',
    focusColor: 'darkgreen',
  },
};
