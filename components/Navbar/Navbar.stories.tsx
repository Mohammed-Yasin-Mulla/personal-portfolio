import Navbar from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Component/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Default = Template.bind({});

Default.args = {
  isMobile: false,
};
