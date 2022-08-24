import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SyntheticEvent } from 'react';

import { default as RadioInput } from './'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/InputGroup',
  component: RadioInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof RadioInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RadioInput> = (args) => <RadioInput {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Radio = Template.bind({});
Radio.args = {
    options:[
        {value: 'value1', label: 'Test Value 1'},
        {value: 'value2', label: 'Test Value 2'},
        {value: 'value3', label: 'Test Value 3'},
        {value: 'value4', label: 'Test Value 4'},
    ],
    defaultValue: "value1",
    changeCallback: (event: SyntheticEvent)=> { console.log(event)},
    useRow: false
};
