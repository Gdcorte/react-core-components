import { TestIcon } from '@/.storybook/assets';
import type { Meta, StoryObj } from '@storybook/react';
import TransparentButton from './Transparent';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Primitive/Buttons/Transparent',
  component: TransparentButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof TransparentButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    tag: 'button',
    children: 'Transparent Button',
  },
};

export const WithIcon: Story = {
  args: {
    tag: 'button',
    children: <TestIcon />,
  },
};

export const CustomColor: Story = {
  args: {
    tag: 'button',
    children: 'Custom Colored Button',
    customColor: {
      color: 'purple',
      contrast: 'darkgreen',
      tint: 'lightgreen',
      shade: 'darkblue',
      tone: 'lightblue',
    },
  },
};

export const Disabled: Story = {
  args: {
    tag: 'button',
    children: 'Transparent Button',
    disabled: true,
  },
};
