import { ComponentMeta, ComponentStory } from "@storybook/react";
import About from "./index";

export default {
  title: "About",
  component: About,
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = (args) => <About {...args} />;

export const Default = Template.bind({});
Default.args = {
  isMobile: false,
};
