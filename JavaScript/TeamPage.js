//parkjeongho img change
let frontimg = Array.from(document.querySelectorAll('.front'));
let behindimg = Array.from(document.querySelectorAll('.behind'));

//마우스 올릴시 띄우기
for(let i=0; i<frontimg.length; i++){
  frontimg[i].addEventListener('mouseover', e=>{
      behindimg[i].style.display = 'inline';
      frontimg[i].style.display = 'none';
  });
}

//마우스 내릴시
for(let i=0; i<frontimg.length; i++){
  frontimg[i].addEventListener('mouseout', e=>{
      behindimg[i].style.display = 'none';
      frontimg[i].style.display = 'inline';
  });
}

//kenlee img change
let frontimg1 = Array.from(document.querySelectorAll('.front1'));
let behindimg1 = Array.from(document.querySelectorAll('.behind1'));

//마우스 올릴시 띄우기
for(let i=0; i<frontimg1.length; i++){
  frontimg1[i].addEventListener('mouseover', e=>{
      behindimg1[i].style.display = 'inline';
      frontimg1[i].style.display = 'none';
  });
}

//마우스 내릴시
for(let i=0; i<frontimg1.length; i++){
  frontimg1[i].addEventListener('mouseout', e=>{
      behindimg1[i].style.display = 'none';
      frontimg1[i].style.display = 'inline';
  });
}

//yujihye img change
let frontimg2 = Array.from(document.querySelectorAll('.front2'));
let behindimg2 = Array.from(document.querySelectorAll('.behind2'));

//마우스 올릴시 띄우기
for(let i=0; i<frontimg2.length; i++){
  frontimg2[i].addEventListener('mouseover', e=>{
      behindimg2[i].style.display = 'inline';
      frontimg2[i].style.display = 'none';
  });
}

//마우스 내릴시
for(let i=0; i<frontimg2.length; i++){
  frontimg2[i].addEventListener('mouseout', e=>{
      behindimg2[i].style.display = 'none';
      frontimg2[i].style.display = 'inline';
  });
}

//parkdohye img change
let frontimg3 = Array.from(document.querySelectorAll('.front3'));
let behindimg3 = Array.from(document.querySelectorAll('.behind3'));

//마우스 올릴시 띄우기
for(let i=0; i<frontimg3.length; i++){
  frontimg3[i].addEventListener('mouseover', e=>{
      behindimg3[i].style.display = 'inline';
      frontimg3[i].style.display = 'none';
  });
}

//마우스 내릴시
for(let i=0; i<frontimg3.length; i++){
  frontimg3[i].addEventListener('mouseout', e=>{
      behindimg3[i].style.display = 'none';
      frontimg3[i].style.display = 'inline';
  });
}