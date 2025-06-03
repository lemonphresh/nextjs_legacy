import React from "react";
import { Meta, StoryFn } from "@storybook/nextjs";
import Navbar from "./Navbar";

export default {
  title: "Components/Organisms/Navbar",
  component: Navbar,
} as Meta;

const Template: StoryFn<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  logo: "https://via.placeholder.com/150",
};
