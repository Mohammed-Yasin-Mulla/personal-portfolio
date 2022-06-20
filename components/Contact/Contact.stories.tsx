import { ComponentMeta, ComponentStory } from "@storybook/react";
import Contact from "./index";

export default {
  title: "Contact",
  component: Contact,
} as ComponentMeta<typeof Contact>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Contact> = (args) => (
  <Contact {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Contact",
};
