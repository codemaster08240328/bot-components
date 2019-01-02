import React from 'react';

import { boolean, radios, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Button } from './ButtonTS';
import { wInfo } from '../../../utils';

interface IProperties {
  size?: boolean;
  feeling?: boolean;
  [key: string]: boolean | undefined;
};

storiesOf('Components/ButtonTS', module).add(
  'Basic Button',
  wInfo(`

  ### Notes

  Button with typescript implementation
  
  ### Usage
  ~~~ts
  <Button positive onClick={() => alert('hello there')}>Some Text</Button>
  ~~~`)(() => {
    const dynamicProperties: IProperties = {};

    const size = radios(
      'size',
      {
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
        '(None)': false,
      },
      false,
    );

    if (size) {
      dynamicProperties[size] = true;
    }

    const feeling = radios(
      'feeling',
      {
        Danger: 'danger',
        Negative: 'negative',
        Warning: 'warning',
        Positive: 'positive',
        Accented: 'accented',
        Disabled: 'disabled',
        '(None)': false,
      },
      'positive',
    );

    if (feeling) {
      dynamicProperties[feeling] = true;
    }

    return (
      <Button
        ghost={boolean('Ghost', false)}
        onClick={() => alert('hello there')}
        {...dynamicProperties}
      >
        {text('label', 'Some Text')}
      </Button>
    );
  }),
);
