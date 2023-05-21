function initMap() {
    
    //지도 스타일
    var map = new google.maps.Map(document.getElementById('map'), {
        
        //처음 중심 좌표
        center: {
            lat: 37.587624,
            lng: 126.976020
        },
        
        //처음 줌 값. 숫자가 작을수록 낮은 배율
        zoom: 13
    });

    //마커 정보
    
    var locations = [
        
        //경복궁 마커
        ['<div class="wrap"><div class="text-box"><h4>일상 비일상의 틈</h4><div class="img-box"><img class="marker" src="../IMG/concert (1).png"></div><a target="_blank" href="https://www.lguplus.com/benefit/dailyteum"><p>홈페이지 방문하기</p></a></div>', 37.50067375908326, 127.02672123754625],
        
        
        //딸기케이크 마커
        //['<div class="wrap"><div class="text-box"><h4>딸기케이크</h4><div class="img-box"><img class="marker" src="../IMG/concert (1).png"></div><a target="_blank" href="https://noa-xyz.tistory.com"><p>홈페이지 방문하기</p></a></div>', 37.559524, 126.976710],
        
        
        //창덕궁 마커
        //['<a target="_blank" href="https://cdg.go.kr/">창덕궁 홈페이지</a>', 37.579711, 126.991043]
        
        
        ]

    
    
    //마커 이미지
    var customicon = '../IMG/ListPage/Marker/Gangnam.png'

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
                map.setZoom(14);
                
            });
        }
    }
}