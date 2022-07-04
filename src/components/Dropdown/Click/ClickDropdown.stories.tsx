import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ClickDropdown } from './';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Dropdown',
  component: ClickDropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof ClickDropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ClickDropdown> = (args) => <div> <ClickDropdown {...args} /> </div>;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Click = Template.bind({});
Click.args = {
  label: "Hi!, I'm a menu",
  options: [
    {
      href: "#",
      label: "label1",
      selected: true,
    },
    {
      label: 'multi-level',
      listOrientation: "right",
      autoClose: true,
      options: [
        {
          href: "value2.com",
          label: "label2"
        }
      ],
    },
    {
      href: "value1.com",
      label: "single2",
      selected: false,
    },
    {
      label: 'multi-level2',
      listOrientation: "right",
      autoClose: true,
      options: [
        {
          href: "ohno.com",
          label: "ml2-label"
        }
      ],
    }
  ]
};