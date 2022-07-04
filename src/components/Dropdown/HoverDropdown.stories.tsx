import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HoverDropdown } from './HoverDropdown';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Dropdown',
  component: HoverDropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof HoverDropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HoverDropdown> = (args) => <HoverDropdown {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Hover = Template.bind({});
Hover.args = {
  label: "Hi!, I'm a menu",
  options: [
    {
      href: "value1.com",
      label: "label1"
    }
  ]
};