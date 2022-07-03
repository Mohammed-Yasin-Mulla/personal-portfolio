import { ComponentMeta, ComponentStory } from "@storybook/react";
import Footer from "./index";

export default {
  title: "Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Default = Template.bind({});
