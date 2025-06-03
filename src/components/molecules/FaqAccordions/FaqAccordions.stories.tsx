import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import FaqAccordions from "./FaqAccordions";

export default {
  title: "Components/Molecules/FaqAccordions",
  component: FaqAccordions,
} as Meta;

const Template: StoryFn = (args) => <FaqAccordions {...args} />;

export const Default = Template.bind({});
Default.args = {};
