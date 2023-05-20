//parkjeongho img change
var image = document.getElementById('pjh');
var originalSrc = image;
var hoverSrc = '../IMG/TeamPage/ParkJeongHo(B).png';

image.addEventListener('mouseover', function() {
  image = hoverSrc;
});

image.addEventListener('mouseout', function() {
  image = originalSrc;
});