import { ComponentMeta, ComponentStory } from "@storybook/react";
import NavBarLink from "./index";

export default {
  title: "Component/Navbar/NavbarLink",
  component: NavBarLink,
  args: {
    index: 0,
    label: "About",
  },
} as ComponentMeta<typeof NavBarLink>;

const Template: ComponentStory<typeof NavBarLink> = (args) => (
  <NavBarLink {...args} />
);
export const Default = Template.bind({});
Default.args = {
  label: "Button",
};
