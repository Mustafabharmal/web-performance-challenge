const CONTENT_BREAKING_NEWS = "BREAKING NEWS: 5 people arrested for non designing responsively ***** Sprite popularity drops even further after new, less sugary, drink introduction.*****"
const CONTENT_ARTICLE_TEASERS = [
  "This is an article about first party that happened this weekend",
  "This is an article about second party that happened this weekend",
  "This is an article about third party that happened this weekend" ];

const closeBox = () => {
  // Load Swiper stylesheet
  document.head.insertAdjacentHTML('beforeend', `
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" media="print"
    onload="this.media='all'">
  <noscript>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css">
  </noscript>
  `);

  // Load Swiper script and initialize when ready
  const swiperScript = document.createElement('script');
  swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
  swiperScript.async = true;
  swiperScript.onload = () => {
    initSwiper();
  };
  document.head.appendChild(swiperScript);

  initAd();
  dynamicContent();
  document.body.classList.remove('no-scroll');
  document.querySelector('.cookieLayer__base').classList.add('cookieLayer__base--hidden');
};

const acceptCookies = () => {
  closeBox();
};

const dynamicContent = () => {
  const teasers = document.querySelectorAll('.teaser__text');
  const marqueeBar = document.querySelector('#breaking-news');

  // mock content delay
  setTimeout(() => marqueeBar.innerHTML = CONTENT_BREAKING_NEWS, 3);

  // create dynamic content
  teasers.forEach((teaser, index) => {
    teaser.innerHTML = CONTENT_ARTICLE_TEASERS[index];
  });
};
