/*

const modal__foto=document.querySelector(".modal__foto");
const modal=document.querySelector(".modal");
const clos=document.querySelector(".modal__close");
const overlay=document.querySelector(".modal__overlay");
const image=document.querySelector('.ims');
const jsClose=document.querySelectorAll('.js--close');
const add=document.querySelector('.add');

image.addEventListener('click',function(){
  if(event.target.className=='image__foto'){
    modal.classList.add('is-active');
    modal__foto.src=event.target.src;
    modal__foto.alt=event.target.src;
  }
})

for(let jsExit of jsClose){
  jsExit.addEventListener('click', function(){
    modal.classList.remove('is-active');
  })
}


let massiv=[
  {src:"images/add/35663.jpg", alt:"foto0"},
  {src:"images/add/tree-736885.jpg", alt:"foto1"},
  {src:"images/add/122134.jpg", alt:"foto2"},
  {src:"images/add/3376538h.jpeg", alt:"foto3"},
  {src:"images/add/depositphotos.jpg", alt:"foto4"},
  {src:"images/add/Image47__880.jpg", alt:"foto5"},
  {src:"images/add/images34.jpg", alt:"foto6"},
  {src:"images/add/imags.jpg", alt:"foto7"},
  {src:"images/add/maxresdefault.jpg", alt:"foto8"},
  {src:"images/add/maxresdefault.jpg", alt:"foto9"},
];

let i=0;
let steep=3;
add.addEventListener('click',function(){

  let div=document.createElement('div');
  div.className='columns is-centered';
  image.append(div);

let por=massiv.slice(i,steep);
if(por.length==3){

  for(let j=0; j<por.length;j++){


  let column=document.createElement('div');
  column.className='column is-4-tablet is-4-desktop is-4-widescreen';

  let img=document.createElement('img');
   img.src=por[j].src;
   img.alt=por[j].alt;
   img.className='image__foto';

   div.append(column);
   column.append(img);
   }
  }
else{
  add.classList.add('add--exit');
}

  i=i+3;
  steep=steep+3;

})

 */


const imagesMocksList = [
  { src:"images/add/35663.jpg", alt:"foto0" },
  { src:"images/add/tree-736885.jpg", alt:"foto1" },
  { src:"images/add/122134.jpg", alt:"foto2" },
  { src:"images/add/3376538h.jpeg", alt:"foto3" },
  { src:"images/add/depositphotos.jpg", alt:"foto4" },
  { src:"images/add/Image47__880.jpg", alt:"foto5" },
  { src:"images/add/images34.jpg", alt:"foto6" },
  { src:"images/add/imags.jpg", alt:"foto7" },
  { src:"images/add/maxresdefault.jpg", alt:"foto8" },
  { src:"images/add/maxresdefault.jpg", alt:"foto9" },
];


function createCard ({ src, alt }) {
  return `
    <div class="column is-4">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src=${src} alt=${alt}>
          </figure>
        </div>
      </div>
    </div>
  `;
}


document.addEventListener('DOMContentLoaded', function () {
  const loadMoreAction = document.querySelector('.js-load-more-action');
  const gallery = document.querySelector('.js-gallery');
  const galleryModal = document.querySelector('.js-modal');

  galleryModal.addEventListener('click', function (event) {
    if (event.target.classList.contains('js-close')) {
      this.classList.remove('is-active');
    }
  })

  gallery.addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG') {
      const galleryImg = event.target;
      const modalImg = galleryModal.querySelector('img');

      modalImg.setAttribute('src', galleryImg.src);
      modalImg.setAttribute('alt', galleryImg.alt);

      galleryModal.classList.add('is-active');
    }
  })

  const LOAD_IMAGE_STEP = 3;
  let countImageIteration = 0

  loadMoreAction.addEventListener('click', function (event) {

    if (countImageIteration < imagesMocksList.length) {
      const from = countImageIteration; // (1) = 0, (2) = 3, (3) = 6
      const to = LOAD_IMAGE_STEP + countImageIteration // (1) = 3, (2) = 6
      const loadedImagesList = imagesMocksList
        .slice(from, to) // (1) взять массив с 0 по 3 элемент, (2) взять массив с 3 по 6 элемент и так далее
        .map((image) => createCard(image)) // возвратить массив строк с разметкой для картинки, где уже подставлены src и alt
        .join(''); // перевести всё в одну строку

      gallery.insertAdjacentHTML('beforeend', loadedImagesList); // вставляем строку с разметкой в DOM

      countImageIteration = countImageIteration + LOAD_IMAGE_STEP; // увеличиваем счетчик в конце операции
    }

    if (countImageIteration > imagesMocksList.length) {
      loadMoreAction.classList.add('is-hidden'); // скрываем кнопку сразу как только count становится больше длинны массива картинок
    }
  })

  console.log('Loaded!');
})










