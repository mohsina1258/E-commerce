const staticRedStore = "red-store-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/assets/icons/icon-72x72.png",
  "/images/assets/icons/icon-96x96.png",
  "/images/assets/icons/icon-128x128.png",
  "/images/assets/icons/icon-144x144.png",
  "/images/assets/icons/icon-152x152.png",
  "/images/assets/icons/icon-192x192.png",
  "/images/assets/icons/icon-384x384.png",
  "/images/assets/icons/icon-512x512.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })