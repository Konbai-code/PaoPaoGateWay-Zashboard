define(["./workbox-3e8df8c8"], (function(e) {
  "use strict";
  self.skipWaiting();
  e.clientsClaim();

  e.precacheAndRoute([
    {url:"assets/index-_7NkkXG1.js",revision:null},
    {url:"assets/index-BC3L5nhN.css",revision:null},
    {url:"assets/index-C1eCP44A.css",revision:null},
    {url:"assets/MiSans-VF-tRsyHePl.css",revision:null},
    {url:"assets/PingFangSC-Regular-CdqjaR4Y.css",revision:null},
    {url:"assets/SarasaUiSC-Regular-DAQC5TvS.css",revision:null},
    {url:"index.html",revision:"2ae302d9aacfd16124fdd4a70e42ba6e"},
	{url:"net_rec_show.html",revision:null},  // <== 新增这一行
    {url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},
    {url:"favicon.svg",revision:"7f1c4521acc10694fefef8f72dd2ea5f"},
    {url:"pwa-192x192.png",revision:"021df52501f4357c03eebd808f40dc6a"},
    {url:"pwa-512x512.png",revision:"d2f759aaabcb2c44ff52b27fde3de6e0"},
    {url:"pwa-maskable-192x192.png",revision:"7cd11dc5f0490b349d23eef5591d10e5"},
    {url:"pwa-maskable-512x512.png",revision:"8c97dc367a85a5a1eba523b24f79d03b"},
    {url:"manifest.webmanifest",revision:"c452912633990899ffe790f985ad0db9"}
  ], {});

  e.cleanupOutdatedCaches();

  // 自定义路由：访问 /ui/rec 返回 net_rec_show.html
	e.registerRoute(
	  ({request, url}) => request.mode === 'navigate' && url.pathname === '/ui/rec',
	  async () => {
		const cache = await caches.open('runtime-cache');
		let response = await cache.match('/net_rec_show.html');
		if (!response) {
		  response = await fetch('/net_rec_show.html');  // 注意前面加 /
		  if (response && response.ok) {
			cache.put('/net_rec_show.html', response.clone());
		  }
		}
		return response || Response.error();
	  }
	);


  // 其他导航请求返回 index.html
  e.registerRoute(
    new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))
  );
});