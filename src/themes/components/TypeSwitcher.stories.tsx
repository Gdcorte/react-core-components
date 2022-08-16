import { ComponentStory, ComponentMeta } from '@storybook/react';

import {default as TypeSwitcher} from './TypeSwitcher';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Theme',
  component: TypeSwitcher,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TypeSwitcher>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TypeSwitcher> = (args) =>  (
    <TypeSwitcher {...args} />
)

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const TypePicker = Template.bind({});
TypePicker.args = {
  typeChangeCallback: (value:any)=>{console.info(value)}
};