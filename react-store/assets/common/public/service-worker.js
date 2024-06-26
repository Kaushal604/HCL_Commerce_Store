/*
 *==================================================
 * Licensed Materials - Property of HCL Technologies
 *
 * HCL Commerce
 *
 * (C) Copyright HCL Technologies Limited 2020,2023
 *
 *==================================================
 */
// Flag for enabling cache in production
var doCache = true;
var CACHE_NAME = "hcl-commerce-react-store-cache";
// Delete old caches
self.addEventListener("activate", (event) => {
  const currentCachelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (!currentCachelist.includes(key)) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});
// This triggers when user starts the app
self.addEventListener("install", function (event) {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME).then(function (cache) {
        fetch("asset-manifest.json")
          .then((response) => {
            if (!response.ok) {
              throw new Error("HTTP error " + response.status);
            }
            return response.json();
          })
          .then((assets) => {
            // We will cache initial page and the main.js
            // We could also cache assets like CSS and images
            const urlsToCache = ["/", assets.files["main.js"]];
            return cache.addAll(urlsToCache);
          }).catch((error) => {
            console.error("Error when adding install event listener: ", error);
          });
      })
    );
  }
});
// Here we intercept request and serve up the matching files
self.addEventListener("fetch", function (event) {
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      })
    );
  }
});
