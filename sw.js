/* Домилия Про: push-уведомления ленты команды */
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('push', function(e){ var d = {}; try { d = e.data ? e.data.json() : {}; } catch(x){ d = { title:'Домилия', body:e.data ? e.data.text() : '' }; }
  e.waitUntil(self.registration.showNotification(d.title || 'Домилия', { body:d.body || '', tag:d.tag || undefined, renotify:!!d.tag, icon:'/icon-192.png', badge:'/icon-192.png', data:{ url:d.url || '/app.html#feed' }, requireInteraction:!!d.urg, vibrate:d.urg ? [200, 100, 200, 100, 300] : [120] })); });
self.addEventListener('notificationclick', function(e){ e.notification.close(); var url = (e.notification.data && e.notification.data.url) || '/app.html#feed';
  e.waitUntil(self.clients.matchAll({ type:'window', includeUncontrolled:true }).then(function(L){ for (var i = 0; i < L.length; i++){ var c = L[i]; if (c.url.indexOf('/app.html') > -1){ c.postMessage({ t:'open', url:url }); return c.focus(); } } return self.clients.openWindow(url); })); });
