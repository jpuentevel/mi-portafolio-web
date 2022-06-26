import { createTheme } from "@nextui-org/react";

export const myDefaultTheme = createTheme({
    type: 'dark',
    theme: {
        colors: {
            background: '#11021F',
            text: '#f9eaff',
            textHighBlue: '#00c2f9',
            textHighRose: '#FF499E',
            textGradientBlue: ''
        },
        fontSizes: {
            xs: '0.75rem', /* 12px */
            sm: '0.875rem', /* 14px */
            base: '1rem', /* 16px */
            md: '1rem', /* 16px */
            lg: '1.125rem', /* 18px */
            xl: '1.25rem', /* 20px */
            xl2: '1.5rem', /* 24px */
            xl3: '1.875rem', /* 30px */
            xl4: '2.25rem', /* 36px */
            xl5: '3rem', /* 48px */
            xl6: '3.75rem', /* 60px */
            xl7: '4.5rem', /* 72px */
            xl8: '6rem', /* 96px */
            xl9: '8rem', /* 128px */
        },
        fontWeights: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900
        },
        letterSpacings: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em'
        },
        lineHeights: {
            xs: 1, /* 16px */
            sm: 1.25, /* 20px */
            base: 1.5, /* 24px */
            md: 1.5, /* 24px */
            lg: 1.75, /* 28px */
            xl: 1.75, /* 28px */
            xl2: 2, /* 32px */
            xl3: 2.25, /* 36px */
            xl4: 2.5, /* 40px */
            xl5: 1,
            xl6: 1,
            xl7: 1,
            xl8: 1,
            xl9: 1
        }
    }
})