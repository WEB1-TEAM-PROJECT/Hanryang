function changeImage() {
    let image= document.getElementById("hn");

    if (image.src.match("../IMG/FirstPage/boy.png")) {
        image.src="../IMG/FirstPage/girl.png";
    }

    else {
        image.src="../IMG/FirstPage/boy.png";
    }
    
    document.getElementById("hn").src = x;
}
