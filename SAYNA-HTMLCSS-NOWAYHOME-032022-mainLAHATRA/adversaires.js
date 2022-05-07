// Footer
let footer = document.getElementsByClassName('footer-media');
for(let i=0; i<footer.length; i++){
    footer[i].addEventListener('mouseover',()=>{
        footer[i].style.color='white';
        footer[i].style.backgroundColor='#f1c530'
    });
    footer[i].addEventListener('mouseout',()=>{
        footer[i].style.color='black';  
        footer[i].style.backgroundColor='#f1c530'
      });
}
// toute la ligne
let list = document.querySelectorAll('li');
list.forEach(function(li){
    li.addEventListener('mouseover',()=>{
    
        li.style.textDecoration='line-through';
    });
    li.addEventListener('mouseout',()=>{
    
        li.style.textDecoration='none';
    });
})
// boutom
let btn = document.getElementsByClassName('btn');

for(let i=0; i < btn.length ; i++){
btn[i].addEventListener('mouseover', ()=>{
    btn[i].style.backgroundColor='#b11313';
    btn[i].style.color='white';
    btn[i].style.fontWeigth='bold';
    btn[i].style.boxShadow='5px 5px 30px white';
});
btn[i].addEventListener('mouseout', ()=>{
    btn[i].style.backgroundColor='white';
    btn[i].style.color='#b11313';
    btn[i].style.fontWeigth='bold';
    btn[i].style.boxShadow='none';
});
}

$(document).ready(function(){
    $(".box").animate({
        left: '30px'
    },"slow");
    $(".description").fadeIn(5000);
})
