const modal__foto=document.querySelector(".modal__foto");
const modal=document.querySelector(".modal");
const clos=document.querySelector(".modal__close");
const overlay=document.querySelector(".modal__overlay");
const image=document.querySelector('.image');


image.addEventListener('click',function(){
  console.log(event.target.className);
  if(event.target.className=='image__foto'){
    modal.classList.add('modal--active');
    modal__foto.src=event.target.src;
    modal__foto.alt=event.target.src;
  }
})

clos.addEventListener("click", function(){
  modal.classList.remove('modal--active');
})

overlay.addEventListener('click',function(){
  modal.classList.remove('modal--active');
})


const add=document.querySelector('.add');
let i=0;
add.addEventListener('click',function(){

  console.log(add.value);
  if(i==0){
  image.insertAdjacentHTML('beforeend','<div class="image__item"><img src="images/add/35663.jpg" alt="img" class="image__foto"></div><div class="image__item"><img src="images/add/tree-736885.jpg" alt="img" class="image__foto"></div><div class="image__item"><img src="images/add/122134.jpg" alt="img" class="image__foto">')
  i+= 1;}
  else if(i==1){
    image.insertAdjacentHTML('beforeend','<div class="image__item"><img src="images/add/3376538h.jpeg" alt="img" class="image__foto"></div><div class="image__item"><img src="images/add/depositphotos.jpg" alt="img" class="image__foto"></div><div class="image__item"><img src="images/add/Image47__880.jpg" alt="img" class="image__foto">')
    i+=1;}
  else if(i==2){
    image.insertAdjacentHTML('beforeend','<div class="image__item"><img src="images/add/images34.jpg" alt="img" class="image__foto"></div><div class="image__item"><img src="images/add/imags.jpg" alt="img" class="image__foto"></div><div class="image__item"><img src="images/add/maxresdefault.jpg" alt="img" class="image__foto">')
    add.classList.add('add--exit');
  }
 
  
})










   
  