import { css, useTheme } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

import ManropeMedium from '../assets/fonts/Manrope-Medium.ttf';
import ManropeRegular from '../assets/fonts/Manrope-Regular.ttf';
import ManropeSemiBold from '../assets/fonts/Manrope-SemiBold.ttf';
import MontserratRegular from '../assets/fonts/Montserrat-Regular.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';

export const GlobalStyles = () => {
  const theme = useTheme();
  return css`
    ${emotionNormalize}

    /* ========================= Reset styles ========================= */
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }

    body {
      line-height: 1;
    }

    ol,
    ul {
      list-style: none;
    }

    blockquote,
    q {
      quotes: none;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: '';
      content: none;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    a {
      color: currentColor;
      text-decoration: none;
    }

    button {
      cursor: pointer;
      border: none;
    }

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    select::-ms-expand {
      display: none;
    }
    /* ========================= /Reset styles ========================= */

    /* ========================= Fonts ========================= */

    @font-face {
      font-family: 'Manrope';
      font-weight: 400;
      src: url(${ManropeRegular}) format('truetype');
    }

    @font-face {
      font-family: 'Manrope';
      font-weight: 500;
      src: url(${ManropeMedium}) format('truetype');
    }

    @font-face {
      font-family: 'Manrope';
      font-weight: 700;
      src: url(${ManropeSemiBold}) format('truetype');
    }

    @font-face {
      font-family: 'Montserrat';
      font-weight: 400;
      src: url(${MontserratRegular}) format('truetype');
    }

    @font-face {
      font-family: 'Montserrat';
      font-weight: 600;
      src: url(${MontserratSemiBold}) format('truetype');
    }

    /* ========================= /Fonts ========================= */

    /* ========================= Common styles ========================= */
    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Manrope', sans-serif;
      font-weight: 400;
      font-size: 14px;
      color: ${theme.colors.textGrey_100};
      background-color: ${theme.colors.backgroundMain};
    }
    /* ========================= /Common styles ========================= */

    /* ========================= /Scroll styles ========================= */

    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #8a8a89;
      border-radius: 8px;
    }

    ::-webkit-scrollbar-track {
      background-color: rgba(239, 237, 232, 0.1);
    }

    /* Firefox */
    * {
      scrollbar-color: #8a8a89 rgba(239, 237, 232, 0.1);
    }

    /* ========================= /Scroll styles ========================= */
  `;
};
