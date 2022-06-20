import { ComponentMeta, ComponentStory } from "@storybook/react";
import Projects from "./index";

export default {
  title: "Projects",
  component: Projects,
} as ComponentMeta<typeof Projects>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Projects> = (args) => (
  <Projects {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Projects",
};
