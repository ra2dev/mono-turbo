import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@repo/ui'

const meta = {
  component: Button,
  argTypes: {
    htmlType: {
      control: { type: 'radio' },
      options: ['button', 'submit', 'reset'],
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof Button>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <Button
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert('Hello from Turborepo!')
      }}
      {...props}
    >
      Hello
    </Button>
  ),
  name: 'Button',
  args: {
    children: 'Hello',
    htmlType: 'button',
    style: {
      color: 'blue',
      border: '1px solid gray',
      padding: 10,
      borderRadius: 10,
    },
  },
}
