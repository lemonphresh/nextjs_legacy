import React from "react";
import { Meta, StoryFn } from "@storybook/nextjs";
import LeadIn from "./LeadIn";
import { ToastProvider } from "@/components/contexts/Toast";

export default {
  title: "Components/Molecules/LeadIn",
  component: LeadIn,
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
