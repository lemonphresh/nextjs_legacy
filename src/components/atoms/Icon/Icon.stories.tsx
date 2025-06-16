/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta, StoryFn } from "@storybook/nextjs";
import React from "react";

import Icon from "./Icon";

export default {
  argTypes: {
    ariaLabel: {
      control: "text",
    },
    className: {
      control: "text",
    },
    name: {
      control: "select",
      options: [
        "Heart",
        "Rocket",
        "UserCircle",
        "Camera",
        "Bell",
        "Star",
        "Folder",
        "Gear",
        "MagnifyingGlass",
      ],
    },
    size: {
      control: "number",
    },
    weight: {
      control: "select",
      options: ["thin", "light", "regular", "bold", "fill", "duotone"],
    },
  },
  component: Icon,
  title: "Components/Atoms/Icon",
} as Meta;

const Template: StoryFn<{
  name: keyof typeof import("@phosphor-icons/react");
  size?: number | string;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  className?: string;
  ariaLabel?: string;
}> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: "text-red-500",
  name: "Heart",
  size: 24,
  weight: "regular",
};

export const AllWeights = () => (
  <div className="flex space-x-4 text-blue-600">
    {["thin", "light", "regular", "bold", "fill", "duotone"].map((weight) => (
      <div key={weight} className="flex flex-col items-center space-y-1">
        <Icon name="Rocket" size={32} weight={weight as any} />
        <span className="text-xs capitalize">{weight}</span>
      </div>
    ))}
  </div>
);

export const WithTailwindSizes = () => (
  <div className="flex space-x-4 text-emerald-600 items-end">
    <Icon className="w-4 h-4" name="Star" />
    <Icon className="w-6 h-6" name="Star" />
    <Icon className="w-8 h-8" name="Star" />
    <Icon className="w-10 h-10" name="Star" />
  </div>
);
