// Copyright (c) Standard Bots Company. All rights reserved.

import React from 'react';

import Table from './Table';
import { Size, main as mainTheme } from '../../../branding/themes';
import { styled } from '../../../theme/styled';

const TableComponent = styled(
  Table, {
  withFeeling: true,
  feelings: ({ theme }) => ({
    default: {
      main: theme.colors.inputBackground,
      alt: theme.colors.text,
    },
  }),
  ghostTransform: ({ main, alt }, { feelingKey, theme }) => {
    switch (feelingKey) {
      case 'default': {
        alt = theme.colors.text;
        break;
      }
      default: {
        alt = main;
        break;
      }
    }

    return {
      alt,
      main: alt.alpha(0),
    };
  },
  enumeratedAttributes: {
    size: {
      default: 'small',
      small: new Size(1.5, 'rem'),
      medium: new Size(2, 'rem'),
      large: new Size(4, 'rem'),
    },
  },
  passthroughProps: ['disabled'],
})`
  font-size: ${p => p.feeling.size.scale(0.5).string()};
  line-height: ${p => p.feeling.size.scale(2).string()};
  background-color: ${props => props.feeling.main.string()};
  color: ${props => props.feeling.alt.string()};
  table {
    width: 100%;
    table-layout: auto;
    border-collapse: seperate;
    border-spacing: 0px;
  }
  td, th {
    text-align: left;
    vertical-align: middle;
    padding-left: 15px;
    &>svg, &>div {
      vertical-align: middle;
    }
  }
  .dropdown {
    width: 15px;
    color: ${() => mainTheme.colors.lines.string()};
    cursor: pointer;
  }
  .checkbox {
    padding-left: 5px;
  }
  td.static {
    &:before {
      border-left: ${() => `2px solid ${mainTheme.colors.lines.string()}`};
      margin: auto 0;
      display: inline;
      content: "";
      position: relative;
      left: -15px;
    }
  }
  tbody {
    tr:nth-child(even) {
      background-color: ${() => mainTheme.colors.sidebarBackground.string()};
      td {
        border-bottom: ${() => `1px solid ${mainTheme.colors.lines.string()}`};
        border-top: ${() => `1px solid ${mainTheme.colors.lines.string()}`};
      }
    }
    tr:nth-child(odd) {
      background-color: ${() => mainTheme.colors.well.string()};
    }
  }
  .load-more {
    padding-left: 50px;
    background-color: ${props => props.feeling.main.string()};
    color: ${() => mainTheme.colors.textMuted.string()};
  }
`;

export default TableComponent;
