console.log("welcome to spotify");
let songindex=0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let songs = [
    {songname: "WE ROLLIN", filepath:"1.mp3", coverpath:""},
    {songname: "WE ROLLIN", filepath:"2.mp3", coverpath:""},
    {songname: "WE ROLLIN", filepath:"3.mp3", coverpath:""},
    {songname: "WE ROLLIN", filepath:"4.mp3", coverpath:""},
    {songname: "WE ROLLIN", filepath:"5.mp3", coverpath:""},
    {songname: "WE ROLLIN", filepath:"6.mp3", coverpath:""}
    
]
audioElement.play();

function playPause() {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.className = "fa-solid fa-pause fa-2xl";
       }
    else{
        audioElement.pause();
        masterplay.className = "fa-solid fa-play fa-2xl";
        }
}

masterplay.addEventListener('click',()=>{
    playPause();
})
document.body.onkeydown = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
      //your code
      playPause();
    }
  }


function updateTime(){
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*10000);
    // console.log('progress');
    progressbar.value = progress;
}

setInterval(updateTime, 100);
progressbar.addEventListener('change',()=>{
    audioElement.currentTime = progressbar.value*audioElement.duration/100;
})


