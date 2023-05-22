function recommend(){
    let arr1 = new Array(); //고궁 및 박물관
    arr1[0]="<a href='https://www.nfm.go.kr/home/subIndex/1239.do#'>국립민속박물관<img src='../IMG/List_Thumbnail/Bukchon_thumbnail/Bukchon_park.jpeg' border='0'></a>"
    arr1[1]="<a href='https://cgg.cha.go.kr/agapp/main/index.do?siteCd=CGG'>창경궁<img src='../IMG/List_Thumbnail/Hyehwa_thumbnail/Hyehwa_changguonggung.jpeg' border='0'></a>"
    arr1[2]="<a href='https://www.chf.or.kr/cont/view/fest/month/menu/210?thisPage=1&idx=109015&searchCategory1=600&searchCategory2=&searchField=all&searchDate=202304&weekSel=&searchText='>창덕궁 달빛기행<img src='../IMG/List_Thumbnail/Bukchon_thumbnail/Bukchon_chang.jpeg' border='0'></a>"

    let rand = Math.floor(Math.random()*(arr1.length))
    
    document.getElementById("result").src=arr1[rand];
}
