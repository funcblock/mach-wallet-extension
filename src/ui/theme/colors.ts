// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  white: '#ffffff',
  white_muted: 'rgba(255, 255, 255, 0.5)',
  black: '#000000',
  black_muted: 'rgba(0, 0, 0, 0.5)',
  black_muted2: 'rgba(0, 0, 0, 0.)',

  dark: '#1E283C',
  grey: '#495361',
  light: '#A2A4AA',

  black_dark: '#2a2626',

  green_dark2: '#2D7E24',
  green_dark: '#379a29',
  green: '#41B530',
  green_light: '#5ec04f',

  yellow_dark: '#e2dffe',
  yellow: '#ab9ff2',
  yellow_light: '#ab47bc',

  red_dark: '#c92b40',
  red: '#ED334B',
  red_light: '#f05266',

  blue_dark: '#1461d1',
  blue: '#1872F6',
  blue_light: '#c6dcfd',

  orange_dark: '#6a1b9a',
  orange: '#9c27b0',
  orange_light: '#ab47bc',

  gold: '#7b1fa2'
};

export const colors = Object.assign({}, palette, {
  transparent: 'rgba(0, 0, 0, 0)',

  text: palette.white,

  textDim: palette.white_muted,

  background: '#D8E0EF',

  error: '#e52937',

  danger: palette.red,

  card: '#262222',
  warning: palette.orange,
  primary: palette.yellow,

  bg2: '#2a2a2a',
  bg3: '#434242',
  bg4: '#383535',

  border: 'rgba(255,255,255,0.1)',

  icon_yellow: '#ab47bc',

  brc20_deploy: '#233933',
  brc20_transfer: '#375e4d',
  brc20_transfer_selected: '#41B530',
  brc20_other: '#3e3e3e'
});

export type ColorTypes = keyof typeof colors;
