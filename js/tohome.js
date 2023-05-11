function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)

//홈페이지보내기
document.querySelector('#home').addEventListener('click',e=>{
    window.location.href = '/list.html';
});

//홈페이지보내기 통합
function linkTo() {
    window.location.href = '/list.html';
}

let toMap = document.querySelectorAll('.link');
toMap[0].addEventListener('click', linkTo)
