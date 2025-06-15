import type { Meta, StoryObj } from "@storybook/react-vite";
import Photo from "./Photo";

const meta = {
    component: Photo
} satisfies Meta<typeof Photo>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        url: "https://image1.mobiauto.com.br/images/api/images/v1.0/12433679/transform/fl_progressive,f_webp,q_80",
        isBlackAndWhite: false
    }
}

export const BlackAndWhite: Story = {
    args: {
        url: "https://image1.mobiauto.com.br/images/api/images/v1.0/12433679/transform/fl_progressive,f_webp,q_80",
        isBlackAndWhite: true
    }
}

export default meta