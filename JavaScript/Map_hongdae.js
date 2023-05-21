function initMap() {
    
    //지도 스타일
    var map = new google.maps.Map(document.getElementById('map'), {
        
        //처음 중심 좌표
        center: {  //37.548882672077575, 126.92137876447991
            lat: 37.548882,
            lng: 126.921378
        },
        
        //처음 줌 값. 숫자가 작을수록 낮은 배율
        zoom: 13
    });

    //마커 정보
    
    var locations = [
        
        //마커 딩굴딩굴 알타미라 만화카페 37.554900597474564, 126.92857338047952
        ['<div class="wrap"><div class="text-box"><h4>딩굴딩굴 알타마라 만화카페</h4><div class="img-box"><img class="marker" src="../IMG/concert (1).png"></div><a target="_blank" href="https://www.lguplus.com/benefit/dailyteum"><p>홈페이지 방문하기</p></a></div>', 37.554900597474564, 126.92857338047952],
        
        //마커 인디스페이스 독립영화 37.55722358911605, 126.92499195039491
        ['<div class="wrap"><div class="text-box"><h4>인디스페이스</h4><div class="img-box"><img class="marker" src="../IMG/concert (1).png"></div><a target="_blank" href="https://www.lguplus.com/benefit/dailyteum"><p>홈페이지 방문하기</p></a></div>', 37.55722358911605, 126.92499195039491],
        
        //마커 포트링 도자기공방 37.559231397924655, 126.923482799549
        ['<div class="wrap"><div class="text-box"><h4>포트링</h4><div class="img-box"><img class="marker" src="../IMG/concert (1).png"></div><a target="_blank" href="https://www.lguplus.com/benefit/dailyteum"><p>홈페이지 방문하기</p></a></div>', 37.559231397924655, 126.923482799549],

        //마커 121르말뒤페이 향수공방 37.548882672077575, 126.92137876447991
        ['<div class="wrap"><div class="text-box"><h4>121르말뒤페이</h4><div class="img-box"><img class="marker" src="../IMG/concert (1).png"></div><a target="_blank" href="https://www.lguplus.com/benefit/dailyteum"><p>홈페이지 방문하기</p></a></div>', 37.548882672077575, 126.92137876447991],
        
        //마커 무신사테라스 37.55759477345083, 126.92692005895894
        ['<div class="wrap"><div class="text-box"><h4>무신사테라스</h4><div class="img-box"><img class="marker" src="../IMG/concert (1).png"></div><a target="_blank" href="https://www.lguplus.com/benefit/dailyteum"><p>홈페이지 방문하기</p></a></div>', 37.55759477345083, 126.92692005895894],
        
        //마커 지구에 커튼을 쳐줄게 전시 37.55092628718842, 126.9211190505957
        ['<div class="wrap"><div class="text-box"><h4>지구에 커튼을 쳐줄게</h4><div class="img-box"><img class="marker" src="../IMG/concert (1).png"></div><a target="_blank" href="https://www.lguplus.com/benefit/dailyteum"><p>홈페이지 방문하기</p></a></div>', 37.55092628718842, 126.9211190505957],
        
        //마커 왓츠유어컬러 홍대 전시 37.557915066447414, 126.92632461196884
        ['<div class="wrap"><div class="text-box"><h4>왓츠유어컬러</h4><div class="img-box"><img class="marker" src="../IMG/concert (1).png"></div><a target="_blank" href="https://www.lguplus.com/benefit/dailyteum"><p>홈페이지 방문하기</p></a></div>', 37.557915066447414, 126.92632461196884],
        
        
        //마커 VRZONE 아케이드 37.55471468108817, 126.92232137474276
        ['<div class="wrap"><div class="text-box"><h4>VRZONE아케이드</h4><div class="img-box"><img class="marker" src="../IMG/concert (1).png"></div><a target="_blank" href="https://noa-xyz.tistory.com"><p>홈페이지 방문하기</p></a></div>', 37.55471468108817, 126.92232137474276],
        
        //마커 티팩토리 복합문화공간 37.55523804673446, 126.92237767837207
        ['<div class="wrap"><div class="text-box"><h4>T-Factory</h4><div class="img-box"><img class="marker" src="../IMG/concert (1).png"></div><a target="_blank" href="https://noa-xyz.tistory.com"><p>홈페이지 방문하기</p></a></div>', 37.55523804673446, 126.92237767837207],
            
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