self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('restaurant-app')
    .then(function(cache) {
      console.log('Cache opened!');
      return cache.addAll([
        '/',
        '/index.html',
        '/restaurant.html?id=1',
        '/restaurant.html?id=2',
        '/restaurant.html?id=3',
        '/restaurant.html?id=4',
        '/restaurant.html?id=5',
        '/restaurant.html?id=6',
        '/restaurant.html?id=7',
        '/restaurant.html?id=8',
        '/restaurant.html?id=9',
        '/restaurant.html?id=10',
        '/css/styles.css',
        '/data/restaurants.json',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg'
      ]);
      console.log('Cache opened!');
    })
    .catch(function() {
      console.log('Failed to open cache!');
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request)
      };
    })
  );
});
