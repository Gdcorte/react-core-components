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
    tileDisabled: ({ activeStartDate, date, view }) =>
      date.getTime() > new Date().getTime(),
  },
};

export const WithCustomColors: Story = {
  args: {
    colors: {
      primary: {
        color: '#a3f5a3',
        shade: '#93dd93ff',
        tint: '#bff8bfff',
        tone: '#a9e4a9ff',
        contrast: '#084a08',
      },
      secondary: {
        color: '#f5a3f5',
        shade: '#dd93ddff',
        tint: '#f8bff8ff',
        tone: '#e4a9e4ff',
        contrast: '#4a084a',
      },
    },
    onDateChange(value) {
      console.info('new value', value);
    },
    onViewChange(value, view) {
      console.info('new view attempt!', value, view);
    },
  },
};
