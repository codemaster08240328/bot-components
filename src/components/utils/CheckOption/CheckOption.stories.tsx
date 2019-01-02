import * as React from 'react';

import { boolean, radios, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import CheckOptionButton from './CheckOption.styled';
import { wInfo } from '../../../utils';

interface IProperties {
  size?: boolean;
  feeling?: boolean;
  [key: string]: boolean | undefined;
};

storiesOf('Components/CheckOptionButton', module).add(
  'Check Option Button',
  wInfo(`

  ### Notes

  Check Switch Button

  ### Usage
  ~~~tsx
  <Button id="some-id">Some text</Button>
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
      'medium',
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
      'accented',
    );

    if (feeling) {
      dynamicProperties[feeling] = true;
    }

    return (
      <CheckOptionButton
        ghost={boolean('Ghost', false)}
        onClick={() => alert('hello there')}
        checked={boolean('Checked', true)}
        {...dynamicProperties}
      />
    );
  }),
);
