import { ComponentMeta, ComponentStory } from "@storybook/react";
import About from "./index";

export default {
  title: "Hero",
  component: About,
} as ComponentMeta<typeof About>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof About> = () => <About />;

export const Default = Template.bind({});
Default.args = {
  isMobile: false,
};
