import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HoverDropdown } from './';

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
  label: "Hi!, I'm a down menu",
  listOrientation: "down",
  options: [
    {
      href: "#",
      label: "label1",
      selected: true,
    },
    {
      label: 'multi-level up',
      listOrientation: "up",
      options: [
        {
          href: "value3.com",
          label: "labe1awd"
        },
        {
          label: 'Level3 left',
          listOrientation: "right",
          options: [
            {
              href: "value3.com",
              label: "label3"
            },
            {
              label: 'Level4 right',
              listOrientation: "left",
              options: [
                {
                  href: "value3.com",
                  label: "label4"
                }
              ],
            },
          ],
        },
        {
          href: "value3.com",
          label: "labe12w"
        },
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
      options: [
        {
          href: "ohno.com",
          label: <svg 
              xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 319 511.61"
          >
              <path d="m270.08 5.89 43.04 43.04c7.85 7.86 7.83 20.72 0 28.54L134.77 255.82l178.35 178.35c7.85 7.86 7.8 20.73 0 28.54l-43.04 43.04c-7.83 7.82-20.71 7.82-28.54 0L49.29 313.49l-.37-.36-43.04-43.04c-7.82-7.83-7.86-20.68 0-28.54l43.04-43.04.37-.36L241.54 5.89c7.85-7.85 20.68-7.85 28.54 0z"/>
          </svg>
        }
      ],
    }
  ]
};