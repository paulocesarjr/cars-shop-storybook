import type { Meta, StoryObj } from "@storybook/react-vite";
import CarCard from "./CarCard";

const meta = {
    component: CarCard
} satisfies Meta<typeof CarCard>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        make: "Toyota",
        model: "Corolla",
        year: 2020,
        price: 20000,
        photo: "https://image1.mobiauto.com.br/images/api/images/v1.0/12433679/transform/fl_progressive,f_webp,q_80"
    }
}

export default meta