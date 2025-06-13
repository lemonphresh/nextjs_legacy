import { Meta, StoryFn } from "@storybook/nextjs";
import React from "react";

import FaqAccordions from "./FaqAccordions";

export default {
  component: FaqAccordions,
  title: "Components/Molecules/FaqAccordions",
} as Meta;

const Template: StoryFn = (args) => <FaqAccordions {...args} />;

export const Default = Template.bind({});
Default.args = {};
