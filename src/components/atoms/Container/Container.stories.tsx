import React from "react";
import { Meta, StoryFn } from "@storybook/nextjs";
import Container from "./Container";

export default {
  title: "Components/Atoms/Container",
  component: Container,
} as Meta;

const Template: StoryFn<typeof Container> = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "This is a default container",
  className: "p-4 bg-gray-100",
};
