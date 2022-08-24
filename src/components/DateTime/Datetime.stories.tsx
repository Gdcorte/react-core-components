import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactDateTime } from './DateTime';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/DateTimePicker',
  component: ReactDateTime,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ReactDateTime>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ReactDateTime> = (args) => {

  const [dateValue, setdateValue] = useState(new Date())

  function changeDate(newDate: Date){
    setdateValue(newDate)
  }
  return (
    <ReactDateTime 
      {...args}
      initialValue={dateValue}
      onChangeAsDate={changeDate}
    />
  )
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const DateTime = Template.bind({});
DateTime.args = {};