'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2ac8c4aca8382caab411b2306f95e8aa",
"assets/assets/images/ABCDE_Approach.png": "936f29791ba486d6516c3cbd2bff50ae",
"assets/assets/images/Acne.png": "587a531fd62041589b9b2aaff5675422",
"assets/assets/images/Anaphylaxis.png": "f250192c2d788b55ca6c1ba2be096f9b",
"assets/assets/images/Atopic_Dermatitis.png": "dcd461befbb49db2425f8f2723ce9696",
"assets/assets/images/Bristol_Stool_Chart.png": "e0713f7b8ac872715e0af440c3ed222e",
"assets/assets/images/Cellulitis.png": "90f799d6d0b2e70711f732b43d721786",
"assets/assets/images/Cutaneous_Larva_Migrans.png": "5619501eff81ea8091e7c90746190627",
"assets/assets/images/Dental_Pain.png": "ab5d087e78c9541122feb38487a1f9be",
"assets/assets/images/Diagnose_A_Headache.png": "ee98ee331d475db5f01b886cd51847cc",
"assets/assets/images/DigitSample.png": "0f494d395685878e08fe88e9df9d8b8e",
"assets/assets/images/Emergency_Asthma.png": "4c8f0d50c9107f73d1bc18b554fc0d82",
"assets/assets/images/Friction_Blister.png": "8b6d14fb6fec29724a13502f2817a867",
"assets/assets/images/Herpes_Simplex.png": "c54444c057e8426afa25def83de89a0f",
"assets/assets/images/Herpes_Zoster.png": "df091b46c17da3a2910fd9de6f6214e5",
"assets/assets/images/Immediate_Medical_Management.png": "ebac7fd694853b4a3557de2cd375bdea",
"assets/assets/images/Impetigo.png": "d08ef1d800526e16ac4962526d832ab8",
"assets/assets/images/Ingrowing_Toenail.png": "9b8d9435936233bb8a68a19cbda29b2d",
"assets/assets/images/Initial_Assessment.png": "cabf1e2ba1edb779f5b9257fea86d3c5",
"assets/assets/images/Irritant_Contact_Dermatitis.png": "8601eba2c340d563f3c46c811129d341",
"assets/assets/images/Leishmaniasis.png": "de55d1a978a3c97c9736b1c1f97460b7",
"assets/assets/images/Lice.png": "174c08fd13754d7ad0ed429f01b5747b",
"assets/assets/images/Moles.png": "38dab8a1510434a1145f10abfe747628",
"assets/assets/images/Nose_Bleeds.png": "f739b101f8b57e545335aa8b87cb0f1e",
"assets/assets/images/PEFR.png": "1903622efb5a6b75b15c2d71fe9a3acd",
"assets/assets/images/Pitted_Keratolysis.png": "b908fc0246f8dc345b23c01f8121caea",
"assets/assets/images/Scabies.png": "604c3ee152280babc2b7add0789fc2c8",
"assets/assets/images/Scaly_Skin_Rash.png": "eb195d2e71356e30959cb8e215053009",
"assets/assets/images/Skin_Rash_-_Distribution.png": "4ea00a9b4501f9eabe5f56a3992ade32",
"assets/assets/images/Target_Lesion.png": "38a25077cc2003825c3be012f934d9ac",
"assets/assets/images/Tick.png": "e32768e61dab0d614678d615fbe675e0",
"assets/assets/images/Tinea_Corporis.png": "97c1a4792430e660bf1ffaf24f2ec02b",
"assets/assets/images/Tinea_Cruris.png": "3b0c00ec01c51ed569b62753d290be23",
"assets/assets/images/Tinea_Pedis.png": "9b5aafc5031a0ebed274e8159ca55abe",
"assets/assets/images/Viral_Warts.png": "a76a712b0402c534954e6eb5db31761c",
"assets/assets/images/Wound_Infection.png": "4e4581307eb47c62a2f03ea3c942d988",
"assets/assets/mmp_large2.png": "d867131144c2a48e2d9e4fda39889fb4",
"assets/assets/tblAlgorithmInput.json": "ba55479c80cf4784e60405be967cc61b",
"assets/assets/tblAlgorithmOutput.json": "2f476d1c2749599337d9cc7ff02a26b9",
"assets/assets/tblCalculator.json": "b669a3ca2a8b904e830e9a52030b014a",
"assets/assets/tblCondition.json": "e19b6cf2397556a918d037d9c952d357",
"assets/assets/tblDiagnosticFeatures1.json": "32a0f216f0cba230e2c94a8acb28adff",
"assets/assets/tblDiagnosticFeatures2.json": "261f1607720ea9ca2d2fb99d41bc7650",
"assets/assets/tblDiagnosticFeatures6.json": "9e831e5bc2bece6c971bb7ef3afc1b39",
"assets/assets/tblScore.json": "39d07f471e7fdb91e74f9074a3f56e56",
"assets/assets/tblValueRange.json": "1171b69a8bc678223a7e25074e4beff2",
"assets/FontManifest.json": "df7941d7f1471ba664695d864ca1b139",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/NOTICES": "854671d86930fe68a33cbab131c735e2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"index.html": "2f3da964a200dcfb387a7746e44dffbf",
"/": "2f3da964a200dcfb387a7746e44dffbf",
"main.dart.js": "fc8ea34b8116f12a13e1132c50948f53",
"version.json": "16d9358155f5e54bf25432f02e62350b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
