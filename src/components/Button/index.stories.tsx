import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { IButtonProps } from './index';

import '@/scss/index.scss';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    componentSubtitle: (
      <>
        <p>Use styles in the order shown below</p>
        <p>
          Link to{' '}
          <a
            style={{ color: '#57a216' }}
            target={'_blank'}
            rel="noreferrer"
            href="https://www.figma.com/file/ztWO493IooZdlv7aQT4Ryx/Untitled-Copy?node-id=10%3A163"
          >
            Figma
          </a>
        </p>
      </>
    ),
  },
  argTypes: {
    size: {
      description: 'button--sm button--lg button--xl or nothing',
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const defaultButton = Template.bind({});
defaultButton.args = {
  children: 'Click me!',
};
