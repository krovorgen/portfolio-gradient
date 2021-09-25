import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IParagraphProps, Paragraph } from './Paragraph';

import '@/scss/index.scss';

export default {
  title: 'Components/Paragraph',
  component: Paragraph,
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
      description: 'Choose size paragraph',
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<IParagraphProps> = (args) => <Paragraph {...args} />;

export const defaultParagraph = Template.bind({});
defaultParagraph.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aperiam consequatur dolorem doloremque error, ex inventore laborum libero, minima necessitatibus odio perspiciatis placeat quis quos sapiente sed totam voluptate.',
};
