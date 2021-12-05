const size = {
  desktop: "2560px",
  laptopL: "1440px",
  laptopM: "1200px",
  laptop: "1050px",
  tablet: "768px",
  tabletSM: "600px",
  mobileL: "480px",
  mobileM: "375px",
  mobileS: "320px",
};

export const device = {
  desktop: `(max-width:${size.desktop})`,
  laptopL: `(max-width:${size.laptopL})`,
  laptopM: `(max-width:${size.laptopM})`,
  laptop: `(max-width:${size.laptop})`,
  tablet: `(max-width:${size.tablet})`,
  tabletSM: `(max-width:${size.tabletSM})`,
  mobileL: `(max-width:${size.mobileL})`,
  mobileM: `(max-width:${size.mobileM})`,
  mobileS: `(max-width:${size.mobileS})`,
};
/*
to use in another file
1. import into the file e.g import {device} from "./MediaQueries.js"
2. Whatever you want to make responsive use..


@media ${device.laptop}{

}
  
*/
