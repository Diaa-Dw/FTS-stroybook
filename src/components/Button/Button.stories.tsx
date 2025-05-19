import { expect, jest } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { ArrowRight, Download, Trash2, Upload } from "lucide-react";
import type { ComponentProps } from "react";
import { Button } from "..";

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
    onClick: jest.fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const AllStates = () => {
  const variants = ["solid", "outlined", "soft", "plain"] as const;
  const colors = [
    "primary",
    "neutral",
    "danger",
    "success",
    "warning",
  ] as const;
  const sizes = ["sm", "md", "lg"] as const;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      {variants.map((variant) => (
        <div key={variant}>
          <h2 style={{ display: "block", marginBottom: 8 }}>
            Variant: {variant}
          </h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {colors.map((color) => (
              <Button
                key={`${variant}-${color}`}
                variant={variant}
                color={color}
              >
                {color}
              </Button>
            ))}
          </div>
        </div>
      ))}

      <div>
        <h2 style={{ display: "block", marginBottom: 8 }}>Sizes</h2>
        <div style={{ display: "flex", gap: 12 }}>
          {sizes.map((size) => (
            <Button key={size} size={size}>
              {size}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h2 style={{ display: "block", marginBottom: 8 }}>States</h2>
        <div style={{ display: "flex", gap: 12 }}>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </div>
      </div>

      <div>
        <h2 style={{ display: "block", marginBottom: 8 }}>Decorators</h2>
        <div style={{ display: "flex", gap: 12 }}>
          <Button startDecorator={<Download />}>Download</Button>
          <Button color='success' endDecorator={<Upload />}>
            Upload
          </Button>
          <Button
            variant='solid'
            color='danger'
            size='md'
            startDecorator={<Trash2 size={16} />}
            endDecorator={<ArrowRight size={16} />}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

AllStates.parameters = {
  controls: { hideNoControlsWarning: true },
  docs: {
    description: {
      story:
        "Variants by color, sizes, loading/disabled states, and decorators.",
    },
  },
};

export const Solid: Story = {
  args: {
    variant: "solid",
  },

  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole("button");
    await userEvent.click(button);

    expect(args.onClick).toHaveBeenCalled();
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
};

export const Soft: Story = {
  args: {
    variant: "soft",
  },
};

export const Plain: Story = {
  args: {
    variant: "plain",
  },
};

export const Sizes: Story = {
  render: (args) => (
    <section style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <Button {...args} size='sm'>
        Small
      </Button>
      <Button {...args} size='md'>
        Medium
      </Button>
      <Button {...args} size='lg'>
        Large
      </Button>
    </section>
  ),
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Loading...",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole("button");
    const spinner = await canvas.getByLabelText("loading");

    expect(button).toBeDisabled();
    expect(spinner).toBeInTheDocument();
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole("button");

    expect(button).toBeDisabled();
  },
};

export const WithDecorators: Story = {
  args: {
    color: "danger",
    startDecorator: <Trash2 data-testid='start-icon' />,
    endDecorator: <ArrowRight data-testid='end-icon' />,
    children: "Delete",
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const startDecorator = await canvas.getByTestId("start-icon");
    const endDecorator = await canvas.getByTestId("end-icon");

    expect(startDecorator).toBeVisible();
    expect(endDecorator).toBeVisible();
  },
};
