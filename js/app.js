const modalFoto=document.querySelector(".modal__foto");
const modal=document.querySelector(".modal");
const image=document.querySelector('.js-gallery');
const addFoto=document.querySelector('.js-load');

image.addEventListener('click',function(event){
  if(event.target.tagName==='IMG'){
    modal.classList.add('is-active');
    modalFoto.setAttribute('src', event.target.src)
    modalFoto.setAttribute('alt', event.target.alt)
  }
})

modal.addEventListener('click',function(event){
  if(event.target.classList.contains('js--close')){
    modal.classList.remove('is-active');  
  }
})

let fotoLoader=[
  {src:"images/add/35663.jpg", alt:"foto0"},
  {src:"images/add/tree-736885.jpg", alt:"foto1"},
  {src:"images/add/122134.jpg", alt:"foto2"},
  {src:"images/add/3376538h.jpeg", alt:"foto3"},
  {src:"images/add/depositphotos.jpg", alt:"foto4"},
  {src:"images/add/Image47__880.jpg", alt:"foto5"},
  {src:"images/add/images34.jpg", alt:"foto6"},
  {src:"images/add/imags.jpg", alt:"foto7"},
  {src:"images/add/maxresdefault.jpg", alt:"foto8"},
];

function cardNew({src,alt}){
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


let step=3;
let cont=0;
let from=0;
let to=3;
addFoto.addEventListener('click',function(){
if(cont<fotoLoader.length){
  let fotoLoad=fotoLoader
  .slice(from,to)
  .map((image) => cardNew(image))
  .join(' ');
  console.log(fotoLoad);

image.insertAdjacentHTML('beforeend', fotoLoad);

from=from+step;
to=to+step;
cont=cont+step;
}

if(cont>=fotoLoader.length){
  addFoto.classList.add('is-hidden');
}
})


















// let i=0;
// let steep=3;
// add.addEventListener('click',function(){

//   let div=document.createElement('div');
//   div.className='columns is-centered';
//   image.append(div);

// let por=massiv.slice(i,steep);
// if(por.length===3){

//   for(let j=0; j<por.length;j++){
 
  
//   let column=document.createElement('div');
//   column.className='column is-4-tablet is-4-desktop is-4-widescreen';

//   let img=document.createElement('img');
//    img.src=por[j].src;
//    img.alt=por[j].alt;
//    img.className='image__foto';
  
//    div.append(column);
//    column.append(img);
//    }
//   }

// if(por.length!==3){
//   add.classList.add('add--exit');
// }

//   i=i+3;
//   steep=steep+3;
  
// })












   
  