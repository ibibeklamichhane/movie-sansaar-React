import { extendTheme } from '@chakra-ui/react';

const themeConfig = {
    config: {
        initialColorMode: localStorage.getItem('rmsTheme') || 'light',
        useSystemColorMode: !localStorage.getItem('rmsTheme'),
    },
    colors: {
        brand:{
            "900":"#00FFFF",
            "800":"#00E5E5",
            "700":"#00cccc",
            "600":"#dbc604",
            "500":"#00b2b2",
            "400":"#009999",

        },
        dark: {
            "900": "#1F1D1F",
            "800": "#262425",
            "700": "#2D2B2C",
            "600": "#363435"
        },
        text: {
            "500": "#c7c3c5",
            "400": "#d4d2d3",
            "300": "#e6e6e6",
            "200": "#f7f5f6",
            "100": "#ffffff"
        },
        error:{
            "900":"#d91c1c",
            "700":"#e82323",
            "500":"#fa2a2a"
        },
        success:{
            "900":"#1cd91c",
            "700":"#23e823",
            "500":"#2afa2a"
        }
    },
    fonts: {
        Nunito: "'Nunito', sans-serif",
        Playfair: "'Playfair Display', serif"
    },
    fontWeights: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700"
    },
    fontSizes: {
        xxxl:"45px",
        xxl:"40px",
        xl: "35px",
        lg: "30px",
        md: "25px",
        rg: "20px",
        sm: "18px",
        xs: "16px",
        xxs:"14px",
        xxxs:"12px"
    },
    components: {
        Checkbox: {
          baseStyle: {
            control: {
              bg: "dark.700",
              _checked: {
                bg: "dark.700"
              }
            }
          }
        }
      }
}

export const theme = extendTheme(themeConfig);