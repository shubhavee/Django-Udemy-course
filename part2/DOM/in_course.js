var head_one=document.querySelector("#one")
var head_two=document.querySelector("#two")
var head_three=document.querySelector("#three")

head_one.addEventListener('mouseover',function(){
  head_one.textContent="Mouse Currently Over";
  head_one.style.color='red';
})

head_one.addEventListener('mouseout',function(){
  head_one.textContent="Hover over me";
  head_one.style.color='black';
})

head_two.addEventListener("click",function(){
  head_two.textContent='clicked on';
  head_two.style.color='blue';
})

head_three.addEventListener('dblclick',function(){
  head_three.textContent='I was double clicked';
  head_three.style.color='red';
})
