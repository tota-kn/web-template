import type { Meta, StoryObj } from "@storybook/vue3";
import StoreCountButton from "~/components/StoreCountButton.vue";

const meta = {
  title: "StoreCountButton",
  component: StoreCountButton,
  tags: ["autodocs"],

} satisfies Meta<typeof StoreCountButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StoreCountButtonStory: Story = {
  args: {},
};
