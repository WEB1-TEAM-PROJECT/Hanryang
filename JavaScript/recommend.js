let arr1 = new Array(); //고궁 및 박물관
arr1[0]="<a href='https://www.nfm.go.kr/home/subIndex/1239.do#'><img src='../IMG/List_Thumbnail/Bukchon_thumbnail/Bukchon_park.jpeg' border='0'><br>국립민속박물관</a>"
arr1[1]="<a href='https://cgg.cha.go.kr/agapp/main/index.do?siteCd=CGG'><img src='../IMG/List_Thumbnail/Hyehwa_thumbnail/Hyehwa_changguonggung.jpeg' border='0'><br>창경궁</a>"
arr1[2]="<a href='https://www.chf.or.kr/cont/view/fest/month/menu/210?thisPage=1&idx=109015&searchCategory1=600&searchCategory2=&searchField=all&searchDate=202304&weekSel=&searchText='><img src='../IMG/List_Thumbnail/Bukchon_thumbnail/Bukchon_chang.jpeg' border='0'><br>창덕궁 달빛기행</a>"

let arr2 = new Array(); //전시
arr2[0]="<a href='https://groundseesaw.co.kr/product/%eb%82%98%ed%83%88%eb%a6%ac-%ec%b9%b4%eb%a5%b4%ed%91%b8%ec%85%b4%ec%bd%94-%ec%82%ac%ec%a7%84%ec%a0%84/'><img src='../IMG/List_Thumbnail/Sungsu_thumbnail/Sungsu_natali.png' border='0' width='100%' height='100%'><br>나탈리 카르푸셴코 사진전, 전시/a>";
arr2[1]="<a href='https://www.sangsangmadang.com/display/detail/2356'><img src='../IMG/List_Thumbnail/Hongdae_thumbnail/Hongdae_earth.jpeg' border='0' width='100%' height='100%'>지구에 커튼을 쳐 줄게, 전시</a>";
arr2[2]="<a href='https://tickets.interpark.com/goods/23004816?app_tapbar_state=hide&'><img src='../IMG/List_Thumbnail/Hongdae_thumbnail/Hongdae_museum.jpeg' border='0' width='100%' height='100%'>왓츠 유어 컬러, 전시</a>";
arr2[3]="<a href='https://www.galleryafternoon.com/'><img src='../IMG/List_Thumbnail/Bukchon_thumbnail/Bukchon_afternoon.png' border='0' width='100%' height='100%'>갤러리 애프터눈</a>";
arr2[4]="<a href='https://www.mmca.go.kr/'><img src='../IMG/List_Thumbnail/Bukchon_thumbnail/Bukchon_museum.jpeg' border='0' width='100%' height='100%'>국립 현대 미술관</a>";
arr2[5]="<a href='https://museumhanmi.or.kr/'><img src='../IMG/List_Thumbnail/Bukchon_thumbnail/Bukchon_hanmi.jpeg' border='0' width='100%' height='100%'>뮤지엄 한미 - 삼청 별관</a>";

let style = new Array(); //선택한 스타일

document.getElementById('submit').onclick = function() {
    if (document.getElementById('arr1').checked) {
        style.push.apply(style,arr1);
    }
    if (document.getElementById('arr2').checked) {
        style.push.apply(style,arr2);
    }
}

function recommend(){
    let rand = Math.floor(Math.random()*(style.length))
    
    document.getElementById("result").innerHTML = style[rand];
}
