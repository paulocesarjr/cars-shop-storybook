import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";

const meta = {
    component: Button
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const NoIcon: Story = {
    args: {
        title: "Button Without Icon",
        showIcon: false
    }
}

export const WithIcon: Story = {
    args: {
        title: "Button With Icon",
        showIcon: true
    }
}

export default meta