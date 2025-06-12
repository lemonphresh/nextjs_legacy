import React from "react";
import { Meta, StoryFn } from "@storybook/nextjs";
import FlowbiteForm from "./FlowbiteForm";
import "flowbite/dist/flowbite.css"; // Ensure Flowbite styles are included

export default {
  title: "Components/Organisms/FlowbiteForm",
  component: FlowbiteForm,
} as Meta;

const Template: StoryFn<typeof FlowbiteForm> = (args) => (
  <FlowbiteForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  initialValues: {
    username: "",
    email: "",
    password: "",
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (values: any) => {
    console.log("Form submitted:", values);
  },
};
