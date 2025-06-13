import { Meta, StoryFn } from "@storybook/nextjs";
import React from "react";

import LegacySection from "./LegacySection";

export default {
  component: LegacySection,
  title: "Components/Organisms/LegacySection",
} as Meta;

const Template: StoryFn<typeof LegacySection> = (args) => (
  <LegacySection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  description: "This is a description for the Legacy Section.",
  items: [
    { id: 1, name: "Item 1", value: "Value 1" },
    { id: 2, name: "Item 2", value: "Value 2" },
  ],
  title: "Legacy Section Title",
};
