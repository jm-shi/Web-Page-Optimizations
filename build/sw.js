/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

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
    "revision": "23336c6d1aa61fe8ed3dd215a8f7a8f1"
  },
  {
    "url": "manifest.json",
    "revision": "b733e6ce2bb248ec4057b37f687a45d7"
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
    "url": "www.trumba.com/scripts/spuds.js",
    "revision": "3e15822705baed4ab5befdeb9d0a18ed"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
