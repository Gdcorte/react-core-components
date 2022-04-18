import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LabelInput, SimpleInput } from './';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Input',
  component: LabelInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
      bold: {control: 'boolean', defaultValue: false},
  },
} as ComponentMeta<typeof LabelInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LabelInput> = (args) => <LabelInput {...args} ><SimpleInput /></LabelInput>;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Label = Template.bind({});
Label.args = {
    label:'Input Label',
    orientation: 'column',
};
