import "flowbite/dist/flowbite.css"; // Ensure Flowbite styles are included

import { Meta, StoryFn } from "@storybook/nextjs";
import React from "react";

import FlowbiteForm from "./FlowbiteForm";

export default {
  component: FlowbiteForm,
  title: "Components/Organisms/FlowbiteForm",
} as Meta;

const Template: StoryFn<typeof FlowbiteForm> = (args) => <FlowbiteForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialValues: {
    email: "",
    password: "",
    username: "",
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (values: any) => {
    console.log("Form submitted:", values);
  },
};
