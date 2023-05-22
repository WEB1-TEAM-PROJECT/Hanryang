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

function bounce1() {
    var ball = document.getElementById("b1");
    var animationState = ball.style.animationPlayState;
  
    if (animationState === "paused") {
      ball.style.animationPlayState = "running";
    } else {
      ball.style.animationPlayState = "paused";
    }
  }

function bounce2() {
    var ball = document.getElementById("b3");
    var animationState = ball.style.animationPlayState;
  
    if (animationState === "paused") {
      ball.style.animationPlayState = "running";
    } else {
      ball.style.animationPlayState = "paused";
    }
}

