import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import { SimpleInput } from './';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Input',
  component: SimpleInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as ComponentMeta<typeof SimpleInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SimpleInput> = (args) => {
  const [inputValue, setinputValue] = useState("")

  return (
    <div style={{paddingTop: '60px',}}> 
      <SimpleInput 
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
export const Simple = Template.bind({});
Simple.args = {
  disabled: false,
  type: 'number'
};
