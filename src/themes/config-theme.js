import { StyleSheet } from 'react-native';
import { build } from '@agiletechvn/react-theme';
import colors from './colors';
import magicFunctions from './magicFunctions';

const fontRem = 20;

export const buildTheme = () => build(
  {
    colors,
    fontRem,
    ...magicFunctions
  },
  StyleSheet
);
