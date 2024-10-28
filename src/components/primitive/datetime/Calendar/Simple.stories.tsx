import type { Meta, StoryObj } from '@storybook/react';
import Calendar from './Simple';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Primitive/Datetime/Calendar',
  component: Calendar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    onDateChange(value) {
      console.info('new value', value);
    },
  },
};

export const WithCustomColors: Story = {
  args: {
    colors: {
      primary: {
        color: 'forestgreen',
        contrast: 'chartreuse',
        tone: 'lightgreen',
        tint: 'darkgreen',
        shade: 'springgreen',
      },
      secondary: {
        color: 'cyan',
        contrast: 'azure',
        tone: 'aquamarine',
        tint: 'darkblue',
        shade: 'lightblue',
      },
    },
    onDateChange(value) {
      console.info('new value', value);
    },
  },
};
