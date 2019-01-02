import React from 'react';
import CheckOption from './CheckOption';
import { Size, main as mainTheme } from '../../../branding/themes';
import { styled } from '../../../theme/styled';

const CheckOptionButton = styled(CheckOption, {
  withFeeling: true,
  feelings: ({ theme }) => ({
    default: {
      main: theme.colors.accent,
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
      small: new Size(1.3, 'rem'),
      medium: new Size(2, 'rem'),
      large: new Size(4, 'rem'),
    },
  },
  passthroughProps: ['disabled'],
})`
  ${props => {
    return props.block
      ? `
      display: block;
      width: 100%;
    `
      : `
     display: inline-block;
  `;
  }};
  height: ${props => props.feeling.size.string()};
  width: ${props => props.feeling.size.string()};
  font-size: ${props => props.feeling.size.scale(0.4).string()};
  font-weight: bold;
  background-color: ${props => {
    return props.checked ? props.feeling.main.string() : 'transparent';
  }};
  color: ${props => props.feeling.alt.string()};
  border: ${props =>
    `1px solid ${
      props.checked ? 'transparent' : mainTheme.colors.lines.string()
    }`};
  border-radius: 50%;
  cursor: pointer;
  svg {
    display: ${props => {
      return props.checked ? 'block' : 'none';
    }};
    position: relative;
    left: ${props => props.feeling.size.scale(0.3).string()};
    top: ${props => props.feeling.size.scale(0.3).string()};
  }
`;

export default CheckOptionButton;
