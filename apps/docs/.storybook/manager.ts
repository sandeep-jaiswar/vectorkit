import { addons } from '@storybook/manager-api';
import VectorkitTheme from './VectorkitTheme';
import './addon-vectorkit';

addons.setConfig({
  theme: VectorkitTheme,
});
