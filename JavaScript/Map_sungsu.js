function initMap() {
    
    //지도 스타일
    var map = new google.maps.Map(document.getElementById('map'), {
        
        //처음 중심 좌표
        center: { //37.54460976296951, 127.05215055607142
            lat: 37.54460976296951,
            lng: 127.05215055607142
        },
        
        //처음 줌 값. 숫자가 작을수록 낮은 배율
        zoom: 14
    });

    //마커 정보
    
    var locations = [
        
        //마커8 서울숲공원 37.54442007599984, 127.03751094674247
        ['<div class="wrap"><div class="text-box"><a href="#eightPic"><h4>서울숲 공원</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Sungsu_thumbnail/Sungsu_seoulpark.jpeg"></div><p>자세한 정보</p></a></div>', 37.54442007599984, 127.03751094674247],
        
        //마커1 리얼월드 성수 액티비티 37.54224527168637, 127.05850820951746
        ['<div class="wrap"><div class="text-box"><a href="#firstPic"><h4>리얼월드</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Sungsu_thumbnail/Sungsu_realworld.png"></div><p>자세한 정보</p></a></div>', 37.54224527168637, 127.05850820951746],
        
        //마커2 나탈리 카르푸셴코 사진전 그라운드시소 전시 37.54640227270778, 127.06530035644184
        ['<div class="wrap"><div class="text-box"><a href="#secondPic"><h4>나탈리 사진전</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Sungsu_thumbnail/Sungsu_natali.png"></div><p>자세한 정보</p></a></div>', 37.54640227270778, 127.06530035644184],
        
        //마커3 피에스비 커피바 카페 37.54815882567253, 127.04351851184418
        ['<div class="wrap"><div class="text-box"><a href="#thirdPic"><h4>PSB 커피바</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Sungsu_thumbnail/Sungsu_coffee.jpeg"></div><p>자세한 정보</p></a></div>', 37.54815882567253, 127.04351851184418],
        
        //마커4 그린랩 힐링 스튜디오 37.54677334445193, 127.04056640524125
        ['<div class="wrap"><div class="text-box"><a href="#fourthPic"><h4>그린랩</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Sungsu_thumbnail/Sungsu_greenrap.png"></div><p>자세한 정보</p></a></div>', 37.54677334445193, 127.04056640524125],
        
        //마커5 공간와디즈 복합문화공간 37.54487571502439, 127.05058334444135
        ['<div class="wrap"><div class="text-box"><a href="#fifthPic"><h4>공간와디즈</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Sungsu_thumbnail/Sungsu_konggang.jpeg"></div><p>자세한 정보</p></a></div>', 37.54487571502439, 127.05058334444135],
        
        //마커6 카페 할아버지공장 37.54109306291794, 127.05494062062823
        ['<div class="wrap"><div class="text-box"><a href="#sixthPic"><h4>할아버지공장</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Sungsu_thumbnail/Sungsu_halaboji.jpeg"></div><p>자세한 정보</p></a></div>', 37.54109306291794, 127.05494062062823],
        
        //마커7 마크곤잘레스 팝업스토어 37.540969123181654, 127.0594989003599
        ['<div class="wrap"><div class="text-box"><a href="#seventhPic"><h4>마크곤잘레스</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Sungsu_thumbnail/Sungsu_mark.png"></div><p>자세한 정보</p></a></div>', 37.540969123181654, 127.0594989003599],
        
        //마커9 성수미술관 카페 37.54565835336702, 127.05482509416157
        ['<div class="wrap"><div class="text-box"><a href="#ninePic"><h4>성수미술관 카페</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Sungsu_thumbnail/Sungsu_art.png"></div><p>자세한 정보</p></a></div>', 37.54565835336702, 127.05482509416157],


        ]

    
    
    //마커 이미지
    var customicon = '../IMG/ListPage/Marker/Sungsu_2.png'

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
                map.setZoom(15);
                
            });
        }
    }
}