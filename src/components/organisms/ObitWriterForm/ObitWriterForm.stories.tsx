import React from "react";
import { Meta, StoryFn } from "@storybook/nextjs";
import ObitWriterForm from "./ObitWriterForm";
import MockRouter from "@/test-utils/MockRouter";
import { ObitWriterProvider } from "@/components/contexts/ObitWriter";

export default {
  title: "Components/Organisms/ObitWriterForm",
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
} as Meta;

const Template: StoryFn<typeof ObitWriterForm> = (args) => (
  <ObitWriterForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  initialValues: {
    name: "",
    dateOfBirth: "",
    dateOfDeath: "",
    biography: "",
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (values: any) => {
    console.log("Form submitted:", values);
  },
};
