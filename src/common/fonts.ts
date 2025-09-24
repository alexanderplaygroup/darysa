import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const boston = localFont({
  src: [
    { path: '../app/_fonts/boston/BostonThin.otf', weight: '100', style: 'normal' },
    { path: '../app/_fonts/boston/BostonExtralight.otf', weight: '200', style: 'normal' },
    { path: '../app/_fonts/boston/BostonLight.otf', weight: '300', style: 'normal' },
    { path: '../app/_fonts/boston/BostonRegular.otf', weight: '400', style: 'normal' },
    { path: '../app/_fonts/boston/BostonSemibold.otf', weight: '600', style: 'normal' },
    { path: '../app/_fonts/boston/BostonBold.otf', weight: '700', style: 'normal' },
    { path: '../app/_fonts/boston/BostonHeavy.otf', weight: '800', style: 'normal' },
    { path: '../app/_fonts/boston/BostonBlack.otf', weight: '900', style: 'normal' },
  ],
  display: 'swap',
});
