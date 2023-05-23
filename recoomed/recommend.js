function recommend(){
    var arr1 = new Array(); //고궁 및 박물관
    arr1[0]="<a href='https://www.nfm.go.kr/home/subIndex/1239.do#'>국립민속박물관<img src='../recoomed/images/concert (1).png' border='0'></a>"
    arr1[1]="<a href='https://cgg.cha.go.kr/agapp/main/index.do?siteCd=CGG'>창경궁<img src='../recoomed/images/free-icon-climbing-2513189.png' border='0'></a>"
    arr1[2]="<a href='https://www.chf.or.kr/cont/view/fest/month/menu/210?thisPage=1&idx=109015&searchCategory1=600&searchCategory2=&searchField=all&searchDate=202304&weekSel=&searchText='>창덕궁 달빛기행<img src='../recoomed/images/free-icon-climbing-3098736.png' border='0'></a>"

    var rand = Math.floor(Math.random()*(arr1.length))
    
    document.getElementById("../recoomed/jstest.html/result").a = arr1[rand];
}