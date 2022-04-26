import React from "react";
import windowsLogo from '../images/osIMG/windows_logo.svg';
import macosLogo from '../images/osIMG/MacOS_logo.svg';
import androidLogo from '../images/osIMG/Android_logo.svg';
import iosLogo from '../images/osIMG/IOS_logo.svg';

function OptimalBlock() {

  const prices = [27.99, 43.99, 35.99, 63.99, 43.99, 71.99];
  const options = [
    '1 Device, 1 Year',
    '1 Device, 2 Years',
    '3 Devices, 1 Year',
    '3 Devices, 2 Years',
    '5 Devices, 1 Year',
    '5 Devices, 2 Years'
  ];
  const [isSelectOpened, setSelectOpened] = React.useState(false);
  const [price, setPrice] = React.useState(prices[0]);
  const [option, setOption] = React.useState(options[0]);
  const [salePrice, setSalePrice] = React.useState(prices[0] - prices[0] * 0.2);

  React.useEffect(() => {
    selectClose();
  }, [price]);

  function selectOpen() {
    setSelectOpened(true);
  }

  function selectClose() {
    setSelectOpened(false);
  }

  function paramsChange(event) {
    setPrice(prices[event.target.id]);
    setOption(options[event.target.id])
    setSalePrice(prices[event.target.id] - prices[event.target.id] * 0.2);
  }

  return (
    <section className="optimal-block">
      <div className="optimal-block__first-block">
        <div className="os-block">
          <p className="os-block__text">Compatible with:</p>
          <img src={windowsLogo} alt="Windows" className="os-block__icon"/>
          <img src={macosLogo} alt="MacOS" className="os-block__icon"/>
          <img src={androidLogo} alt="Android" className="os-block__icon"/>
          <img src={iosLogo} alt="IOS" className="os-block__icon"/>
        </div>
        <div className="sale-block">
          <p className="sale-block__text">Save 20%</p>
        </div>
      </div>
      <div className="optimal-block__second-block">
        <div className="product-block">
          <svg className="product-block__icon" width="80" height="89" viewBox="0 0 80 89" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.26444 19.3876L7.26444 19.3876L7.2587 19.391C4.00606 21.2937 2 24.8015 2 28.5914V60.4086C2 64.1935 4.00221 67.7199 7.26444 69.6124C7.26466 69.6125 7.26488 69.6126 7.2651 69.6128L34.7913 85.5927C38.0221 87.4689 41.9769 87.4691 45.2078 85.5932C45.2081 85.5931 45.2084 85.5929 45.2087 85.5927L72.7349 69.6258C75.9975 67.7334 78 64.2068 78 60.4217V28.5914C78 24.8063 75.9975 21.2797 72.7349 19.3872L45.2087 3.40729C45.2086 3.40724 45.2085 3.40719 45.2084 3.40714C41.9775 1.53096 38.0225 1.53095 34.7916 3.40714C34.7915 3.40719 34.7914 3.40724 34.7913 3.40729L7.26444 19.3876Z"
              fill="#00A88E" stroke="white" strokeWidth="4"/>
            <path d="M58 23.5999H22V24.9063H58V23.5999Z" fill="#4D4D4F"/>
            <path
              d="M46.4287 52.3459C46.4287 50.9088 43.5487 49.733 40.0001 49.733C36.4515 49.733 33.5715 50.9088 33.5715 52.3459C33.5715 53.783 36.4515 54.9588 40.0001 54.9588C43.5487 54.9588 46.4287 53.783 46.4287 52.3459Z"
              fill="#4D4D4F"/>
            <path d="M58 24.9068H22V52.3467H58V24.9068Z" fill="#6D6E71"/>
            <path d="M55.4287 27.5198H24.5715V49.733H55.4287V27.5198Z" fill="#44ADE2"/>
            <path d="M58.0002 64.1065H42.5717V65.413H58.0002V64.1065Z" fill="#6D6E71"/>
            <path d="M58.0002 57.5731H42.5717V64.1054H58.0002V57.5731Z" fill="#4D4D4F"/>
            <path d="M56.7141 58.8796H43.857V62.799H56.7141V58.8796Z" fill="#A5CF4C"/>
            <path
              d="M39.9999 30.7211L34.2142 34.0139V40.5342C34.2142 44.5848 39.9999 46.5317 39.9999 46.5317C39.9999 46.5317 45.7856 44.5979 45.7856 40.5342V34.0139L39.9999 30.7211ZM44.4999 40.5342C44.4999 43.0299 41.1699 44.6371 39.9999 45.1336C38.8299 44.6371 35.4999 43.0299 35.4999 40.5342V34.7848L39.9999 32.2238L44.4999 34.7848V40.5342Z"
              fill="white"/>
            <path d="M40 43.2H22V65.4132H40V43.2Z" fill="#6D6E71"/>
            <path d="M40 41.8932H22V43.1996H40V41.8932Z" fill="#4D4D4F"/>
            <path d="M38.7144 44.5067H23.2858V62.7999H38.7144V44.5067Z" fill="#F04E45"/>
            <path
              d="M30.9999 48.3871L27.1428 50.5823V54.9335C27.1428 57.6383 30.9999 58.9319 30.9999 58.9319C30.9999 58.9319 34.857 57.6383 34.857 54.9335V50.5823L30.9999 48.3871ZM33.5713 54.9335C33.5713 56.1487 31.9513 57.1157 30.9999 57.5338C30.0485 57.1157 28.4285 56.1618 28.4285 54.9335V51.3533L30.9999 49.8898L33.5713 51.3533V54.9335Z"
              fill="white"/>
          </svg>
          <div className="product-block__rating-block">
            <h3 className="product__title">Kaspersky Internet Security</h3>
            <svg className="product__stars" width="193" height="20" viewBox="0 0 193 20" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.71916 4.42764C9.10224 3.10339 9.29378 2.44126 9.58904 2.2739C9.84395 2.1294 10.156 2.1294 10.4109 2.2739C10.7062 2.44126 10.8977 3.10339 11.2808 4.42764L11.7809 6.15642C11.8839 6.51261 11.9355 6.6907 12.0405 6.82108C12.1332 6.93612 12.2547 7.02446 12.3928 7.07705C12.5492 7.13665 12.7345 7.13061 13.1051 7.11854L14.9038 7.05994C16.2817 7.01505 16.9706 6.99261 17.221 7.2217C17.4372 7.41948 17.5336 7.71627 17.475 8.00335C17.407 8.33588 16.8365 8.72265 15.6954 9.4962L14.2058 10.506C13.8989 10.7141 13.7454 10.8181 13.6539 10.9583C13.5731 11.082 13.5267 11.2249 13.5193 11.3725C13.511 11.5397 13.574 11.7141 13.7 12.0628L14.3115 13.7553C14.78 15.0519 15.0142 15.7001 14.8737 16.0091C14.7524 16.2758 14.5 16.4592 14.2088 16.4922C13.8716 16.5303 13.3274 16.1072 12.2391 15.261L10.8184 14.1564C10.5257 13.9288 10.3793 13.815 10.2177 13.7712C10.0751 13.7326 9.92483 13.7326 9.78224 13.7712C9.62063 13.815 9.47428 13.9288 9.18156 14.1564L7.76081 15.261C6.67252 16.1072 6.12837 16.5303 5.79113 16.4922C5.49997 16.4592 5.24751 16.2758 5.12621 16.0091C4.98572 15.7001 5.21995 15.0519 5.68841 13.7553L6.29997 12.0628C6.42597 11.7141 6.48897 11.5397 6.48063 11.3725C6.47328 11.2249 6.42684 11.082 6.34606 10.9583C6.25452 10.8181 6.10107 10.7141 5.79416 10.506L4.30453 9.4962C3.16346 8.72265 2.59293 8.33588 2.525 8.00335C2.46635 7.71627 2.56278 7.41948 2.77897 7.2217C3.02939 6.99261 3.7183 7.01505 5.09612 7.05994L6.89482 7.11854C7.26542 7.13061 7.45071 7.13665 7.60717 7.07705C7.74521 7.02446 7.8668 6.93612 7.95947 6.82108C8.0645 6.6907 8.11602 6.51261 8.21906 6.15642L8.71916 4.42764Z"
                fill="#FFE810"/>
              <path
                d="M28.7192 4.42764C29.1022 3.10339 29.2938 2.44126 29.589 2.2739C29.8439 2.1294 30.156 2.1294 30.4109 2.2739C30.7062 2.44126 30.8977 3.10339 31.2808 4.42764L31.7809 6.15642C31.8839 6.51261 31.9355 6.6907 32.0405 6.82108C32.1332 6.93612 32.2547 7.02446 32.3928 7.07705C32.5492 7.13665 32.7345 7.13061 33.1051 7.11854L34.9038 7.05994C36.2817 7.01505 36.9706 6.99261 37.221 7.2217C37.4372 7.41948 37.5336 7.71627 37.475 8.00335C37.407 8.33588 36.8365 8.72265 35.6954 9.4962L34.2058 10.506C33.8989 10.7141 33.7454 10.8181 33.6539 10.9583C33.5731 11.082 33.5267 11.2249 33.5193 11.3725C33.511 11.5397 33.574 11.7141 33.7 12.0628L34.3115 13.7553C34.78 15.0519 35.0142 15.7001 34.8737 16.0091C34.7524 16.2758 34.5 16.4592 34.2088 16.4922C33.8716 16.5303 33.3274 16.1072 32.2391 15.261L30.8184 14.1564C30.5257 13.9288 30.3793 13.815 30.2177 13.7712C30.0751 13.7326 29.9248 13.7326 29.7822 13.7712C29.6206 13.815 29.4743 13.9288 29.1816 14.1564L27.7608 15.261C26.6725 16.1072 26.1284 16.5303 25.7911 16.4922C25.5 16.4592 25.2475 16.2758 25.1262 16.0091C24.9857 15.7001 25.2199 15.0519 25.6884 13.7553L26.3 12.0628C26.426 11.7141 26.489 11.5397 26.4806 11.3725C26.4733 11.2249 26.4268 11.082 26.3461 10.9583C26.2545 10.8181 26.1011 10.7141 25.7942 10.506L24.3045 9.4962C23.1635 8.72265 22.5929 8.33588 22.525 8.00335C22.4664 7.71627 22.5628 7.41948 22.779 7.2217C23.0294 6.99261 23.7183 7.01505 25.0961 7.05994L26.8948 7.11854C27.2654 7.13061 27.4507 7.13665 27.6072 7.07705C27.7452 7.02446 27.8668 6.93612 27.9595 6.82108C28.0645 6.6907 28.116 6.51261 28.2191 6.15642L28.7192 4.42764Z"
                fill="#FFE810"/>
              <path
                d="M48.7192 4.42764C49.1022 3.10339 49.2938 2.44126 49.589 2.2739C49.8439 2.1294 50.156 2.1294 50.4109 2.2739C50.7062 2.44126 50.8977 3.10339 51.2808 4.42764L51.7809 6.15642C51.8839 6.51261 51.9355 6.6907 52.0405 6.82108C52.1332 6.93612 52.2547 7.02446 52.3928 7.07705C52.5492 7.13665 52.7345 7.13061 53.1051 7.11854L54.9038 7.05994C56.2817 7.01505 56.9706 6.99261 57.221 7.2217C57.4372 7.41948 57.5336 7.71627 57.475 8.00335C57.407 8.33588 56.8365 8.72265 55.6954 9.4962L54.2058 10.506C53.8989 10.7141 53.7454 10.8181 53.6539 10.9583C53.5731 11.082 53.5267 11.2249 53.5193 11.3725C53.511 11.5397 53.574 11.7141 53.7 12.0628L54.3115 13.7553C54.78 15.0519 55.0142 15.7001 54.8737 16.0091C54.7524 16.2758 54.5 16.4592 54.2088 16.4922C53.8716 16.5303 53.3274 16.1072 52.2391 15.261L50.8184 14.1564C50.5257 13.9288 50.3793 13.815 50.2177 13.7712C50.0751 13.7326 49.9248 13.7326 49.7822 13.7712C49.6206 13.815 49.4743 13.9288 49.1816 14.1564L47.7608 15.261C46.6725 16.1072 46.1284 16.5303 45.7911 16.4922C45.5 16.4592 45.2475 16.2758 45.1262 16.0091C44.9857 15.7001 45.2199 15.0519 45.6884 13.7553L46.3 12.0628C46.426 11.7141 46.489 11.5397 46.4806 11.3725C46.4733 11.2249 46.4268 11.082 46.3461 10.9583C46.2545 10.8181 46.1011 10.7141 45.7942 10.506L44.3045 9.4962C43.1635 8.72265 42.5929 8.33588 42.525 8.00335C42.4664 7.71627 42.5628 7.41948 42.779 7.2217C43.0294 6.99261 43.7183 7.01505 45.0961 7.05994L46.8948 7.11854C47.2654 7.13061 47.4507 7.13665 47.6072 7.07705C47.7452 7.02446 47.8668 6.93612 47.9595 6.82108C48.0645 6.6907 48.116 6.51261 48.2191 6.15642L48.7192 4.42764Z"
                fill="#FFE810"/>
              <path
                d="M68.7192 4.42764C69.1022 3.10339 69.2938 2.44126 69.589 2.2739C69.8439 2.1294 70.156 2.1294 70.4109 2.2739C70.7062 2.44126 70.8977 3.10339 71.2808 4.42764L71.7809 6.15642C71.8839 6.51261 71.9355 6.6907 72.0405 6.82108C72.1332 6.93612 72.2547 7.02446 72.3928 7.07705C72.5492 7.13665 72.7345 7.13061 73.1051 7.11854L74.9038 7.05994C76.2817 7.01505 76.9706 6.99261 77.221 7.2217C77.4372 7.41948 77.5336 7.71627 77.475 8.00335C77.407 8.33588 76.8365 8.72265 75.6954 9.4962L74.2058 10.506C73.8989 10.7141 73.7454 10.8181 73.6539 10.9583C73.5731 11.082 73.5267 11.2249 73.5193 11.3725C73.511 11.5397 73.574 11.7141 73.7 12.0628L74.3115 13.7553C74.78 15.0519 75.0142 15.7001 74.8737 16.0091C74.7524 16.2758 74.5 16.4592 74.2088 16.4922C73.8716 16.5303 73.3274 16.1072 72.2391 15.261L70.8184 14.1564C70.5257 13.9288 70.3793 13.815 70.2177 13.7712C70.0751 13.7326 69.9248 13.7326 69.7822 13.7712C69.6206 13.815 69.4743 13.9288 69.1816 14.1564L67.7608 15.261C66.6725 16.1072 66.1284 16.5303 65.7911 16.4922C65.5 16.4592 65.2475 16.2758 65.1262 16.0091C64.9857 15.7001 65.2199 15.0519 65.6884 13.7553L66.3 12.0628C66.426 11.7141 66.489 11.5397 66.4806 11.3725C66.4733 11.2249 66.4268 11.082 66.3461 10.9583C66.2545 10.8181 66.1011 10.7141 65.7942 10.506L64.3045 9.4962C63.1635 8.72265 62.5929 8.33588 62.525 8.00335C62.4664 7.71627 62.5628 7.41948 62.779 7.2217C63.0294 6.99261 63.7183 7.01505 65.0961 7.05994L66.8948 7.11854C67.2654 7.13061 67.4507 7.13665 67.6072 7.07705C67.7452 7.02446 67.8668 6.93612 67.9595 6.82108C68.0645 6.6907 68.116 6.51261 68.2191 6.15642L68.7192 4.42764Z"
                fill="#FFE810"/>
              <path
                d="M88.7192 4.42764C89.1022 3.10339 89.2938 2.44126 89.589 2.2739C89.8439 2.1294 90.156 2.1294 90.4109 2.2739C90.7062 2.44126 90.8977 3.10339 91.2808 4.42764L91.7809 6.15642C91.8839 6.51261 91.9355 6.6907 92.0405 6.82108C92.1332 6.93612 92.2547 7.02446 92.3928 7.07705C92.5492 7.13665 92.7345 7.13061 93.1051 7.11854L94.9038 7.05994C96.2817 7.01505 96.9706 6.99261 97.221 7.2217C97.4372 7.41948 97.5336 7.71627 97.475 8.00335C97.407 8.33588 96.8365 8.72265 95.6954 9.4962L94.2058 10.506C93.8989 10.7141 93.7454 10.8181 93.6539 10.9583C93.5731 11.082 93.5267 11.2249 93.5193 11.3725C93.511 11.5397 93.574 11.7141 93.7 12.0628L94.3115 13.7553C94.78 15.0519 95.0142 15.7001 94.8737 16.0091C94.7524 16.2758 94.5 16.4592 94.2088 16.4922C93.8716 16.5303 93.3274 16.1072 92.2391 15.261L90.8184 14.1564C90.5257 13.9288 90.3793 13.815 90.2177 13.7712C90.0751 13.7326 89.9248 13.7326 89.7822 13.7712C89.6206 13.815 89.4743 13.9288 89.1816 14.1564L87.7608 15.261C86.6725 16.1072 86.1284 16.5303 85.7911 16.4922C85.5 16.4592 85.2475 16.2758 85.1262 16.0091C84.9857 15.7001 85.2199 15.0519 85.6884 13.7553L86.3 12.0628C86.426 11.7141 86.489 11.5397 86.4806 11.3725C86.4733 11.2249 86.4268 11.082 86.3461 10.9583C86.2545 10.8181 86.1011 10.7141 85.7942 10.506L84.3045 9.4962C83.1635 8.72265 82.5929 8.33588 82.525 8.00335C82.4664 7.71627 82.5628 7.41948 82.779 7.2217C83.0294 6.99261 83.7183 7.01505 85.0961 7.05994L86.8948 7.11854C87.2654 7.13061 87.4507 7.13665 87.6072 7.07705C87.7452 7.02446 87.8668 6.93612 87.9595 6.82108C88.0645 6.6907 88.116 6.51261 88.2191 6.15642L88.7192 4.42764Z"
                fill="url(#paint0_linear_0_97)"/>
              <path
                d="M110.618 18.324H111.71C110.422 16.546 109.54 14.656 109.54 12.262C109.54 9.854 110.422 7.978 111.71 6.2H110.618C109.232 8.132 108.504 10.022 108.504 12.262C108.504 14.502 109.232 16.392 110.618 18.324ZM114.354 16H115.376V6.2H114.55L112.408 7.502V8.58L114.186 7.544H114.354V16ZM120.136 16.168C122.278 16.168 123.398 14.432 123.398 12.612C123.398 10.498 122.054 9.294 120.444 9.294C119.688 9.294 118.904 9.532 118.4 10.092H118.232L118.47 7.222H122.67V6.2H117.518L117.196 11.52H118.218C118.484 10.932 119.156 10.302 120.248 10.302C121.452 10.302 122.376 11.17 122.376 12.668C122.376 14.334 121.284 15.16 120.15 15.16C119.156 15.16 118.05 14.53 117.91 13.158H116.888C116.958 14.67 118.092 16.168 120.136 16.168ZM128.212 16.168C130.34 16.168 131.88 14.376 131.88 11.1C131.88 7.824 130.34 6.032 128.212 6.032C126.084 6.032 124.544 7.824 124.544 11.1C124.544 14.376 126.084 16.168 128.212 16.168ZM128.212 15.146C126.672 15.146 125.608 13.718 125.608 11.1C125.608 8.482 126.672 7.054 128.212 7.054C129.766 7.054 130.816 8.482 130.816 11.1C130.816 13.718 129.766 15.146 128.212 15.146ZM136.392 16.168C138.59 16.168 139.626 14.544 139.626 12.948C139.626 11.086 138.366 9.952 136.7 9.938V9.77L139.01 7.054V6.2H133.396V7.152H137.764L135.174 10.148V10.764H136.126C137.666 10.764 138.59 11.59 138.59 12.962C138.59 14.292 137.638 15.216 136.392 15.216C135.286 15.216 134.194 14.53 134.068 13.004H133.046C133.102 14.698 134.236 16.168 136.392 16.168ZM144.044 16H145.066V12.248C145.066 10.974 145.612 10.176 146.788 10.176H147.782V9.154H146.886C146.018 9.154 145.528 9.574 145.22 10.19H145.066V9.252H144.044V16ZM151.636 16.168C153.26 16.168 154.296 15.244 154.646 13.886H153.61C153.33 14.614 152.77 15.188 151.636 15.188C150.376 15.188 149.48 14.432 149.368 12.934H154.744V12.15C154.744 10.386 153.498 9.084 151.622 9.084C149.55 9.084 148.332 10.652 148.332 12.654C148.332 14.67 149.578 16.168 151.636 16.168ZM149.396 12.052C149.55 10.764 150.46 10.05 151.622 10.05C153.036 10.05 153.736 11.002 153.722 12.052H149.396ZM157.805 16H159.247L161.823 9.252H160.689L158.771 14.404C158.715 14.558 158.659 14.698 158.603 14.894H158.449C158.393 14.698 158.337 14.558 158.281 14.404L156.363 9.252H155.229L157.805 16ZM162.814 7.782H163.976V6.62H162.814V7.782ZM162.884 16H163.906V9.252H162.884V16ZM168.589 16.168C170.213 16.168 171.249 15.244 171.599 13.886H170.563C170.283 14.614 169.723 15.188 168.589 15.188C167.329 15.188 166.433 14.432 166.321 12.934H171.697V12.15C171.697 10.386 170.451 9.084 168.575 9.084C166.503 9.084 165.285 10.652 165.285 12.654C165.285 14.67 166.531 16.168 168.589 16.168ZM166.349 12.052C166.503 10.764 167.413 10.05 168.575 10.05C169.989 10.05 170.689 11.002 170.675 12.052H166.349ZM174.128 16H175.514L176.746 11.562L176.83 11.268H176.984L177.068 11.562L178.3 16H179.686L181.604 9.252H180.54L179.21 14.208C179.168 14.404 179.112 14.6 179.056 14.838H178.902C178.86 14.6 178.79 14.404 178.748 14.208L177.404 9.252H176.424L175.066 14.208C175.024 14.404 174.968 14.6 174.912 14.838H174.758C174.716 14.6 174.646 14.404 174.604 14.208L173.274 9.252H172.21L174.128 16ZM184.927 16.168C186.691 16.168 187.629 15.272 187.629 14.012C187.629 12.668 186.817 12.206 185.543 12.122L184.689 12.052C183.835 11.996 183.345 11.73 183.345 11.114C183.345 10.386 184.003 10.05 184.871 10.05C185.739 10.05 186.299 10.428 186.397 11.058H187.433C187.293 9.798 186.369 9.084 184.857 9.084C183.373 9.084 182.323 9.868 182.323 11.142C182.323 12.262 183.037 12.836 184.367 12.948L185.347 13.032C186.033 13.088 186.607 13.256 186.607 14.026C186.607 14.684 186.229 15.202 184.941 15.202C183.849 15.202 183.219 14.67 183.107 13.984H182.057C182.155 15.23 183.163 16.168 184.927 16.168ZM188.634 18.324H189.726C191.112 16.392 191.84 14.502 191.84 12.262C191.84 10.022 191.112 8.132 189.726 6.2H188.634C189.922 7.978 190.804 9.854 190.804 12.262C190.804 14.656 189.922 16.546 188.634 18.324Z"
                fill="#1D1D1B"/>
              <defs>
                <linearGradient id="paint0_linear_0_97" x1="97.5" y1="10" x2="81.6666" y2="10"
                                gradientUnits="userSpaceOnUse">
                  <stop offset="0.458564" stopColor="#1D1D1B" stopOpacity="0.2"/>
                  <stop offset="0.458664" stopColor="#FFEB2D"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="price-block">
          <p className="price-block__cost-original">{'£' + price.toFixed(2)}</p>
          <p className="price-block__cost-sale">{'£' + salePrice.toFixed(2)}</p>
        </div>
        <div className="optimal-block__select" onClick={selectOpen}>
          <p>{option}</p>
          <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="9.05082" height="2.26271"
                  transform="matrix(0.707095 0.707119 -0.707095 0.707119 2.19997 0.799988)" fill="#1D1D1B"/>
            <rect width="9.05082" height="2.26271"
                  transform="matrix(-0.707155 0.707059 -0.707155 -0.707059 13.4 2.39984)" fill="#1D1D1B"/>
          </svg>
          <div className={`optimal-block__option_block ${isSelectOpened && "optimal-block__option_open"}`}>
            <div className="optimal-block__option" id="0" onClick={paramsChange}>{options[0] + ' £' + prices[0]}</div>
            <div className="optimal-block__option" id="1" onClick={paramsChange}>{options[1] + ' £' + prices[1]}</div>
            <div className="optimal-block__option" id="2" onClick={paramsChange}>{options[2] + ' £' + prices[2]}</div>
            <div className="optimal-block__option" id="3" onClick={paramsChange}>{options[3] + ' £' + prices[3]}</div>
            <div className="optimal-block__option" id="4" onClick={paramsChange}>{options[4] + ' £' + prices[4]}</div>
            <div className="optimal-block__option" id="5" onClick={paramsChange}>{options[5] + ' £' + prices[5]}</div>
          </div>
        </div>
        <button className="optimal-block__button">Buy Now</button>
      </div>
    </section>
  )
}

export default OptimalBlock;
