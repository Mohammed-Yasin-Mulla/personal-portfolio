import { ComponentMeta, ComponentStory } from "@storybook/react";
import Technologies from "./index";

export default {
  title: "Technologies",
  component: Technologies,
} as ComponentMeta<typeof Technologies>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Technologies> = (args) => (
  <Technologies {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Technologies",
};
