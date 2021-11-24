const size = {
  desktop: "2560px",
  laptopL: "1440px",
  laptop: "1024px",
  tablet: "768px",
  mobileL: "480px",
  mobileM: "375px",
  mobileS: "320px",
};

export const device = {
  desktop: `(max-width:${size.desktop})`,
  laptopL: `(max-width:${size.laptopL})`,
  laptop: `(max-width:${size.laptop})`,
  tablet: `(max-width:${size.tablet})`,
  mobileL: `(max-width:${size.mobileL})`,
  mobileM: `(max-width:${size.mobileM})`,
  mobileS: `(max-width:${size.mobileS})`,
};

// to use in another file
// 1. import into the file e.g import {device} from "./MediaQueries.js"
// 2. Wherever you want to make responsive use..

// @media ${device.laptop}{

// }
