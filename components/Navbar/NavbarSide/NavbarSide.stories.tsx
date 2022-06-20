import NavbarSide from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Component/navbar/NavbarSide",
  component: NavbarSide,
} as ComponentMeta<typeof NavbarSide>;

const Template: ComponentStory<typeof NavbarSide> = (args) => (
  <NavbarSide {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isMobile: true,
};
