var au;
//one function for makesound
function make_sound(any_name){
    switch(any_name){
        case "w":
                au=new Audio("./sounds/tom-1.mp3");
                au.play();
                break;
            case "a":
                au=new Audio("./sounds/tom-2.mp3");
                au.play();
                break;
            case "s":
                au=new Audio("./sounds/tom-3.mp3");
                au.play();
                break;
            case "d":
                au=new Audio("./sounds/tom-4.mp3");
                au.play();
                break;
            case "j":
                au=new Audio("./sounds/crash.mp3");
                au.play();
                break;
            case "k":
                au=new Audio("./sounds/kick-bass.mp3");
                au.play();
                break;
            case "l":
                au=new Audio("./sounds/snare.mp3");
                au.play();
                break;
    }
}
//one function for animation
function btn_animation(key){
    var active_btn=document.querySelector("."+key);
    active_btn.classList.add("pressed");
    setTimeout(function(){
        active_btn.classList.remove("pressed");
    },150);
}

//for mouse click listener
for (var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var pressed=this.innerHTML;
        make_sound(pressed);
        btn_animation(pressed);
    });
}

//for keyboard listener
document.addEventListener("keydown",function(event)
{
    make_sound(event.key);
    btn_animation(event.key);
});






