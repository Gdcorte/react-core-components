import { ThemedStory } from '@sb/decorators';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SimpleLabel } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Labels/Simple',
  component: SimpleLabel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {},
} satisfies Meta<typeof SimpleLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Default',
    children: <input />,
    orientation: 'row',
  },
  decorators: [
    (Story) => (
      <div style={{ background: 'gray', width: '400px', height: '200px' }}>
        <ThemedStory>
          <Story />
        </ThemedStory>
      </div>
    ),
  ],
};
