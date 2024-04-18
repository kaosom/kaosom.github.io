'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0af9b41dfe2cd178842bdf1d380b7428",
".git/config": "9c414be52823edd8b5b8049c1b1975ae",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2586c633bee679b010c24dc36be354de",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "92c59213e66c923750f205c35373e06c",
".git/logs/refs/heads/master": "92c59213e66c923750f205c35373e06c",
".git/logs/refs/remotes/origin/master": "88f343d9e2c5f3689c6e1afea4192e1d",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0a/e1abafe2c4cc68cf137b8d476a636719375efa": "1c2bbb2ec0084e059109224cde69899d",
".git/objects/0b/5a53e4bf22e874a6acdca5d87d650bf11e8a51": "357429a32a56da0fc124f0d43b033508",
".git/objects/0b/5ed6cd7b2249aadbe51e212fd14219e2756df8": "b3b72fe031a7e2e17c05000dc9eaf570",
".git/objects/10/a4b31beecb871f12667c8862bb942bedada3ad": "4be3e2ea1a7d7a7c73e1613f6520d424",
".git/objects/14/1f2ba321ddcaa6c7aaddb9e3d72983fe0e0ea7": "fdea5ed5f1b4fd043318de06cad7f8a4",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1c/1b8f11303f1e50538d2be218258b80fe33e701": "63d83c56b62b2670c720e81e4b294ba6",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/60349c8f58bc845b2d93a115b3744abf280070": "9a1f12fd89b6f25fc6e62067750b6338",
".git/objects/27/4328d8cafb67f01f47e01369b2df86980f1fe6": "1c878a85e2a3742d6f72f8d5357218d0",
".git/objects/29/cd046643aee0f430d3b80497d4b7a6caac1e06": "dd90d7cf66b6ed980b9ecf8add1d28a8",
".git/objects/2b/7a092a80db851e791d018c3ecc1c946b4e047d": "8a08429add0aeae54cf61dfbe3ca90c7",
".git/objects/30/f16417d029f5ff4db2a56b0c3329d4c8325673": "ff3470449fd305fa2649ae3375e079cd",
".git/objects/34/d25adc13b1027c3148378c8db683b6476da762": "6ad94f3928cfcfa33803639aa2481396",
".git/objects/39/e76657ced89b3b80a4e794c9fac523ac331580": "b71d89f7b9317004296bc3e57608b3a3",
".git/objects/44/94e3c479223d66ec490b0156ae0af4dace17eb": "48743d0c25ed1efab50a08fb5e8c468a",
".git/objects/45/1fa6955fb48209fb41c7f3a0611bb1adc57ae5": "f6b9a114f4a0c407cddd13ab667b8991",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/48f3a8cc52d82a5c9a59b64da2ac538f59fc0e": "962c1f47b405ff97e075c73cdb8754d9",
".git/objects/4c/4c13dff21453ee4eda0f4b48cabe79cfac2b3d": "edbcc4e1fe2ef058fbec363bf6de87b1",
".git/objects/4e/2f4c8bfb1eebaf939a1bfea9a669a5125ba795": "ac4f24cfb1af72ee19857c4a8071b447",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/f3e6b1259a4860cf1b05ed0e78522f01c917cf": "834265a8458641c8d9f3bec1731c8587",
".git/objects/55/546535aa4e6523a984623af75836efd471c91e": "26b3be5f8a27215644561651cc8caeea",
".git/objects/59/13d393f3e80d3722156aecf5234678e8484e45": "b0ffb2ced0f42dc759673d6236d40026",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/60/f13cfb08307041d4bfcc9e11a384d445b5d344": "e257ee2b22059e36910c5f37907aaec9",
".git/objects/67/175a78d441b153840010ece8f135afcca7701b": "f1cb593fd88a6dba6d2e562b89cf8337",
".git/objects/68/c3e80735030d978a62bf31c5a05df72a28dabf": "f6f523d82ea691b4d76470df49e47e0b",
".git/objects/69/8c430f6539a48c64be2d71264e7f23b98f3dda": "3d8193a4e00ee35a69a0b3b2f637a418",
".git/objects/6c/17df6cee5df1b9eee3101d464f54cd1ba51e3f": "65775c62feaef5fe299804d8d8a8ee1a",
".git/objects/6c/4c39cad11c20bbb6f1cd5393ccf238127270ef": "935a37ec9f3373ce686862eef0c17d52",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/78/df43e58124862ab856106a70dfad8dfc1dfdee": "ccb0265bce68522f37481d05e354acdf",
".git/objects/79/e2667c989e92dc4ddbaca6eab231d41cf0aa5f": "eb1ec01a6082d178e0143a7e8175d7ae",
".git/objects/7b/4f28bafe401f046003195de2422bd5c18955fd": "2afc7bf4780a3d5253a824bce50b1bf0",
".git/objects/82/dc98316c02b9375176db1adfc73db295b5e88b": "f60b60c5e9890113f497816ad24f57fb",
".git/objects/86/9703c8007fb1d5489daa5725f7f9b0bf61d6f8": "6d124170806a87e5cc43db78811ad15a",
".git/objects/88/83336887925dcc184f56b831c8a4cc5e9b1cb7": "c49ffdd5cf55dc62c94baa6d084b5fd1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/c84b70dc2d5b5febc19b7866dbd99605b0c1d0": "c3bfa2f5bec7c8d0d71b00c738404769",
".git/objects/92/c3a16fed2bf030ef6c521a22917d34748967f8": "6fd01b5bab771a7789289ab883ba246f",
".git/objects/93/229270d98c33464a5a10311a1c6de24fb4203f": "68e6cae739cf36fb5bef3e42e6516734",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/bf6a0bff217be4e67026f8c3dacfdbddc086ed": "11dca4a34946cf9fecd1056432b38ecc",
".git/objects/ab/ed57381b6025e374acde7ff8a1433a194004c8": "2220a436c70cf56cce2f834d62ab491a",
".git/objects/ae/ea8cf3ac01d3988b38a3cc298f27da9600c066": "9d267b868e853309d1f49f31e6a0ee5c",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b2/b8bd54e1c5d69bf31f62530c7eebba04f97522": "1b418c50f73c9f2ccbf330ba1a9e5a85",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/3b32ecfa693cb5297b125378098e117f513b05": "29624ce4030350ee923102f487d35a64",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/1e139053c5b9cdf9c1a8dd9555afc551538035": "2486a98277bb68e50b3e238426729cdf",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/31801ec940484b6594d8b44ad5282bc47db231": "9c8a9c14fdda888c5da734120f9ed9bb",
".git/objects/be/581056b06da633c6589d40b35e96abd73cce47": "19036a8bc216e600808d443a67ba56d1",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/cc/00f71fab52d0aced33443c3e15ddd8290081fb": "ff60d0b2a3f7240c9ba85c26c63a5f29",
".git/objects/cc/3046fc0185920525f622b92df82521c0f1a5b5": "fb06758799c9a884318dad31ce248a94",
".git/objects/cc/a0b817d7ff181cfacfa6d6b436dee9aa993672": "f024bbdee74f6861bbeb0fdd8c31d507",
".git/objects/cd/fcecbbf8f427196df6f051266d724b3aa7384f": "799911f580b5114ba5a0f441764357f1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/23b0935450b03c30fcfab68e47e0f21cfeb548": "d3075ba085451d246ad3717299ba47d1",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/0bd215ef8f18cd9bb57d4cbd5dbd83b509318b": "c9b9e3c3fda13550cb8f5765ce76f633",
".git/objects/df/7d8f3f30e935427f156345435ad61a33c0ed04": "cbede45794500c4bcb6aaf21ca70b8e6",
".git/objects/e2/3cf962802dce7ec48c393a4886bfa0dc0d3425": "b00a2bde1840fde29495fea83a181052",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/f0f62a3cc8ea30b0ad060a35d20a4670ff15cf": "373a3607aaa66fa9032c925ce667e2d9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/3ca11f6509b48a1db2176b838024d3969347d7": "1f5bfec4a7c2867812a60d87373a0073",
".git/objects/fc/21b6b452a71d74ee18bf34b751b6917b66325b": "b2acdde18e36092c7cf5a969b7b68b67",
".git/objects/fc/7b40ffb2657dc893069a691392c129f1bff95b": "1c9fbae98da95ca6f006c1ec7369e662",
".git/objects/fe/e217275a9b1a439fbfc281af8ea54f0325f54b": "5ffc9116a4df1db07a103d78aaf53b88",
".git/refs/heads/master": "cdcbcd6847f374ef270c870dfe0e4325",
".git/refs/remotes/origin/master": "cdcbcd6847f374ef270c870dfe0e4325",
"assets/AssetManifest.bin": "7c6c906a4fbd57ff7b287508c8fac938",
"assets/AssetManifest.bin.json": "f85bff1f81da83dd01d06e99474af605",
"assets/AssetManifest.json": "6ac64ca02af8ce5da83ba5271e7c6db0",
"assets/FontManifest.json": "e024588c84b5d20cb7869d6f908130e8",
"assets/fonts/MaterialIcons-Regular.otf": "a3cd68f66453ce965bfce318b839aceb",
"assets/NOTICES": "49fd57d372dd62cd22d534c31a16ce0f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "c76af7881b6721bb174cb6b54ca5f343",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0c332362a0f836cff5fb3812388d541b",
"/": "0c332362a0f836cff5fb3812388d541b",
"main.dart.js": "72ba0cf3495ed7a87d9913743e616b48",
"manifest.json": "b3e117e6cbc2ea3ab7e4bde95a90b8bf",
"version.json": "e589e0693a058668d741f3ac8ddf6d16"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
