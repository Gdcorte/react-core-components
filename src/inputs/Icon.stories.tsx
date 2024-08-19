import type { Meta, StoryObj } from "@storybook/react";
import IconInput from "./Icon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Inputs/Icon",
  component: IconInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof IconInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const TestIcon = function Icon() {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="122.877px"
      height="112.531px"
      viewBox="0 0 122.877 112.531"
      enable-background="new 0 0 122.877 112.531"
    >
      <g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.872,8.869L8.872,8.869C-2.956,20.694-2.958,40.039,8.87,51.864L53.433,96.43 c4.873,0.274,7.517-1.769,7.055-7.055L16.287,45.172c-7.945-7.945-7.945-20.941,0-28.887l0,0 c7.943-7.942,20.943-7.945,28.889-0.002c21.27,21.27,42.542,42.543,63.807,63.81c5.035,5.032,5.318,13.691,0.279,18.73l0,0 c-5.035,5.036-13.656,4.721-18.693-0.315C74.424,82.364,58.402,66.342,42.256,50.197c-2.235-2.235-2.349-6.006-0.113-8.245l0,0 c2.234-2.236,6.009-2.12,8.245,0.113L79.092,70.77c5.201,0.411,7.434-2.138,7.182-7.181L57.569,34.884 c-6.188-6.188-16.308-6.188-22.492-0.002l0,0c-6.19,6.188-6.184,16.315-0.002,22.496l19.662,19.664l9.269,9.27l19.201,19.199 c8.977,8.978,24.23,9.54,33.207,0.56c8.982-8.981,8.422-24.23-0.559-33.21L87.387,44.392v0.002L51.862,8.869 C40.039-2.958,20.693-2.954,8.872,8.869L8.872,8.869z"
        />
      </g>
    </svg>
  );
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithoutLabel: Story = {
  args: {
    icon: <TestIcon />,
    tag: "input",
  },
};
export const WithLabel: Story = {
  args: {
    label: "Hello Darkness...",
    isValid: true,
    isRequired: false,
    disabled: false,
    icon: <TestIcon />,
    tag: "input",
  },
};
