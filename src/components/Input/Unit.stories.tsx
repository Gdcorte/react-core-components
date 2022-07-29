import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UnitInput } from './';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Input',
  component: UnitInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    disabled: { control: 'boolean' },
    validInput: { control: 'boolean' },
  },
} as ComponentMeta<typeof UnitInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UnitInput> = (args) => <UnitInput {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Unit = Template.bind({});
Unit.args = {
  disabled: false,
  validInput: true,
  unitName: 'cm',
};
