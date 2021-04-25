const modal__foto=document.querySelector(".modal__foto");
const modal=document.querySelector(".modal");
const clos=document.querySelector(".modal__close");
const overlay=document.querySelector(".modal__overlay");
const image=document.querySelector('.image');
const jsClose=document.querySelectorAll('.js--close');
const add=document.querySelector('.add');

image.addEventListener('click',function(){
  if(event.target.className=='image__foto'){
    modal.classList.add('modal--active');
    modal__foto.src=event.target.src;
    modal__foto.alt=event.target.src;
  }
})

for(let jsExit of jsClose){
  jsExit.addEventListener('click', function(){
    modal.classList.remove('modal--active');
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

let por=massiv.slice(i,steep);
if(por.length==3){

  for(let j=0; j<por.length;j++){
 
  let div=document.createElement('div');
  div.className='image__item';

  let img=document.createElement('img');
   img.src=por[j].src;
   img.alt=por[j].alt;
   img.className='image__foto';

   image.append(div);
   div.append(img);
   }
  }
else{
  add.classList.add('add--exit');
}

  i=i+3;
  steep=steep+3;
  
})












   
  