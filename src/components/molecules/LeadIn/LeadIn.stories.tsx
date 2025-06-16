import { Meta, StoryFn } from "@storybook/nextjs";
import React from "react";

import { ToastProvider } from "@/components/contexts/Toast";

import LeadIn from "./LeadIn";

export default {
  component: LeadIn,
  title: "Components/Molecules/LeadIn",
} as Meta;

const Template: StoryFn<typeof LeadIn> = (args) => (
  <ToastProvider>
    <LeadIn {...args} />
  </ToastProvider>
);

export const Default = Template.bind({});
Default.args = {
  bgColor: "bg-gray-100",
  bgImage: "",
  enableShare: true,
  title: "Default LeadIn Title",
};
