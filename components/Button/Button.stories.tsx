import Button from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Common/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};
