import { TestIcon } from '@/.storybook/assets';
import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import SimpleTimeline from '.';
import { TimelineActivity } from './interface';

const Frame = styled.div`
  display: flex;

  width: 100%;
  max-height: 600px;
  background: ${({ theme }) => theme.background.color};

  .test-cut {
    background: inherit;
    width: inherit;
  }
`;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof SimpleTimeline> = {
  title: 'Composite/Timeline/Simple',
  component: SimpleTimeline,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  decorators: [
    (Story) => {
      return (
        <Frame>
          <div className="test-cut">
            <Story />
          </div>
        </Frame>
      );
    },
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

export default meta;
type Story = StoryObj<typeof meta>;

const activities: TimelineActivity[] = [
  {
    start: new Date('2013-11-10'),
    icon: <TestIcon />,
    title: 'My Academia test',
    description: 'U.A. High',
    color: 'lightblue',
  },
  {
    start: new Date('2023-11-10'),
    icon: (
      <img src="https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg" />
    ),
    title: <p style={{ marginTop: '0' }}> "Working hard"</p>,
    color: 'lightgreen',
  },
  {
    start: new Date('2013-11-10'),
    end: new Date('2025-11-10'),
    title: <p style={{ margin: '0', marginBottom: '400px' }}>"Vacations"</p>,
    description: 'Mars',
    color: 'crimson',
  },
];

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Horizontal: Story = {
  args: {
    customColor: 'thistle',
    activities,
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    activities,
  },
};
