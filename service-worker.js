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

importScripts("workbox-v4.2.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.2.0"});

workbox.core.skipWaiting();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "db.json",
    "revision": "727d7e144a24cd9e929c37eca3171a41"
  },
  {
    "url": "index.html",
    "revision": "ade014f7bfa83699036d997ccd35045f"
  },
  {
    "url": "js/app.js",
    "revision": "7dc73f57dd9f74f0c402ead23f019ae0"
  },
  {
    "url": "js/connection.js",
    "revision": "e849f4287f0d3580078c005b77607cfb"
  },
  {
    "url": "js/core.js",
    "revision": "b698b347d26944ca91fcf37939191883"
  },
  {
    "url": "js/database.js",
    "revision": "c4652cb3ca6e671cea99370954b11a14"
  },
  {
    "url": "js/init.js",
    "revision": "bb6cb7c07b60ec1ffe1e09f3c22305d5"
  },
  {
    "url": "js/local.js",
    "revision": "1ba4ef0934257123fa4f02803d7b2a2c"
  },
  {
    "url": "manifest.json",
    "revision": "fdfb54328933526087b69d5c321b3eb1"
  },
  {
    "url": "styles/main.css",
    "revision": "e36072164eb8298eda47fd3642b6dae2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|gif|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [] }), 'GET');
