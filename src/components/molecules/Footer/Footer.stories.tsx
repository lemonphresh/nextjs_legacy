import { Meta, StoryFn } from "@storybook/nextjs";
import React from "react";

import Footer from "./Footer";

export default {
  component: Footer,
  title: "Components/Molecules/Footer",
} as Meta;

const Template: StoryFn = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
