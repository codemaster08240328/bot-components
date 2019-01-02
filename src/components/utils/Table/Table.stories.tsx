import React from 'react';

import { boolean, radios } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { tableHeaders, tableData, status } from './data';

import Table from './Table.styled';
import { wInfo } from '../../../utils';

interface IProperties {
  size?: boolean;
  feeling?: boolean;
  [key: string]: boolean | undefined;
}

storiesOf('Components/Table', module).add(
  'Table',
  wInfo(`

  ### Notes

  Table component
  
  ### Usage
  ~~~ts
  <Table>
    <th>some text</th>
    <td>
      <tr>some text</tr>
    </td>
  </Table>
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
      'none',
    );

    if (feeling) {
      dynamicProperties[feeling] = true;
    }

    return (
      <Table
        ghost={boolean('Ghost', false)}
        style={{ width: '960px' }}
        headers={tableHeaders}
        data={tableData}
        status={status}
        {...dynamicProperties}
      />
    );
  }),
);
