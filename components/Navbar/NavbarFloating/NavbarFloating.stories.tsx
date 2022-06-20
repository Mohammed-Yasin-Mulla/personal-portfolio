import NavbarFloating from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Component/NavbarFloating",
  component: NavbarFloating,
} as ComponentMeta<typeof NavbarFloating>;

const Template: ComponentStory<typeof NavbarFloating> = () => (
  <NavbarFloating />
);

export const Default = Template.bind({});

Default.args = {};
