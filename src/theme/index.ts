import * as styledComponents from 'styled-components';
// tslint:disable-next-line:no-duplicate-imports
import { ThemedStyledComponentsModule } from 'styled-components';

import { ITheme } from '../branding/themes'; // custom theme

type StyledFunction<T> = styledComponents.ThemedStyledFunction<T, ITheme>;

function withProps<T, U extends HTMLElement = HTMLElement>(
  styledFunction: StyledFunction<React.HTMLProps<U>>,
): StyledFunction<T & React.HTMLProps<U>> {
  return styledFunction;
}

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ITheme>;

export { css, injectGlobal, keyframes, ThemeProvider, withProps };
export default styled;
