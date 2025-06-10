import localFont from 'next/font/local';

export const fontSans = localFont({
  src: '../public/fonts/Inter/Inter-VariableFont_opsz,wght.ttf',
  variable: '--font-sans',
  display: 'swap',
});

export const fontMono = localFont({
  src: '../public/fonts/FiraCode/FiraCode-VariableFont_wght.ttf',
  variable: '--font-mono',
  display: 'swap',
});
