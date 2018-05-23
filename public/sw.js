importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

workbox.googleAnalytics.initialize();

  workbox.routing.registerRoute(

    new RegExp('.*\.js'),
    workbox.strategies.cacheFirst(),

    // Cache CSS files
    /.*\.css/,
    // Use cache but update in the background ASAP
    workbox.strategies.cacheFirst({
      // Use a custom cache name
      cacheName: 'css-cache',
    }),

    // Cache image files
    /.*\.(?:png|jpg|jpeg|svg|gif|mp4|ico|woff|ttf)/,
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
      cacheName: 'image-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 200,
          // Cache for a maximum of a week
          maxAgeSeconds: 7 * 24 * 60 * 60,
        })
      ],
    })
  );

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js",
    "revision": "e0e0559014b222245deb26b6ae8bd940"
  },
  {
    "url": "index.html",
    "revision": "a3226b5059cdbd87ae1d753ac7904d84"
  },
  {
    "url": "manifest.json",
    "revision": "b733e6ce2bb248ec4057b37f687a45d7"
  },
  {
    "url": "sites/all/libraries/photoswipe/dist/default-skin/default-skin.png",
    "revision": "e3f799c6dec9af194c86decdf7392405"
  },
  {
    "url": "sites/all/libraries/photoswipe/dist/default-skin/default-skin.svg",
    "revision": "b257fa9c5ac8c515ac4d77a667ce2943"
  },
  {
    "url": "sites/all/libraries/photoswipe/dist/default-skin/preloader.gif",
    "revision": "e34aafbb485a96eaf2a789b2bf3af6fe"
  },
  {
    "url": "sites/all/libraries/slick/slick/ajax-loader.gif",
    "revision": "c5cd7f5300576ab4c88202b42f6ded62"
  },
  {
    "url": "sites/all/libraries/slick/slick/fonts/slick.svg",
    "revision": "f97e3bbf73254b0112091d0192f17aec"
  },
  {
    "url": "sites/all/libraries/slick/slick/fonts/slick.woff",
    "revision": "b7c9e1e479de3b53f1e4e30ebac2403a"
  },
  {
    "url": "sites/all/themes/ucd_one/favicon.ico",
    "revision": "630ff9dd144a43cf82fc678a0acf455d"
  },
  {
    "url": "sites/all/themes/ucd_one/images/bg-hero-banner.jpg",
    "revision": "2b10b70b04234f67e14f8a68ef6e7468"
  },
  {
    "url": "sites/all/themes/ucd_one/images/brand-arrows.svg",
    "revision": "0ee58843ac7bdcd0e05a223a0a6ee38e"
  },
  {
    "url": "sites/all/themes/ucd_one/images/c-horse.svg",
    "revision": "f0c0b123340ad826afbdd52e0c18366c"
  },
  {
    "url": "sites/all/themes/ucd_one/images/checkbox_icon.svg",
    "revision": "320ddab260740ce606f6619696825225"
  },
  {
    "url": "sites/all/themes/ucd_one/images/chevron-invert.png",
    "revision": "f950983f53c9a240b078991fcc4cb185"
  },
  {
    "url": "sites/all/themes/ucd_one/images/chevron-invert.svg",
    "revision": "1aec31143d981ff8c46628d7b2e70680"
  },
  {
    "url": "sites/all/themes/ucd_one/images/chevron-white.png",
    "revision": "d80c8b4b434b03d8fb9de0bf5e269e6b"
  },
  {
    "url": "sites/all/themes/ucd_one/images/chevron-white.svg",
    "revision": "79bc14c2250acf407f05b022504b8294"
  },
  {
    "url": "sites/all/themes/ucd_one/images/chevron.png",
    "revision": "f5a4a47edfb9dd53ca4936baa28e58f5"
  },
  {
    "url": "sites/all/themes/ucd_one/images/chevron.svg",
    "revision": "934d426a652812354ddcc3d225e0b401"
  },
  {
    "url": "sites/all/themes/ucd_one/images/emergency-icon.svg",
    "revision": "d05e99b7f42f449f31ecd05efd60ce2f"
  },
  {
    "url": "sites/all/themes/ucd_one/images/expand.svg",
    "revision": "88beca22bf0854e6472c5b49a1900a1c"
  },
  {
    "url": "sites/all/themes/ucd_one/images/gift_icon.svg",
    "revision": "41eb9ab153800e9dfbffac079e02e833"
  },
  {
    "url": "sites/all/themes/ucd_one/images/global-header-bg.png",
    "revision": "8e9032f8329b877e15eba38f2d37ab81"
  },
  {
    "url": "sites/all/themes/ucd_one/images/global-header-bg.svg",
    "revision": "e16435a334e960d7cd817ab7fce247cc"
  },
  {
    "url": "sites/all/themes/ucd_one/images/gunrock-linework.png",
    "revision": "9d86f1ce2a652e40bc538ee8a307e6c2"
  },
  {
    "url": "sites/all/themes/ucd_one/images/gunrock-linework.svg",
    "revision": "fb2a4bd7783d7fcaa6a7726d84737788"
  },
  {
    "url": "sites/all/themes/ucd_one/images/heart-instagram.svg",
    "revision": "9950753fc9db7538c5f6cc746713207c"
  },
  {
    "url": "sites/all/themes/ucd_one/images/icon-close.png",
    "revision": "9795288689603a19261ac4fb2b42ad00"
  },
  {
    "url": "sites/all/themes/ucd_one/images/icon-save.png",
    "revision": "2dbb0158dc196babfba11aa375df0abb"
  },
  {
    "url": "sites/all/themes/ucd_one/images/icon-search.png",
    "revision": "2febe1e059c88f595413376ebd606271"
  },
  {
    "url": "sites/all/themes/ucd_one/images/icon-search.svg",
    "revision": "581e390fe86b73a0635a72513af05b16"
  },
  {
    "url": "sites/all/themes/ucd_one/images/icons-focal-links.png",
    "revision": "c38d5734073aca31c91f6254cfb5a7e5"
  },
  {
    "url": "sites/all/themes/ucd_one/images/icons-focal-links.svg",
    "revision": "06b2aed80e18a84479a116c4fa8113e5"
  },
  {
    "url": "sites/all/themes/ucd_one/images/icons-priority-links.png",
    "revision": "048c1d589bed5c046beffba4dfba53ec"
  },
  {
    "url": "sites/all/themes/ucd_one/images/icons-priority-links.svg",
    "revision": "20f398a9ec9421c10b4ee9724bb407ba"
  },
  {
    "url": "sites/all/themes/ucd_one/images/icons-social-follow.png",
    "revision": "6b521f4232bdb259c8ef38f7f72347ce"
  },
  {
    "url": "sites/all/themes/ucd_one/images/icons-social-follow.svg",
    "revision": "d988068115e8287c868f8b7cce69ebe6"
  },
  {
    "url": "sites/all/themes/ucd_one/images/icons/check.png",
    "revision": "0e7ba60c4729c5eeb333931f3c469ed1"
  },
  {
    "url": "sites/all/themes/ucd_one/images/icons/check.svg",
    "revision": "7a70be91a45019a12c6560411cbc9d90"
  },
  {
    "url": "sites/all/themes/ucd_one/images/icons/minor.png",
    "revision": "7d27b8276e96fd598b3a443b8bdebf90"
  },
  {
    "url": "sites/all/themes/ucd_one/images/icons/minor.svg",
    "revision": "ca6aa131d4fc4884b9f3d9e7d453408b"
  },
  {
    "url": "sites/all/themes/ucd_one/images/plus.png",
    "revision": "8708e3a4fe325729ed923a4654040376"
  },
  {
    "url": "sites/all/themes/ucd_one/images/plus.svg",
    "revision": "097c4fbc374e205e6ee11f4537e46f11"
  },
  {
    "url": "sites/all/themes/ucd_one/images/read-arrow.svg",
    "revision": "9ae3337d790022bcfd4fb7f7151d629f"
  },
  {
    "url": "sites/all/themes/ucd_one/images/slideshow-buttons-small.svg",
    "revision": "760d58ad5cf6991fa2d3dbaa971e9058"
  },
  {
    "url": "sites/all/themes/ucd_one/images/slideshow-buttons.png",
    "revision": "e3b331cb3404f526ca5ceb17c4f94092"
  },
  {
    "url": "sites/all/themes/ucd_one/images/slideshow-buttons.svg",
    "revision": "c526508e22533ccb81551255185bfa10"
  },
  {
    "url": "sites/all/themes/ucd_one/images/social-follow-small.png",
    "revision": "7d78c4a8588882daa07a2a6e4bda74b5"
  },
  {
    "url": "sites/all/themes/ucd_one/images/social-follow-small.svg",
    "revision": "a19f4a9e948cbc0cfe12274c8514a398"
  },
  {
    "url": "sites/all/themes/ucd_one/images/throbber.gif",
    "revision": "eea3fb7370eab5b19ee338157432d8d3"
  },
  {
    "url": "sites/all/themes/ucd_one/images/title-icons.png",
    "revision": "08de9403ba6e4e34b65b1ac53965560e"
  },
  {
    "url": "sites/all/themes/ucd_one/images/title-icons.svg",
    "revision": "9ee13ee524f5867d06bf7ab032110d53"
  },
  {
    "url": "sites/all/themes/ucd_one/images/uc-logo-gold.svg",
    "revision": "e207d23cae403733bfd3adfc1f46da25"
  },
  {
    "url": "sites/all/themes/ucd_one/images/user_icon.svg",
    "revision": "5ddaf5a6a766c9bf162c70bac13babad"
  },
  {
    "url": "sites/all/themes/ucd_one/images/video-play.svg",
    "revision": "5b277bc7c276d50d86bb708eefc42ea0"
  },
  {
    "url": "sites/all/themes/ucd_one/logo.svg",
    "revision": "5038d46f7c8725020cd06626c459d46d"
  },
  {
    "url": "sites/default/files/css/css_9Oz-w3KnMy8Oxu4PzQtLK3PPI4xrAZ2DSwsWwNJFl5w.css",
    "revision": "7c0f43eb30594d6d9580e4f7eece314f"
  },
  {
    "url": "sites/default/files/css/css_IhoUiTSixGex6d1R9-HP1I8fKOzQQATGkCCVJILOsDU.css",
    "revision": "2778fa6c4e8070f4b48fc1983cb2e6d0"
  },
  {
    "url": "sites/default/files/css/css_PxsPpITToy8ZnO0bJDA1TEC6bbFpGTfSWr2ZP8LuFYo.css",
    "revision": "578f64b61cf47b7083e8d4c95638007c"
  },
  {
    "url": "sites/default/files/css/css_Xq2-pW4hw3lF2pMiRK7V0FA-1P6QAYIjTIERD9uuKTI.css",
    "revision": "321ba308b72aab2f221af9b4b0ce9d42"
  },
  {
    "url": "sites/default/files/images/focal_link/banner-gold.png",
    "revision": "765d8e32f3b4c7423af0a2701e6303ae"
  },
  {
    "url": "sites/default/files/images/focal_link/gift-grass.png",
    "revision": "7058543d1d6095c04c4e7caa35eb3155"
  },
  {
    "url": "sites/default/files/images/focal_link/mail-poppy.png",
    "revision": "b463ff1f2d2a900b35595efccabc0a09"
  },
  {
    "url": "sites/default/files/images/focal_link/vtour-redbud.png",
    "revision": "0dee64d61a90d8e72d2b35822af1b374"
  },
  {
    "url": "sites/default/files/images/focal_link/where-is-uc-davis-icon_0.png",
    "revision": "292b32b480abf181c93d03f27abc57df"
  },
  {
    "url": "sites/default/files/js/js_0adIFQivvBhMIOeto8NpVsWNquecN3Am8auxxfbigHk.js",
    "revision": "0ae6e5199a1af27a86447f00d3dacbe9"
  },
  {
    "url": "sites/default/files/js/js_ALflW1qsV-wPL6o1rSDEQRU4nUcXy95j4wWybir5MUc.js",
    "revision": "1d00343786ec04d82dc6f73e2fe5bde5"
  },
  {
    "url": "sites/default/files/js/js_EVKJFuDIq_mG8TCOk6rL5W8NHj4V5IHzXrPUcc_7JfM.js",
    "revision": "bc9e44a1a1eb9fbf5ed677d7a757925d"
  },
  {
    "url": "sites/default/files/js/js_fa78OyYHRCmIHcmbx7ar1tE_wrFMD7AWaTUweeJKXLo.js",
    "revision": "7e2500ea86b9808cd456c5e93dd44595"
  },
  {
    "url": "sites/default/files/js/js_fkKBAGPp1l2O2xv4WHDe0wg667t70p8Sn5vMoJxWBX0.js",
    "revision": "a4dfeff62d06282416882ccf2d1acf0a"
  },
  {
    "url": "sites/default/files/js/js_gEAI37pYu31lMn5VuD7D-K1d35pFKvXfTbTPULfYJF4.js",
    "revision": "1e0e719097e516784a9b7f9971156666"
  },
  {
    "url": "sites/default/files/js/js_hzkZwubNj59ODRIywCI1LpUBX-kBmsXJmfAytqWntjw.js",
    "revision": "6a256f75fa7d69a2fe14320727d2c02a"
  },
  {
    "url": "sites/default/files/js/js_I8FnZS9Hl2noKqTZhcdV2BE0294H4Uve_lveO7gxsy0.js",
    "revision": "431472686edf614f680ad0ae4a9ce6d3"
  },
  {
    "url": "sites/default/files/js/js_ZAKh7mwVPAiABQlKJQyv6Pm7ZpksUotuqotnDTeOtZ4.js",
    "revision": "6478a779225ce7ad0030d445a40fe480"
  },
  {
    "url": "sites/default/files/js/lazyload.min.js",
    "revision": "640053487dc628e3d8761604b5d5b286"
  },
  {
    "url": "sites/default/files/logo.png",
    "revision": "415742f7deedaee6e7b1e63b1167b94d"
  },
  {
    "url": "sites/default/files/logo512.png",
    "revision": "01033ac6a8f0ef069f8843fca71482c3"
  },
  {
    "url": "sites/default/files/styles/panopoly_image_quarter/public/blog_post_featured_images/as-thumbnail_120.jpg",
    "revision": "e29e0030cedd85f455072b6c160363e5"
  },
  {
    "url": "sites/default/files/styles/panopoly_image_quarter/public/blog_post_featured_images/as-thumbnail.jpg",
    "revision": "f336a69ab2cafc0cef2eb290b94923d2"
  },
  {
    "url": "sites/default/files/styles/panopoly_image_quarter/public/blog_post_featured_images/dwib-thumbnail_120.jpg",
    "revision": "a94596b426ca051123d4a5a690abc0e5"
  },
  {
    "url": "sites/default/files/styles/panopoly_image_quarter/public/blog_post_featured_images/dwib-thumbnail.jpg",
    "revision": "81255628cae1941696a0e48b89069789"
  },
  {
    "url": "sites/default/files/styles/panopoly_image_quarter/public/blog_post_featured_images/thumbnail-ext_120.jpg",
    "revision": "d871750d67db40cef6d12c96ba57191c"
  },
  {
    "url": "sites/default/files/styles/panopoly_image_quarter/public/blog_post_featured_images/thumbnail-ext.jpg",
    "revision": "d871750d67db40cef6d12c96ba57191c"
  },
  {
    "url": "sites/default/files/styles/panopoly_image_square/public/images/article/20180421-ucdavismedal-01crop.jpg",
    "revision": "a79dd849ef98c44c155031f40dda37cf"
  },
  {
    "url": "sites/default/files/styles/panopoly_image_square/public/images/article/acls-combo3.jpg",
    "revision": "d89e1bb06186fa2c230c4bef70bfcb95"
  },
  {
    "url": "sites/default/files/styles/panopoly_image_square/public/images/article/bruce-white-368pc.jpg",
    "revision": "04d62ed0522651ab0059eddba0090c21"
  },
  {
    "url": "sites/default/files/styles/panopoly_image_square/public/images/article/john-d-kemper-environ-925.jpg",
    "revision": "791843a290045e527be69b4bba9cbbc4"
  },
  {
    "url": "sites/default/files/styles/ucdedu_4x3_medium/public/images/article/contests_racecar.jpg",
    "revision": "b88182645c4fc8aabe5321d75f05de94"
  },
  {
    "url": "sites/default/files/styles/ucdedu_hero_banner/public/images/hero_banner/ambient-large.jpg",
    "revision": "01d617d782aa979a13e461de792b5656"
  },
  {
    "url": "sites/default/files/styles/ucdedu_hero_banner/public/images/hero_banner/ambient-med.jpg",
    "revision": "d9bf4cd3d46aa8ccbdf9b906e79b0018"
  },
  {
    "url": "sites/default/files/styles/ucdedu_hero_banner/public/images/hero_banner/ambient-small.jpg",
    "revision": "5bc632a29468ff3b3f7dd19ddb6355e4"
  },
  {
    "url": "sites/default/files/styles/ucdedu_hero_banner/public/images/hero_banner/ambient-xs.jpg",
    "revision": "1114990cbb0f3774e687718301c4d206"
  },
  {
    "url": "sites/default/files/styles/ucdedu_marketing_highlight/public/images/marketing_highlight/brewing-class-uc-davis_0.jpg",
    "revision": "98491a86c7d2458b6a88263c9e9dac3e"
  },
  {
    "url": "sites/default/files/styles/ucdedu_marketing_highlight/public/images/marketing_highlight/craft-center-uc-davis_0.jpg",
    "revision": "33195723bb9a1056f7d2da7cfce20020"
  },
  {
    "url": "sites/default/files/styles/ucdedu_slideshow/public/image_gallery/20101013_coho_138.jpg",
    "revision": "3d56eada8d91706b6f59f5ab88a83b44"
  },
  {
    "url": "sites/default/files/styles/ucdedu_slideshow/public/image_gallery/20111114_arboretum_034.jpg",
    "revision": "16f669da19254487c81b67917dadabb7"
  },
  {
    "url": "sites/default/files/styles/ucdedu_slideshow/public/image_gallery/20120106_students_center_8459.jpg",
    "revision": "7ef5a141d5c1c3bf8c3ccf9e3a68250e"
  },
  {
    "url": "sites/default/files/styles/ucdedu_slideshow/public/image_gallery/20121005_pajamarino_288.jpg",
    "revision": "fa9fbcdafe525fae1dd47db9ea3bb75f"
  },
  {
    "url": "sites/default/files/styles/ucdedu_slideshow/public/image_gallery/20130612_segundodc_017.jpg",
    "revision": "458c13309c974f1aefbaaa6ea3a4b448"
  },
  {
    "url": "sites/default/files/styles/ucdedu_slideshow/public/image_gallery/20130927_buzz_154.jpg",
    "revision": "17236969aa3aef5bf04190fa63233995"
  },
  {
    "url": "sites/default/files/styles/ucdedu_slideshow/public/image_gallery/cal-aggie-band-uh-2.jpg",
    "revision": "bf7788192523f292c99dabb7cb98690e"
  },
  {
    "url": "sites/default/files/styles/ucdedu_slideshow/public/image_gallery/davis_west_village-46.jpg",
    "revision": "2ec37c4f63fc4e4551a15e2c0e0f3a57"
  },
  {
    "url": "sites/default/files/styles/ucdedu_slideshow/public/image_gallery/espn_basketball_crowdshot.jpg",
    "revision": "d5f471ac6292b2c0e5f9651e7cd45b38"
  },
  {
    "url": "sites/default/files/styles/ucdedu_slideshow/public/image_gallery/farmar.jpg",
    "revision": "54a900f45cf30c3d07281d28b31f50f1"
  },
  {
    "url": "sites/default/files/styles/ucdedu_slideshow/public/image_gallery/stadium.jpg",
    "revision": "fba90f71f894e3fc75ea9597aed66b27"
  },
  {
    "url": "sites/default/files/upload/users/user1296/welcome-uc-davis-transfer-class-2020.jpg",
    "revision": "16a7c47380be80fe42e7bad0a2eba2ff"
  },
  {
    "url": "sites/default/files/vertical-links/ag-ranking-badge91916_0.png",
    "revision": "5535c92b1daed65b7c5e7404c53a00cb"
  },
  {
    "url": "sites/default/files/vertical-links/badge-veterinary_0.png",
    "revision": "1c31be0ec982ac55db8e582ccd80a2aa"
  },
  {
    "url": "sites/default/files/vertical-links/uc-davis-ranked-six-public-university.png",
    "revision": "ed0fd8c4b14608b468fe26a90ec1fd93"
  },
  {
    "url": "www.trumba.com/images/spinner_trumba.gif",
    "revision": "15e06a604180b0773c29e791932ca586"
  },
  {
    "url": "www.trumba.com/scripts/spuds.js",
    "revision": "3e15822705baed4ab5befdeb9d0a18ed"
  },
  {
    "url": "sites/default/files/onthemap.mp4",
    "revision": "jasfdp483290wahsdf9da"
  },
  {
    "url": "sites/default/files/who.mp4",
    "revision": "aaps38r9s0fdsha9ewrfsdaaap"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

