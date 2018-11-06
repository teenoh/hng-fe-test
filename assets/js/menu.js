const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
menu.addEventListener('click', function(){
    console.log('yeag');
   if(nav.style.display === 'none'){
       nav.style.display = 'block';
   }else{
       nav.style.display = 'none';
   }
})