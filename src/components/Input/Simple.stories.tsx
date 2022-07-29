import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SimpleInput } from './';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Input',
  component: SimpleInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    disabled: { control: 'boolean' },
    validInput: { control: 'boolean' },
  },
} as ComponentMeta<typeof SimpleInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SimpleInput> = (args) => <div style={{paddingTop: '60px',}}> <SimpleInput {...args} /> </div>;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Simple = Template.bind({});
Simple.args = {
  disabled: false,
  validInput: true,
};
