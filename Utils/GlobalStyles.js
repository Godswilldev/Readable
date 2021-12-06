import { createGlobalStyle } from "styled-components";
import { device } from "./MediaQueries";
import { colors } from "./Theme";

export const Global = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

 html{
        box-sizing: border-box;
        @media ${device.desktop}{
            font-size: 100%;
        }
        @media ${device.laptopL}{
            font-size: 62.5%;
        }
        @media ${device.laptop}{
            font-size: 56.6%;
        }
        @media ${device.tablet}{
            font-size: 50.5%;
        }
        @media ${device.mobileL}{
            font-size: 44.5%;
        }
        @media ${device.mobileM}{
            font-size: 38.5%;
        }
        @media ${device.mobileS}{
            font-size:32.5%;
        }
    }

    a{
        text-decoration: none;
    }

    li{
      list-style: none;
    }

  body {
    font-family: 'Jost', sans-serif;
    background: ${colors.col4};
    color: ${colors.col6};
  }`;
