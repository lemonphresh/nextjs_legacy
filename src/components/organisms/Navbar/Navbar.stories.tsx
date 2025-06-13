import { Meta, StoryFn } from "@storybook/nextjs";
import React from "react";

import Navbar from "./Navbar";

export default {
  component: Navbar,
  title: "Components/Organisms/Navbar",
} as Meta;

const Template: StoryFn<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  logo: "https://via.placeholder.com/150",
};
