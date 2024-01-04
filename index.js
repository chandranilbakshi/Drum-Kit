var buttonlength = document.querySelectorAll(".drum");
for(var i=0; i<buttonlength.length; i++){
    buttonlength[i].addEventListener("click", function(){
        
        makesound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event){
    
    makesound(event.key);
    buttonAnimation(event.key);
})

function makesound(key){
    switch(key){
        case "w":
            var aud = new Audio("sounds/tom-1.mp3");
            aud.play();
            break;
        
        case "a":
            var aud = new Audio("sounds/tom-2.mp3");
            aud.play();
            break;
        
        case "s":
            var aud = new Audio("sounds/tom-3.mp3");
            aud.play();
            break;
        
        case "d":
            var aud = new Audio("sounds/tom-4.mp3");
            aud.play();
            break;
            
        case "j":
            var aud = new Audio("sounds/snare.mp3");
            aud.play();
            break;
        
        case "k":
            var aud = new Audio("sounds/crash.mp3");
            aud.play();
            break;
            
        case "l":
            var aud = new Audio("sounds/kick-bass.mp3");
            aud.play();
            break;
            
    }
}

function buttonAnimation(currkey){

    var activeBut = document.querySelector("."+currkey);
    activeBut.classList.add("pressed");

    setTimeout(function(){
        activeBut.classList.remove("pressed");
    },100);
}