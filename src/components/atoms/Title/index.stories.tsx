import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Title, ITitleProps } from './Title';

import '@/scss/index.scss';

export default {
  title: 'Components/Title',
  component: Title,
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
    tag: {
      description: 'Choose title tag',
      options: ['h1', 'h2', 'h3'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<ITitleProps> = (args) => <Title {...args} />;

export const defaultTitle = Template.bind({});
defaultTitle.args = {
  children: 'Click me!',
};
