const calcEm = (size: number) => `${size}em`;

const fontSizes = {
  xm: calcEm(0.59), //13px
  sm: calcEm(0.73), //16px
  md: calcEm(0.82), //18px
  lg: calcEm(0.91), //20px
  xl: calcEm(1.09), //24px
  xxl: calcEm(1.45), //32px
  titleSize: calcEm(2) //44px
};

const paddings = {
  xm: calcEm(0.59), //13px
  sm: calcEm(0.73), //16px
  md: calcEm(0.82), //18px
  lg: calcEm(0.91), //20px
  xl: calcEm(1.09), //24px
};

const margins = {
  small: calcEm(8),
  base: calcEm(10),
  lg: calcEm(12),
  xl: calcEm(14),
  xxl: calcEm(16),
  xxxl: calcEm(18),
};

const interval = {
  base: calcEm(50),
  lg: calcEm(100),
  xl: calcEm(150),
  xxl: calcEm(200),
};

const verticalInterval = {
  base: `${calcEm(10)} 0 ${calcEm(10)} 0`,
};

const deviceSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "450px",
  tablet: "768px",
  tabletL: "1024px",
};

const colors = {
  black: "#000000",
  white: "#FFFFFF",
  gray_1: "#222222",
  gray_2: "#767676",
  green_1: "#3cb46e",
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};

const theme = {
  fontSizes,
  colors,
  deviceSizes,
  device,
  paddings,
  margins,
  interval,
  verticalInterval
};

export default theme;