let markers = Array.from(document.querySelectorAll('.container'));;
let where = [
    ["anywhere", "somewhere", "here"], //성수
    ["anywhere", "somewhere", "here"],
    ["anywhere", "somewhere", "here"]
];
let placeId = 0;
let point = null;
//let point = stTest();
//let point = 'anywhere';
// prevent uncaught reference error
//마우스 올릴시 띄우기
/*
for(let t=0; t<markers.length; t++){
    markers[t].addEventListener('mouseover', e=>{
        //e.preventDefault();
        //let point = where[placeId][0]; // 지역 포인트 나타내기
    });
}*/
/*
for(let t=0; t<markers.length; t++){
    markers[t].addEventListener('mouseover', e=>{
        //stTest('anywhere'); // 지역 포인트 나타내기
        //console.log(stTest(`${where[0][0]}`));
        stTest();
    });
}*/
/*
for(let t=0; t<markers.length; t++){
    markers[t].addEventListener('mouseover', e=>{
        //stTest('anywhere'); // 지역 포인트 나타내기
        //console.log(stTest(`${where[0][0]}`));
        let point = get(e);
    });
    function get(){
        if(t==0){  
            return stTest(); //마우스 올렸을때 함수 실행 가능?
        }
        else if(t==1){
            return secTest();
        }
    }
}*/
/*
for(let t=0; t<markers.length; t++){
    markers[t].addEventListener("mouseover", function(event){
        let point = getPlace(event);
        // result is your return value
    }, false);
    function getPlace(){
        if(t==0){
            return `${where[0][0]}`;
        }
        else if(t==1){  
            return stTest();
        }
        else if(t==2){
            return secTest();
        }
    }
}*/
for(let t=0; t<markers.length; t++){
    markers[t].addEventListener("mouseover", getPlace, false);
    function getPlace(){
        if(t==0){
            point = `${where[0][0]}`;
        }
        else if(t==1){  
            return stTest();
        }
        else if(t==2){
            return secTest();
        }
    }
}

function stTest(){
    return `${where[0][1]}`;
}
function secTest(){
    console.log(`${where[0][2]}`);
}
console.log(placeId);
console.log(point);
// module.exports.point = point;
export default point = point;
/* prevent Uncaught SyntaxError: 
The requested module '*.js' does not provide an export named 'default*/