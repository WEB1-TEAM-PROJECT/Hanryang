function initMap() {
    
    //지도 스타일
    var map = new google.maps.Map(document.getElementById('map'), {
        
        //처음 중심 좌표
        center: {
            lat: 37.580624,
            lng: 126.996020
        },
        
        //처음 줌 값. 숫자가 작을수록 낮은 배율
        zoom: 14
    });

    //마커 정보
    
    var locations = [
        
        //카페테라피 http://cafetherapy.net 37.5803866,127.0026872
        ['<div class="wrap"><div class="text-box"><h4>카페테라피</h4><div class="img-box"><img class="marker" src="../IMG/concert (1).png"></div><a target="_blank" href="http://cafetherapy.net/"><p>홈페이지 방문하기</p></a></div>', 37.58053751843618, 127.0053050105693],
        
        //아이띵소 https://www.ithinksoshop.co.kr 37.5788284,127.0020601
        ['<div class="wrap"><div class="text-box"><h4>아이쇼룸</h4><div class="img-box"><img class="marker" src="../IMG/concert (1).png"></div><a target="_blank" href="https://www.ithinksoshop.co.kr"><p>홈페이지 방문하기</p></a></div>', 37.57883616542004, 127.00466915630915],
        
        //혜화그림제작소 http://grimfactory.kr/bbs/board.php?bo_table=store 37.58256860015284, 126.99853768173308
        ['<div class="wrap"><div class="text-box"><h4>혜화 그림 제작소</h4><div class="img-box"><img class="marker" src="../IMG/concert (1).png"></div><a target="_blank" href="http://grimfactory.kr/bbs/board.php?bo_table=store"><p>홈페이지 방문하기</p></a></div>', 37.58256860015284, 126.99853768173308],
        
        //낙산공원 37.58067910552169, 127.0075389282773
        ['<div class="wrap"><div class="text-box"><h4>낙산공원</h4><div class="img-box"><img class="marker" src="../IMG/concert (1).png"></div><a target="_blank" href="http://grimfactory.kr/bbs/board.php?bo_table=store"><p>홈페이지 방문하기</p></a></div>', 37.58067910552169, 127.0075389282773],
        
        //상상의문 방탈출 37.584101682742634, 127.00087386333585
        ['<div class="wrap"><div class="text-box"><h4>상상의문</h4><div class="img-box"><img class="marker" src="../IMG/concert (1).png"></div><a target="_blank" href="http://grimfactory.kr/bbs/board.php?bo_table=store"><p>홈페이지 방문하기</p></a></div>', 37.584101682742634, 127.00087386333585],
        
        //퍼퓸그라피 향수 쇼륨 37.582517648902375, 127.00291110791656
        ['<div class="wrap"><div class="text-box"><h4>퍼퓸그라피</h4><div class="img-box"><img class="marker" src="../IMG/concert (1).png"></div><a target="_blank" href="http://grimfactory.kr/bbs/board.php?bo_table=store"><p>홈페이지 방문하기</p></a></div>', 37.582517648902375, 127.00291110791656],
        
        //마로니에공원 37.58051858622418, 127.0028579529348
        ['<div class="wrap"><div class="text-box"><h4>마로니에공원</h4><div class="img-box"><img class="marker" src="../IMG/concert (1).png"></div><a target="_blank" href="http://grimfactory.kr/bbs/board.php?bo_table=store"><p>홈페이지 방문하기</p></a></div>', 37.58051858622418, 127.0028579529348],
        
        //창경궁 37.57883191342931, 126.99499960598965
        ['<a target="_blank" href="https://cdg.go.kr/">창경궁</a>', 37.57883191342931, 126.99499960598965]
        
        
        ]

    
    
    //마커 이미지
    var customicon = '../IMG/ListPage/Marker/Hongdae_2.png'

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