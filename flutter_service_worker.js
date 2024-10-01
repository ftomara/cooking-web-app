'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "01cb2f99fc8482e9ff5bb3e542bcf8f6",
"version.json": "642f95f622dc1681ac61efa06c637620",
"index.html": "6a5027944c2356110adba6046e71dba4",
"/": "6a5027944c2356110adba6046e71dba4",
"main.dart.js": "4662468183e4e47a988904b7b680a53e",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "39b52ad9d106f608763109a10835c03d",
"assets/AssetManifest.json": "a84126c7ce8329f7e6483e97b3e0667e",
"assets/NOTICES": "fc668c2b84c58fdedce4a8bc37231a53",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e34b73f7bfcb89f7fefc19f96e987f55",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "158b9e3466ff13e2cf239ad539f5ac26",
"assets/fonts/MaterialIcons-Regular.otf": "924bf13e39f78095e8b88a4b32f9c0a3",
"assets/assets/images/filled_heart.svg": "2ec990fd6a667f8fd4c401a1e154bde1",
"assets/assets/images/ramen_dummy.png": "773717035c5f4c3639c9fc2c9cef2584",
"assets/assets/images/pancakes_dummy.png": "3f5e18c1250687ae1c94f3d09c3aca16",
"assets/assets/images/dummy_recipe.png": "56c9808f9d9de2b6e51e1e3c875ccae9",
"assets/assets/images/home.svg": "72a7895aa520dbeb4ac6f375e4bd2b23",
"assets/assets/images/chef.svg": "94805ada0261e00e2ae6dfce82871cf2",
"assets/assets/images/chocolate_cake_dummy.png": "5100766b7f674a1a2851dd009e782b3d",
"assets/assets/images/icon_profile-fill.svg": "66bd0711ce88001d5f510363f078dacd",
"assets/assets/images/uplaod_arrow.svg": "03da5be481d55028a988967fe34cd0da",
"assets/assets/images/searchicon.svg": "21cdb61282b5792698547c19f07a9b1e",
"assets/assets/images/caesar_salad_dummy.png": "7edaaf95ebff8a9d52487a148fa72082",
"assets/assets/images/servings.svg": "061bbb1e5a1f778450a1ea2ce31aa6ff",
"assets/assets/images/filled_star.svg": "a3eb260c9d4350ce852acdcb5c9cf44b",
"assets/assets/images/followicon.svg": "54cbc8c1841c5ec7c77ee011c3f86b45",
"assets/assets/images/plus.svg": "7dc767d92f4c8137012d8e2ff217cade",
"assets/assets/images/play_button.svg": "bbf14c49c365bbd7d35f6ee51b8fbceb",
"assets/assets/images/star.svg": "bfdb6a0ba7d31f2670bb2404fc104ac3",
"assets/assets/images/grilled_salmon_dummy.png": "c622e449879af0eb8ab192649b675451",
"assets/assets/images/spaghetti_dummy.png": "97502abe75064d8ea8dc638f6c9207d3",
"assets/assets/images/upload_image.svg": "16ca4c22e3b01d88e74edd2be72e436a",
"assets/assets/images/calories.svg": "32fc0791e56b8a2866310dffc02fd0a2",
"assets/assets/images/appIcon2.png": "971011b42e2def4b3e2624438be56297",
"assets/assets/images/timer.svg": "6c70332f196c13210e8ee632b4b9f381",
"assets/assets/images/minus.svg": "f92916f6995e863c4d622ced1a87a6ec",
"assets/assets/images/heart.svg": "345e6d8ff16b4179e47ae5afb453627a",
"assets/assets/colors/mycolors.xml": "5216acb7f22b652a37e11fe39f679a4f",
"assets/assets/animations/rate_meal_animation.json": "fc90726fcda2bdf29cdf141da0c12372",
"assets/assets/animations/5qdZDIR369.json": "c6a9379dc411e727d44833dafd230883",
"assets/assets/animations/DsaIGmBy0d.json": "7ae9f111b6a20fb658e5f887cb5f4c16",
"assets/assets/animations/lets_cook_animation.json": "20297640248c41e9a5f71e9d82a093de",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
