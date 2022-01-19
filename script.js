let btn = document.getElementById("Header");
let count = 0;


function btnIncrement(){
    var snd = new Audio("sounds/219069__annabloom__click1.wav");
    var snd2 = new Audio("sounds/146721__leszek-szary__menu-click.wav");
    snd.currentTime = 0;
    snd2.currentTime = 0;
    count += 1;
    btn.innerText = count;

    if(count % 100 != 0){
        snd.play();
    }else{
        snd2.play()
    }
    
}