import * as React from 'react';
import CheckOptionButton from '../CheckOption';
import BottomArrow from './BottomArrow';
import { ITableHeader, ITableData, ITableRow } from './data';

export interface ITableProps {
  headers: ITableHeader;
  data: ITableData;
  status: boolean[];
}

export default class Table extends React.Component<ITableProps, any> {
  constructor(props: ITableProps) {
    super(props);
    const { headers, data, status } = props;

    this.state = {
      headers,
      data,
      status,
    };
  }
  
  handleCheck = (index: number) => () => {
    const { status } = this.state;
    status[index] = !status[index];
    this.setState(({ status }));
  }

  render() {
    const { headers, data, status } = this.state;

    return (
      <div {...this.props}>
        <table>
          <thead>
            <th className="dropdown">
              <BottomArrow />
            </th>
            <th className="checkbox">
              <CheckOptionButton ghost={false} accented small checked={false} />
            </th>
            {headers.map((header: string, key: number) => (
              <th>{header}</th>
            ))}
          </thead>
          <tbody>
            {data.map((row: ITableRow, ind: number) => (
              <tr key={ind}>
                <td className="dropdown">
                  <BottomArrow />
                </td>
                <td className="checkbox">
                  <CheckOptionButton
                    onClick={this.handleCheck(ind)}
                    checked={status[ind]}
                    ghost={false}
                    accented
                    small
                  />
                </td>
                {row.map((cell: string, cellKey: number) => (
                  <td className="static" key={cellKey}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="load-more">No more robots here...</div>
      </div>
    );
  }
}
