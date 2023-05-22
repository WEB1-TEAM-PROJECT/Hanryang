function initMap() {
    
    //지도 스타일
    var map = new google.maps.Map(document.getElementById('map'), {
        
        //처음 중심 좌표
        center: { //37.58556076415895, 126.98409887772272
            lat: 37.58556076415895, 
            lng: 126.98409887772272 
        },
        
        //처음 줌 값. 숫자가 작을수록 낮은 배율
        zoom: 14
    });

    //마커 정보
    
    var locations = [
        
        //마커1 도토리 캐리커쳐 37.58432247091246, 126.98192124655345
        ['<div class="wrap"><div class="text-box"><a href="#firstPic"><h4>도토리 캐리커쳐</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Bukchon_thumbnail/Bukchon_todori.webp"></div><p>자세한 정보</p></a></div>', 37.58432247091246, 126.98192124655345],
        
        //마커2 창덕궁 달빛기행 37.579450052318464, 126.99109064548566
        ['<div class="wrap"><div class="text-box"><a href="#secondPic"><h4>창덕궁 달빛기행</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Bukchon_thumbnail/Bukchon_chang.jpeg"></div><p>자세한 정보</p></a></div>', 37.579450052318464, 126.99109064548566],
        
        //마커3 국립미술박물관 37.581670167835696, 126.9790764950356
        ['<div class="wrap"><div class="text-box"><a href="#thirdPic"><h4>국립민속 박물관</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Bukchon_thumbnail/Bukchon_bak.jpeg"></div><p>자세한 정보</p></a></div>', 37.581670167835696, 126.9790764950356],
        
        //마커4 탬버린즈스토어 37.579428717732064, 126.98222520851094
        ['<div class="wrap"><div class="text-box"><a href="#fourthPic"><h4>탬버린즈 스토어</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Bukchon_thumbnail/Bukchon_store.jpeg"></div><p>자세한 정보</p></a></div>', 37.579428717732064, 126.98222520851094],
        
        //마커5 갤러리 애프터눈 37.582546986203845, 126.98205627524197
        ['<div class="wrap"><div class="text-box"><a href="#fifthPic"><h4>갤러리 애프터눈</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Bukchon_thumbnail/Bukchon_afternoon.png"></div><p>자세한 정보</p></a></div>', 37.582546986203845, 126.98205627524197],
        
        //마커6 한옥마을 37.58148488682472, 126.98490184546289
        ['<div class="wrap"><div class="text-box"><a href="#sixthPic"><h4></h4>한옥마을<div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Bukchon_thumbnail/Bukchon_hanok.jpeg"></div><p>자세한 정보</p></a></div>', 37.58148488682472, 126.98490184546289],
        
        //마커7 국립 현대 미술관 37.57956311448402, 126.98058174719635
        ['<div class="wrap"><div class="text-box"><a href="#seventhPic"><h4>국립 현대 미술관</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Bukchon_thumbnail/Bukchon_museum.jpeg"></div><p>자세한 정보</p></a></div>', 37.57956311448402, 126.98058174719635],
        
        //마커8 삼청 공원 37.59044002513662, 126.98604269450095
        ['<div class="wrap"><div class="text-box"><a href="#eightPic"><h4>삼청 공원</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Bukchon_thumbnail/Bukchon_park.jpeg"></div><p>자세한 정보</p></a></div>', 37.59044002513662, 126.98604269450095],
        
        //마커9 뮤지엄 한미 37.588330332206, 126.98094459594219
        ['<div class="wrap"><div class="text-box"><a href="#ninePic"><h4>뮤지엄 한미</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Bukchon_thumbnail/Bukchon_hanmi.jpeg"></div><p>자세한 정보</p></a></div>', 37.588330332206, 126.98094459594219],
        
        ]

    
    
    //마커 이미지
    var customicon = '../IMG/ListPage/Marker/Bukchon_2.png'

    //인포윈도우
    var infowindow = new google.maps.InfoWindow();

    //마커 생성
    var marker, i;
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            icon: customicon,
            map: map
        });
        //마커 클릭시 팝업 생성
        //mouseover도 가능
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));


        
        if (marker) {
            marker.addListener('click', function() {
                //마커 클릭 시의 중심 위치 변화
                map.setCenter(this.getPosition());
                //마커 클릭 시의 줌 변화
                map.setZoom(16);
                
            });
        }
    }
}