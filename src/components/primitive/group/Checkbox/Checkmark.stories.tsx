import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import CheckboxInput from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CheckboxInput> = {
  title: "Input Group/Checkbox",
  component: CheckboxInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  decorators: [
    (Story, ctx) => {
      const [checked, setChecked] = useState(ctx.args.checked ?? false);

      function onClick() {
        setChecked(!checked);
      }

      ctx.args.onClick = onClick;
      ctx.args.checked = checked;

      return <div style={{ margin: "3em" }}>{Story(ctx)}</div>;
    },
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    tag: "unchecked",
    label: "Click me",
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    tag: "checked",
    label: "I am already clicked",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    tag: "checked",
    label: "I Should not be clicked",
    checked: false,
    disabled: true,
  },
};

export const WithCustomColor: Story = {
  args: {
    tag: "checked",
    label: "I am already clicked",
    checked: true,
    customColor: {
      color: "cornflowerblue",
      contrast: "darkblue",
      tint: "lightgreen",
      shade: "darkgreen",
      tone: "lightblue",
    },
  },
};
