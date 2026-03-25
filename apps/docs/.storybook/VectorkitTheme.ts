import { create } from '@storybook/theming/create';
import { tokens } from '@vectorkit/design-tokens';

export default create({
  base: 'light',
  // Brand
  brandTitle: 'vectorkit',
  brandUrl: 'https://github.com/sandeepjaiswar/vectorkit',
  brandImage: './logo.png',
  brandTarget: '_self',

  // UI
  appBg: tokens.colors.surface,
  appContentBg: tokens.colors.surfaceContainerLowest,
  appPreviewBg: tokens.colors.surface,
  appBorderColor: tokens.colors.surfaceContainerHigh,
  appBorderRadius: 12,

  // Text colors
  textColor: tokens.colors.onSurface,
  textInverseColor: tokens.colors.surfaceContainerLowest,

  // Toolbar default and active colors
  barTextColor: tokens.colors.onSurface,
  barSelectedColor: tokens.colors.primary,
  barBg: tokens.colors.surfaceContainerLow,

  // Form colors
  inputBg: tokens.colors.surfaceContainerLowest,
  inputBorder: tokens.colors.outlineVariant,
  inputTextColor: tokens.colors.onSurface,
  inputBorderRadius: 8,

  // Typography
  fontBase: tokens.typography.fontFamily,
  fontCode: 'monospace',

  // Colors
  colorPrimary: tokens.colors.primary,
  colorSecondary: tokens.colors.primaryContainer,
});
