function initMap() {
    
    //지도 스타일
    var map = new google.maps.Map(document.getElementById('map'), {
        
        //처음 중심 좌표
        center: {  
            lat: 37.51661824908312,
            lng: 127.02808350077841
        },
        
        //처음 줌 값. 숫자가 작을수록 낮은 배율
        zoom: 13
    });

    //마커 정보
    
    var locations = [
        
        //마커1 일상 비일상의 틈 37.500572861524766, 127.02690236263258
        ['<div class="wrap"><div class="text-box"><a href="#firstPic"><h4>일상 비일상의 틈</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Gangnam_thumbnail/Gangnam_ilsang.jpeg"></div><p>자세한 정보</p></a></div>', 37.500572861524766, 127.02690236263258],
        
        //마커2 파이널나인 37.50086780543443, 127.0247461240554
        ['<div class="wrap"><div class="text-box"><a href="#secondPic"><h4>파이널나인</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Gangnam_thumbnail/Gangnam_finalNine.jpeg"></div><p>자세한 정보</p></a></div>', 37.50086780543443, 127.0247461240554],
        
        //마커3 템플스트라이크 37.49896232653475, 127.0260846658743
        ['<div class="wrap"><div class="text-box"><a href="#thirdPic"><h4>템플스트라이크</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Gangnam_thumbnail/Gangnam_templebowling.png"></div><p>자세한 정보</p></a></div>', 37.49896232653475, 127.0260846658743],

        //마커4 캠프VR 37.49946170835692, 127.02814538997339
        ['<div class="wrap"><div class="text-box"><a href="#fourthPic"><h4>캠프VR</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Gangnam_thumbnail/Gangnam_campVR.png"></div><p>자세한 정보</p></a></div>', 37.49946170835692, 127.02814538997339],
        
        //마커5 반지대학 37.5003715559861, 127.02745677246305
        ['<div class="wrap"><div class="text-box"><a href="#fifthPic"><h4>반지대학</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Gangnam_thumbnail/Gangnam_banji.jpeg"></div><p>자세한 정보</p></a></div>', 37.5003715559861, 127.02745677246305],
        
        //마커6 레드뮤지엄  37.527213647934666, 127.04471063470781
        ['<div class="wrap"><div class="text-box"><a href="#sixthPic"><h4>샤넬 레드뮤지엄</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Gangnam_thumbnail/Gangnam_ chanel.jpeg"></div><p>자세한 정보</p></a></div>', 37.527213647934666, 127.04471063470781],
        
        //마커7 시그널헌터 37.51796365701954, 127.02262502445839
        ['<div class="wrap"><div class="text-box"><a href="#seventhPic"><h4>시그널헌터</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Gangnam_thumbnail/Gangnam_signalhunter.jpeg"></div><p>자세한 정보</p></a></div>', 37.51796365701954, 127.02262502445839],
        
        //마커8 별마당도서관
        ['<div class="wrap"><div class="text-box"><a href="#eightPic"><h4>별마당도서관</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Gangnam_thumbnail/Gangnam_library.jpeg"></div><p>자세한 정보</p></a></div>', 37.51003102096571, 127.06003160955466],
        
        //마커9 코인테니스펍 액티비티 37.50909020388149, 127.02298213315633
        ['<div class="wrap"><div class="text-box"><a href="#ninePic"><h4>코인테니스펍</h4><div class="img-box"><img class="marker" src="../IMG/List_Thumbnail/Gangnam_thumbnail/Gangnam_tennis.jpeg"></div><p>자세한 정보</p></a></div>', 37.50909020388149, 127.02298213315633],
        
        ]

    
    
    //마커 이미지
    var customicon = '../IMG/ListPage/Marker/Gangnam_2.png'

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