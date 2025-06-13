/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Meta, StoryFn } from "@storybook/nextjs";
import Icon from "./Icon";

export default {
  title: "Components/Atoms/Icon",
  component: Icon,
  argTypes: {
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
    weight: {
      control: "select",
      options: ["thin", "light", "regular", "bold", "fill", "duotone"],
    },
    size: {
      control: "number",
    },
    className: {
      control: "text",
    },
    ariaLabel: {
      control: "text",
    },
  },
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
  name: "Heart",
  weight: "regular",
  size: 24,
  className: "text-red-500",
};

export const AllWeights = () => (
  <div className="flex space-x-4 text-blue-600">
    {["thin", "light", "regular", "bold", "fill", "duotone"].map((weight) => (
      <div key={weight} className="flex flex-col items-center space-y-1">
        <Icon name="Rocket" weight={weight as any} size={32} />
        <span className="text-xs capitalize">{weight}</span>
      </div>
    ))}
  </div>
);

export const WithTailwindSizes = () => (
  <div className="flex space-x-4 text-emerald-600 items-end">
    <Icon name="Star" className="w-4 h-4" />
    <Icon name="Star" className="w-6 h-6" />
    <Icon name="Star" className="w-8 h-8" />
    <Icon name="Star" className="w-10 h-10" />
  </div>
);
