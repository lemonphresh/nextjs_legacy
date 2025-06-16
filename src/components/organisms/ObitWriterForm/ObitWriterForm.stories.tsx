import { Meta, StoryFn } from "@storybook/nextjs";
import React from "react";

import { ObitWriterProvider } from "@/components/contexts/ObitWriter";
import MockRouter from "@/test-utils/MockRouter";

import ObitWriterForm from "./ObitWriterForm";

export default {
  component: ObitWriterForm,
  decorators: [
    (Story) => (
      <MockRouter pathname="/obituary">
        <ObitWriterProvider>
          <Story />
        </ObitWriterProvider>
      </MockRouter>
    ),
  ],
  title: "Components/Organisms/ObitWriterForm",
} as Meta;

const Template: StoryFn<typeof ObitWriterForm> = (args) => <ObitWriterForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialValues: {
    biography: "",
    dateOfBirth: "",
    dateOfDeath: "",
    name: "",
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (values: any) => {
    console.log("Form submitted:", values);
  },
};
