import { ComponentMeta, ComponentStory } from "@storybook/react";
import TitleSection from "./index";

export default {
  title: "Common/TitleSection",
  component: TitleSection,
} as ComponentMeta<typeof TitleSection>;

const Template: ComponentStory<typeof TitleSection> = (args) => (
  <TitleSection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isMobile: false,
  number: "01",
  title: "Hello World",
};
