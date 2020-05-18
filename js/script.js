/*Start navigation mobile*/
function myFunction() {
    var x = document.querySelector(".main-navigation-item");
    x.classList.toggle('mobile')
}
/*End navigation mobile*/
/*=================================================================*/
/*Start open model window sign up*/
var btn_up = document.querySelector("#btn_up")
btn_up.addEventListener('click', openModelWindowUp)
 
function openModelWindowUp(){
  var model_window_up = document.querySelector('.model_window_up');
      model_window_up.style.display = "block";
}
/*End open model window sign up*/
/*==================================================================*/
/*Start open model window sign in*/
var btn_in = document.querySelector("#btn_in")
btn_in.addEventListener('click', openModelWindowIn)

function openModelWindowIn(){
  var model_window_in = document.querySelector('.model_window_in');
      model_window_in.style.display = "block";
}
/*End open model window sign in*/
/*===================================================================*/
var btn_close = document.querySelectorAll('.close')
for(var i = 0; i < btn_close.length; i++){
  if(this){
    btn_close[i].addEventListener('click', closeModelWindowUp)
  }
 
}

function closeModelWindowUp(){
  var model_window_up = document.querySelector('.model_window_up')
      model_window_up.style.display = "none";
}
/*====================================================================*/
var btn_close1 = document.querySelectorAll('.close')
for(var i = 0; i < btn_close.length; i++){
  if(this){
    btn_close1[i].addEventListener('click', closeModelWindowIn)
  }
 
}
function closeModelWindowIn(){
  var model_window_up = document.querySelector('.model_window_in')
      model_window_up.style.display = "none";
}