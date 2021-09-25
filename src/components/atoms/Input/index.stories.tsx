import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, IInputProps } from './Input';

import '@/scss/index.scss';

export default {
  title: 'Components/Input',
  component: Input,
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
} as Meta;

const Template: Story<IInputProps> = (args) => <Input {...args} />;

export const defaultInput = Template.bind({});
defaultInput.args = {
  placeholder: 'Ваше имя',
};
