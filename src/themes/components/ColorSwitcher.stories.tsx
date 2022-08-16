import { ComponentStory, ComponentMeta } from '@storybook/react';

import {default as ColorSwitcher} from './ColorSwitcher';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Theme',
  component: ColorSwitcher,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ColorSwitcher>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ColorSwitcher> = (args) =>  (
    <ColorSwitcher {...args} />
)

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const ColorPicker = Template.bind({});
ColorPicker.args = {};