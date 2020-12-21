;
//asignar un nombre y versión al cache
const CACHE_NAME = 'v1_cache_chec_coordination',
  urlsToCache = [
    './',
    'https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700',
    'https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic',
    'https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css',

    './bridges.json',
    './access.json',
    './box.json',
    './concrete.json',
    './cycle.json',
    './exp.json',
    './ic.json',
    './parada.json',
    './pedestrian.json',
    './piv.json',
    './psv.json',
    './sideroad.json',
    './uturn.json',

    './css/style.css',
    './js/scripts.js',
    './img/assets/img/chec_coordination.png',
    './img/assets/img/favicon.png'
  ]

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  )
})

//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          //recuperar del cache
          return res
        }
        //recuperar de la petición a la url
        return fetch(e.request)
      })
  )
})
