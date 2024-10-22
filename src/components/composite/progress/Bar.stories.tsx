import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ProgressBar> = {
  title: 'Composite/Progress/Bar',
  component: ProgressBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },

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
    progress: 0.8,
  },
};

export const customColor: Story = {
  args: {
    progress: 0.8,
    bgColor: 'thistle',
    barColor: {
      color: 'beige',
      contrast: 'coral',
      shade: 'gray',
      tint: 'lightsalmon',
      tone: 'lightblue',
    },
  },
};

export const BelowAverage: Story = {
  args: {
    progress: 0.3,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MoreThanTotal: Story = {
  args: {
    progress: 50,
  },
};
