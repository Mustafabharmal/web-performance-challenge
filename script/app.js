const CONTENT_BREAKING_NEWS =
    "BREAKING NEWS: 5 people arrested for non designing responsively ***** Sprite popularity drops even further after new, less sugary, drink introduction.*****";

const CONTENT_ARTICLE_TEASERS = [
    "This is an article about first party that happened this weekend",
    "This is an article about second party that happened this weekend",
    "This is an article about third party that happened this weekend",
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("video-container");
    const placeholder = document.getElementById("video-placeholder");
    const video = document.getElementById("video");

    if (!placeholder || !video) return;

    // Initially hide the video
    video.style.display = "none";

    // Lazy load the video only when in view
    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Reveal placeholder (clickable)
                    placeholder?.classList.add("visible");

                    // On click, load and play video
                    placeholder?.addEventListener("click", () => {
                        placeholder.style.display = "none";
                        video.style.display = "block";
                        video.load();
                        video.play().catch(() => { });
                    });

                    // Stop observing after first intersection
                    obs.unobserve(container);
                }
            });
        },
        { threshold: 0.25 }
    );
    observer.observe(container);
});

function initSwiper() {
    if (typeof Swiper === "undefined") {
        console.warn("Swiper library not yet loaded, retrying...");
        setTimeout(initSwiper, 100);
        return;
    }
    new Swiper(".swiper", {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
}

// Advertisement mock
const initAd = () => {
    const adSpace = document.querySelector(".main__advertising");
    const gif =
        '<div style="width:400px;max-width:100%;"><div style="height:0;padding-bottom:52.4%;position:relative;"><iframe width="500" height="262" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameBorder="0" src="https://imgflip.com/embed/6wy03z" title="Advertisement meme" loading="lazy" fetchpriority="low"></iframe></div></div>';
    if ("requestIdleCallback" in window) {
        requestIdleCallback(() => {
            adSpace.innerHTML = gif;
        });
    } else {
        setTimeout(() => (adSpace.innerHTML = gif), 1000);
    }
};

const closeBox = () => {
    // Don't prevent scrolling anymore - allow immediate access
    // Add scroll permission to body if needed
    document.body.style.overflow = 'auto';
    
    // Load Swiper stylesheet
    document.head.insertAdjacentHTML(
        "beforeend",
        `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" media="print"
            onload="this.media='all'">
        <noscript>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css">
        </noscript>
        <script async src="https://app3.weatherwidget.org/js/?id=ww_f875a7a760709"></script>
        `
    );

    // Load Swiper script and initialize when ready
    const swiperScript = document.createElement("script");
    swiperScript.src = "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js";
    swiperScript.async = true;
    swiperScript.onload = () => {
        initSwiper();
    };
    document.head.appendChild(swiperScript);

    const weatherScript = document.createElement("script");
    weatherScript.src = "https://app3.weatherwidget.org/js/?id=ww_f875a7a760709";
    weatherScript.async = true;
    document.head.appendChild(weatherScript);

    initAd();
    dynamicContent();
    // Don't prevent scroll - users can now scroll immediately
    document
        .querySelector(".cookieLayer__base")
        .classList.add("cookieLayer__base--hidden");
};

const acceptCookies = () => {
    closeBox();
};

const dynamicContent = () => {
    const teasers = document.querySelectorAll(".teaser__text");
    const marqueeBar = document.getElementById("breaking-news");

    // mock content delay
    setTimeout(() => (marqueeBar.innerHTML = CONTENT_BREAKING_NEWS), 100);

    // create dynamic content
    teasers.forEach((teaser, index) => {
        teaser.innerHTML = CONTENT_ARTICLE_TEASERS[index];
    });
};
