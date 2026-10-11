/* Locally packaged Unsplash photos. Full credits are in assets/credits.json. */
(() => {
 'use strict';
 const credits=[
  ['Matthew Yong','https://unsplash.com/photos/the-interior-of-an-airplane-with-the-lights-on-UxC8w9bkrHI'],
  ['Josh Hild','https://unsplash.com/photos/looking-up-at-skyscrapers-in-a-foggy-city-EExcDxoVtRs'],
  ['Sébastien Lavalaye','https://unsplash.com/photos/long-hotel-hallway-with-red-carpet-and-wall-lamps-W4GKYkt4vqk'],
  ['Karl Köhler','https://unsplash.com/photos/landscape-photo-of-snowy-mountain-N_MXyBUV5hU'],
  ['Jeremy Bishop','https://unsplash.com/photos/a-large-body-of-water-under-a-cloudy-sky-G9i_plbfDgk']
 ];
 let selected=-1;
 const photos=Array.from(document.querySelectorAll('[data-background-layer]'));
 function select(layer){
  if(!Number.isInteger(layer)||layer<0||layer>4||layer===selected)return;
  selected=layer;document.body.dataset.dreamLayer=String(layer);
  photos.forEach(photo=>photo.classList.toggle('active',Number(photo.dataset.backgroundLayer)===layer));
  const credit=document.getElementById('background-credit');credit.textContent='Photo: '+credits[layer][0]+' / Unsplash';credit.href=credits[layer][1];
 }
 document.querySelectorAll('.world-photo img').forEach(img=>img.addEventListener('error',()=>img.parentElement.classList.add('photo-unavailable')));
 window.DreamBackdrop={select,pause(held){document.body.classList.toggle('hold-atmosphere',held);}};
 select(1);
})();
