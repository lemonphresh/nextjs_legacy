import React from "react";
import { Meta, StoryFn } from "@storybook/nextjs";
import Footer from "./Footer";

export default {
  title: "Components/Molecules/Footer",
  component: Footer,
} as Meta;

const Template: StoryFn = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
