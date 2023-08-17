console.log("welcome to spotify");
let songindex=0;
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let songs = [
    {songname: "WE ROLLIN", filepath:"1.mp3", coverpath:""},
    {songname: "HER", filepath:"2.mp3", coverpath:""},
    {songname: "DIOR", filepath:"3.mp3", coverpath:""},
    {songname: "NO LOVE", filepath:"4.mp3", coverpath:""},
    {songname: "CHEQUES", filepath:"5.mp3", coverpath:""},
    {songname: "STILL ROLLIN", filepath:"6.mp3", coverpath:""}
    
]
idx = Math.floor(Math.random()*6);

let audioElement = new Audio(songs[idx].filepath);

audioElement.play();
function playPause() {
    if(audioElement.paused){
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
    if (audioElement.paused){

    // }else {
        progress = parseInt((audioElement.currentTime/audioElement.duration)*10000);
        // console.log('progress');
        progressbar.value = progress;
        if (progressbar.value > 9700){
            let audioElement = new Audio(songs[++idx].filepath);
            audioElement.play();
            progressbar.value = 0;
        }
        console.log(progress)
    }
    // console.log(progress);
}
progressbar.addEventListener('change',()=>{
    audioElement.currentTime = progressbar.value*audioElement.duration/10000;
    
    console.log(progressbar.value)
    
})



setInterval(updateTime, 10000);
