import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as AccordionMenu } from './AccordionMenu';
import {SettingsIcon} from '../../icons'
import styled from 'styled-components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Accordion',
  component: AccordionMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof AccordionMenu>;

// Custom style
const StyledTestContainer = styled.div`

    svg {
        width: 20px;
        height: 20px;
    }

    .body-lv1 {
        background-color: ${({theme})=>theme.backgroundShade1};
    }

    .body-lv2 {
        background-color: ${({theme})=>theme.backgroundShade2};
    }
`

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AccordionMenu> = (args) => 
<StyledTestContainer> 
    <AccordionMenu {...args} /> 
</StyledTestContainer>;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Base = Template.bind({});
Base.args = {
    accordionOptions: [
        {
            title: <SettingsIcon />,
            action: ()=>{console.log("Accord me! Menu 1 Op1")},
            uniqueKey: 'm1op1',
            commonClass: "lv1",
        },
        {
            title: "Menu 1 Op2",
            description: <div>"lorem Ipsum"</div>,
            action: ()=>{console.log("Accord me! Menu 1 Op2")},
            uniqueKey: 'm1op2',
            commonClass: "lv1",
        },
        {
            title: "Menu 1 Op3",
            content: [
                {
                    title: "Menu 2 Op1",
                    description: <div>"lorem Ipsum"</div>,
                    action: ()=>{console.log("Accord me! Menu 1 Op1")},
                    uniqueKey: 'm2op1',
                },
                {
                    title: "Menu 2 Op2",
                    description: <div>"lorem Ipsum"</div>,
                    action: ()=>{console.log("Accord me! Menu 1 Op2")},
                    uniqueKey: 'm2op2',
                },
                {
                    title: "Menu 2 Op3",
                    description: <div>"lorem Ipsum"</div>,
                    action: ()=>{console.log("Accord me! Menu 1 Op3")},
                    uniqueKey: 'm2op3',
                },
                {
                    title: "Menu 2 Op4",
                    description: <div>"lorem Ipsum"</div>,
                    action: ()=>{console.log("Accord me! Menu 1 Op4")},
                    uniqueKey: 'm2op4',
                }
            ],
            action: ()=>{console.log("Accord me! Menu 1 Op3")},
            uniqueKey: 'm1op3',
            commonClass: "lv1",
        },
        {
            title: <SettingsIcon />,
            bodyClass:  'body-lv1',
            content: [
                {
                    title: "Menu 3 Op1",
                    description: <div>"lorem Ipsum"</div>,
                    action: ()=>{console.log("Accord me! Menu 1 Op1")},
                    uniqueKey: 'm3op1',
                    commonClass:  'lv2',
                },
                {
                    title: "Menu 3 Op2",
                    description: <div>"lorem Ipsum"</div>,
                    action: ()=>{console.log("Accord me! Menu 1 Op2")},
                    uniqueKey: 'm3op2',
                    commonClass:  'lv2',
                },
                {
                    title: "Menu 3 Op3",
                    description: <div>"lorem Ipsum"</div>,
                    action: ()=>{console.log("Accord me! Menu 1 Op3")},
                    uniqueKey: 'm3op3',
                    commonClass:  'lv2',
                },
                {
                    title: <SettingsIcon />,
                    bodyClass:  'body-lv2',
                    content: [
                        {
                            title: "Menu 4 Op1",
                            action: ()=>{console.log("Accord me! Menu 1 Op1")},
                            uniqueKey: 'm4op1',
                            commonClass: 'lv4',
                        },
                        {
                            title: "Menu 4 Op2",
                            action: ()=>{console.log("Accord me! Menu 1 Op2")},
                            uniqueKey: 'm4op2',
                            commonClass: 'lv4',
                        },
                        {
                            title: "Menu 4 Op3",
                            description: <div>"lorem Ipsum"</div>,
                            action: ()=>{console.log("Accord me! Menu 1 Op3")},
                            uniqueKey: 'm4op3',
                            commonClass: 'lv4',
                        },
                        {
                            title: "Menu 4 Op4",
                            description: <div>"lorem Ipsum"</div>,
                            action: ()=>{console.log("Accord me! Menu 1 Op4")},
                            uniqueKey: 'm4op4',
                            commonClass: 'lv4',
                        }
                    ],
                    action: ()=>{console.log("Accord me! Menu 1 Op4")},
                    uniqueKey: 'm3op4',
                    commonClass:  'lv2',
                }
            ],
            action: ()=>{console.log("Accord me! Menu 1 Op4")},
            uniqueKey: 'm1op4',
            commonClass: "lv1",
        }
    ],
};