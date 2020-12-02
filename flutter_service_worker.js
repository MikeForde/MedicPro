'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8590d50e270396351f9a72aa79ac66ad",
"assets/assets/images/Anaphylaxis.png": "f250192c2d788b55ca6c1ba2be096f9b",
"assets/assets/images/Bristol_Stool_Chart.png": "e0713f7b8ac872715e0af440c3ed222e",
"assets/assets/images/Dental_Pain.png": "ab5d087e78c9541122feb38487a1f9be",
"assets/assets/images/Diagnose_A_Headache.png": "32e5a11f6e41669f6c76ae84c6fa5577",
"assets/assets/images/DigitSample.png": "0f494d395685878e08fe88e9df9d8b8e",
"assets/assets/images/Immediate_Medical_Management.png": "4450b49322bd4b4c40f1dfd9449f31a7",
"assets/assets/images/Initial_Assessment.png": "27cf54b7c1aa9fa858355da188396864",
"assets/assets/images/PEFR.png": "1903622efb5a6b75b15c2d71fe9a3acd",
"assets/assets/images/Scaly_Skin_Rash.png": "4bdbda9316d49ef0720041df35beff14",
"assets/assets/images/Skin_Rash_-_Distribution.png": "e58633c4aed095defd8b9be8717c44d9",
"assets/assets/mmp_large2.png": "d867131144c2a48e2d9e4fda39889fb4",
"assets/assets/tblAlgorithmInput.json": "ba55479c80cf4784e60405be967cc61b",
"assets/assets/tblAlgorithmOutput.json": "2f476d1c2749599337d9cc7ff02a26b9",
"assets/assets/tblCalculator.json": "b669a3ca2a8b904e830e9a52030b014a",
"assets/assets/tblCondition.json": "d3653cf6a0c65c976483b0a44d2868ed",
"assets/assets/tblDiagnosticFeatures1.json": "32a0f216f0cba230e2c94a8acb28adff",
"assets/assets/tblDiagnosticFeatures2.json": "261f1607720ea9ca2d2fb99d41bc7650",
"assets/assets/tblDiagnosticFeatures6.json": "9e831e5bc2bece6c971bb7ef3afc1b39",
"assets/assets/tblScore.json": "39d07f471e7fdb91e74f9074a3f56e56",
"assets/assets/tblValueRange.json": "1171b69a8bc678223a7e25074e4beff2",
"assets/FontManifest.json": "7e44e8b4b89f486d63702f17e20f069d",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/NOTICES": "0481c27993ce669ca0c587979ee55162",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"index.html": "2f3da964a200dcfb387a7746e44dffbf",
"/": "2f3da964a200dcfb387a7746e44dffbf",
"main.dart.js": "e2745ed60c38ffebdfdba593f1f58450"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
