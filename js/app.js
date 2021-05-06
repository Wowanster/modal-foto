const modal__foto=document.querySelector(".modal__foto");
const modal=document.querySelector(".modal");
const clos=document.querySelector(".modal__close");
const overlay=document.querySelector(".modal__overlay");
const image=document.querySelector('.ims');
const jsClose=document.querySelectorAll('.js--close');
const add=document.querySelector('.add');

image.addEventListener('click',function( /*event */  ){
  // 1. event в параметрах функции. каким чудом оно работает я хз)
  // 2. event.target.classList.contains('image__foto')
  // 3. если сравниваешь, то сравнивай не "==" а "===" (прочитай в чем разница)
  if(event.target.className=='image__foto'){
    modal.classList.add('is-active');
    // modal__foto - переменные так не именуются
    // modalPhoto - camelCase

    // modal__foto.setAttribute(<attribute name>, <attribute value>)
    modal__foto.src=event.target.src;
    modal__foto.alt=event.target.src;
  }
})

// можно сделать через делегирование над модалкой (как с картинками выше)
// не обязательно проходить все классы в массиве и задавать обработчик
for(let jsExit of jsClose){
  jsExit.addEventListener('click', function(){
    modal.classList.remove('is-active');
  })
}


// так тоже не именнуй)) никто не пишет русские слова в переменных
let massiv=[
  // length 3
  {src:"images/add/35663.jpg", alt:"foto0"},
  {src:"images/add/tree-736885.jpg", alt:"foto1"},
  {src:"images/add/122134.jpg", alt:"foto2"},
  // length 3
  {src:"images/add/3376538h.jpeg", alt:"foto3"},
  {src:"images/add/depositphotos.jpg", alt:"foto4"},
  {src:"images/add/Image47__880.jpg", alt:"foto5"},
  // length 3
  {src:"images/add/images34.jpg", alt:"foto6"},
  {src:"images/add/imags.jpg", alt:"foto7"},
  {src:"images/add/maxresdefault.jpg", alt:"foto8"},
  // length 1 ???
  {src:"images/add/maxresdefault.jpg", alt:"foto9"},
];

// форматируй код так чтобы его было удобно читать (отступы, пробелы)
let i=0;
let steep=3; // steep --> step
add.addEventListener('click',function(){

  let div=document.createElement('div');
  div.className='columns is-centered';
  image.append(div);

let por=massiv.slice(i,steep);

// вот тут случайно у тебя не отсекается картинка?
// потому что в какой-то момент у тебя не подгрузится последняя картинка, так как por.length будет равно 1
if(por.length==3){

  for(let j=0; j<por.length;j++){


  let column=document.createElement('div');
  // тут вроде бы тоже класс можно по другому задать
  column.className='column is-4-tablet is-4-desktop is-4-widescreen';

  let img=document.createElement('img');
   img.src=por[j].src;
   img.alt=por[j].alt;
   // тоже что и выше
   img.className='image__foto';

   div.append(column);
   column.append(img);
   }
  }
else{
  // из-за того что этот код в "else" придется нажимать на кнопку лишний раз чтобы она пропала
  add.classList.add('add--exit');
}

  i=i+3;
  steep=steep+3;

})













