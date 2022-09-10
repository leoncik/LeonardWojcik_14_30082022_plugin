import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectMenu from "../lib/SelectMenu";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/SelectMenu",
  component: SelectMenu,
} as ComponentMeta<typeof SelectMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectMenu> = (args) => <SelectMenu {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: "I am a test!",
  options: ["Alabama", "Alaska", "American Samoa"]
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: "Click me!",
  options: ["Only one option here!"]
};