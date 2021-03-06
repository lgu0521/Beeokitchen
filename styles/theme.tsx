const calcEm = (size: number) => `${size}rem`;

const fontSizes = {
  promotionTitle1: calcEm(7.0),
  promotionTitle2: calcEm(6.5),
  title8: calcEm(1.0), //13px
  title7: calcEm(1.1), //13px
  title6: calcEm(1.3), //13px
  title5: calcEm(1.5), //15px
  title4: calcEm(1.8), //15px
  title3: calcEm(2.0), //18px
  title2: calcEm(3.2), //32px
  title1: calcEm(5.4), //54px
};

const fontWeight = {
  Thin: 100,
  ExtraLight: 200,
  Light: 300,
  Regular: 400,
  Medium: 500,
  SemiBold: 600,
  Bold: 700,
  ExtraBold: 800,
  Black: 900
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
  line: "#326F54",
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
  verticalInterval,
  fontWeight
};

export default theme;