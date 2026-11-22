// Service worker mínimo: permite instalar la app. Siempre pide los datos frescos a internet.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
