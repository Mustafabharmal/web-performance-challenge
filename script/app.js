const CONTENT_BREAKING_NEWS = "BREAKING NEWS: 5 people arrested for non designing responsively ***** Sprite popularity drops even further after new, less sugary, drink introduction.*****"
const CONTENT_ARTICLE_TEASERS = [
  "This is an article about first party that happened this weekend",
  "This is an article about second party that happened this weekend",
  "This is an article about third party that happened this weekend" ];

const closeBox = () => {
  initAd();
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

// Advertisement mock
  const initAd = () => {
    const adSpace = document.querySelector('.main__advertising');
    const gif = '<div style="width:400px;max-width:100%;"><div style="height:0;padding-bottom:52.4%;position:relative;"><iframe width="500" height="262" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameBorder="0" src="https://imgflip.com/embed/6wy03z" title="Advertisement meme" loading="lazy" fetchpriority="low"></iframe></div></div>';
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        adSpace.innerHTML = gif;
      });
    } else {
      setTimeout(() => adSpace.innerHTML = gif, 1000);
    }
  };


const initApp = () => {
  dynamicContent();
};

initApp();