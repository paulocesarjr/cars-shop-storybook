import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";

const meta = {
    component: Button
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const NoIcon: Story = {
    args: {
        title: "Primary Button",
        showIcon: false
    }
}

export const WithIcon: Story = {
    args: {
        title: "Primary Button",
        showIcon: true
    }
}

export default meta