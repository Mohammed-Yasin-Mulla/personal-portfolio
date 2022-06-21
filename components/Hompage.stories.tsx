import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Homepage from "../pages/index";

export default {
  title: "Homepage",
  component: Homepage,
} as ComponentMeta<typeof Homepage>;

const Template: ComponentStory<typeof Homepage> = (args) => (
  <Homepage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isMobile: false,
};
