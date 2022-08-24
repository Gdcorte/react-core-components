import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

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
const Template: ComponentStory<typeof UnitInput> = (args) => {
  const [inputValue, setinputValue] = useState("")

  return (
    <div style={{paddingTop: '60px',}}> 
      <UnitInput 
        {...args} 
        useValue={inputValue}
        onValueChange={setinputValue}
        useValidator={()=>{ 
          return Math.random() > .5
        }}
      /> 
    </div>
  )
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Unit = Template.bind({});
Unit.args = {
  disabled: false,
  unitName: 'cm',
};
