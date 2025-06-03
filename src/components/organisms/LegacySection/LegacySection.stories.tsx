import React from "react";
import { Meta, StoryFn } from "@storybook/nextjs";
import LegacySection from "./LegacySection";

export default {
  title: "Components/Organisms/LegacySection",
  component: LegacySection,
} as Meta;

const Template: StoryFn<typeof LegacySection> = (args) => (
  <LegacySection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Legacy Section Title",
  description: "This is a description for the Legacy Section.",
  items: [
    { id: 1, name: "Item 1", value: "Value 1" },
    { id: 2, name: "Item 2", value: "Value 2" },
  ],
};
