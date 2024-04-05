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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "dcb51a8f78f730a628ff954a5a5923f6"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.6ab7ad8f.css",
    "revision": "2c392d92aedc7b8e974c600f1aad97fc"
  },
  {
    "url": "assets/img/aspnetcore_model.72fcd715.svg",
    "revision": "72fcd715568996257c2c2a54dc425847"
  },
  {
    "url": "assets/img/big-picture.a6da4164.svg",
    "revision": "a6da4164ca083939ed337ded54810ee9"
  },
  {
    "url": "assets/img/components.ddd9116b.svg",
    "revision": "ddd9116b3d338dca2923f66e754f646f"
  },
  {
    "url": "assets/img/deployment.df116922.svg",
    "revision": "df116922e088996a74c0ee8c3533e55b"
  },
  {
    "url": "assets/img/network.7d8604b9.svg",
    "revision": "7d8604b985d5fff8f7ea11bc33f13f54"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.e6a38f0c.js",
    "revision": "35b500f672601915d1c6ea54a63354a5"
  },
  {
    "url": "assets/js/10.32726cd2.js",
    "revision": "434dfbd2b81a1cd994c6e3ba4bcbdeaa"
  },
  {
    "url": "assets/js/13.f1bb7abf.js",
    "revision": "587a2c05dac4f80aca8285fc00cb2533"
  },
  {
    "url": "assets/js/14.14f58f6c.js",
    "revision": "f9d56c86561d2e8fdf88352d2a7f3820"
  },
  {
    "url": "assets/js/15.5f166f2e.js",
    "revision": "7e2cc312c499a1ed3b307bd693943c0b"
  },
  {
    "url": "assets/js/16.9e72da98.js",
    "revision": "0744dde7562a025ae830f87fa692e2eb"
  },
  {
    "url": "assets/js/17.6604a3f4.js",
    "revision": "76aa97537cc23020296e6f31a7af9fa9"
  },
  {
    "url": "assets/js/18.1a626362.js",
    "revision": "85b0a3f5fb556bd48a61716f70e8d7f8"
  },
  {
    "url": "assets/js/19.cc779f75.js",
    "revision": "73a36aab34a0f84040fd2b4854b09c0a"
  },
  {
    "url": "assets/js/2.23218863.js",
    "revision": "27c97d73d8db5d8c319cbb220594320c"
  },
  {
    "url": "assets/js/20.98e0edbb.js",
    "revision": "5bc3385324c92cc70d572850e3c6cbc1"
  },
  {
    "url": "assets/js/21.06834236.js",
    "revision": "f300679cc31158b5c477fde857de625e"
  },
  {
    "url": "assets/js/22.283adc12.js",
    "revision": "a203a4ff766397f68cc24a2f558380a1"
  },
  {
    "url": "assets/js/23.3ec6ef11.js",
    "revision": "d0e91598f11e346698d9855ebb1cde0b"
  },
  {
    "url": "assets/js/24.f179cbdf.js",
    "revision": "7efc8f11669efb07a863d3c9cc9813cb"
  },
  {
    "url": "assets/js/25.09b15147.js",
    "revision": "2e9bc8583fc2d0dfe0e546a919f8359a"
  },
  {
    "url": "assets/js/26.140674e5.js",
    "revision": "263fdeb3a6421d841b88e0d0908be681"
  },
  {
    "url": "assets/js/27.20687814.js",
    "revision": "04419f7116947c8626d2cd281d980681"
  },
  {
    "url": "assets/js/28.61f2a3dd.js",
    "revision": "4dbea7ccdf58fc197af1c6ae4ce72823"
  },
  {
    "url": "assets/js/29.cd473d78.js",
    "revision": "24591ff2410c79551419409f8f0edf9b"
  },
  {
    "url": "assets/js/3.657fbc73.js",
    "revision": "54c2d66a75926ab0b7e2caed46600a3e"
  },
  {
    "url": "assets/js/30.90b33de4.js",
    "revision": "11d6b38d356f2864bb2c354a6874fa0b"
  },
  {
    "url": "assets/js/31.c7b74c15.js",
    "revision": "6402c6129d697f3319cb0544c46f4627"
  },
  {
    "url": "assets/js/32.8c77bcf8.js",
    "revision": "2c57f70a9cda25db118ad2effc4c93d5"
  },
  {
    "url": "assets/js/33.4f45e4e7.js",
    "revision": "53a927919150c2194dc08525ef2e2dd1"
  },
  {
    "url": "assets/js/34.7d30e6fe.js",
    "revision": "d75d8743aa5c01df3f7fd01c45754dac"
  },
  {
    "url": "assets/js/35.38a8a894.js",
    "revision": "6b6ede4781158da4f332eb2e88553e50"
  },
  {
    "url": "assets/js/36.1d9509ac.js",
    "revision": "9c156e611bcc47199753f5f3ee9eedf0"
  },
  {
    "url": "assets/js/37.9d082d5c.js",
    "revision": "26e1ed12cb7c3d585c74f8e6a004a50a"
  },
  {
    "url": "assets/js/38.d60583d7.js",
    "revision": "9d03bb01ca4bae73779a2f08d6db1a73"
  },
  {
    "url": "assets/js/39.cdaa0d91.js",
    "revision": "7b1723f3cb3d3b15088ee830cce47cc3"
  },
  {
    "url": "assets/js/4.ce6e1ccf.js",
    "revision": "7b1a152338a64eeba7af9375aff8a84f"
  },
  {
    "url": "assets/js/41.8467d1f8.js",
    "revision": "1d9ab7b4fab02a0cb16175f203653fb4"
  },
  {
    "url": "assets/js/5.46586858.js",
    "revision": "f7a953cfdf4e7baa543f0242d55cebac"
  },
  {
    "url": "assets/js/6.a9605919.js",
    "revision": "9ef4fb87bdaa3b5164573788820d8bc3"
  },
  {
    "url": "assets/js/7.fe4b8d94.js",
    "revision": "6c5fbba40d056aa194d40baca2fa7643"
  },
  {
    "url": "assets/js/8.78da5915.js",
    "revision": "7c83760d751e113a41829184490f7aa4"
  },
  {
    "url": "assets/js/9.18447a66.js",
    "revision": "bdd4231a7ce58219fb7449519a874840"
  },
  {
    "url": "assets/js/app.d04f10c5.js",
    "revision": "4437fcc9b2b669aac1f62a0c3186ebd7"
  },
  {
    "url": "assets/js/vendors~docsearch.8bdb2884.js",
    "revision": "1dc7282dc3e2408f5e5762c4ebaefb05"
  },
  {
    "url": "design/index.html",
    "revision": "ef7e37b706d50223e5642c8560dd6044"
  },
  {
    "url": "index.html",
    "revision": "fb87ace6ed4ff043c2f22a92cb5601f6"
  },
  {
    "url": "intro/index.html",
    "revision": "2fd00ea5a5a2bd811714d73fee012019"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "db07f4888662518e3bd47a0bb9ea44e9"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "348a25f0eb4cfaf6d6ec0aa97e402517"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "cf442ff579e9a31a2526a066a4534d54"
  },
  {
    "url": "team/index.html",
    "revision": "7cf6f8eacb4766779aa69f32b97dce64"
  },
  {
    "url": "tech-stack/index.html",
    "revision": "03cd8aa1b6fa273a1b80493bf441c8a9"
  },
  {
    "url": "testing-and-risks/index.html",
    "revision": "091e5615445cd6508d7bfc1338ec177d"
  },
  {
    "url": "use-cases/index.html",
    "revision": "59a43da16c4ccd45af9fdb68ce50720a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
