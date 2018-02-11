var spans = document.querySelectorAll('.div4 span');
var root = document.querySelector(':root');

spans.forEach((span) =>{
  span.addEventListener('click',(e)=>{
    root.style.setProperty('--my-color',e.target.style.background);
  })
})
