// imgs = [pjh, ken, yjh, pdh]
let frontimg = Array.from(document.querySelectorAll('.front'));
let behindimg = Array.from(document.querySelectorAll('.behind'));

//마우스 올릴시 이미지 교체
for(let i=0; i<frontimg.length; i++){
  frontimg[i].addEventListener('mouseover', e=>{
      behindimg[i].style.display = 'inline';
      frontimg[i].style.display = 'none';
  });
}

//마우스 내릴시 원래대로
for(let i=0; i<frontimg.length; i++){
  frontimg[i].addEventListener('mouseout', e=>{
      behindimg[i].style.display = 'none';
      frontimg[i].style.display = 'inline';
  });
}