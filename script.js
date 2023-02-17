console.log(
    "Welcome to Apple Music"
);
//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('WAOYF.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar'); 

let songs = [
    {songName: "The Greatest", filePath: "songs/1.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Written All Over Your Face", filePath: "songs/WAOYF.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Bigger Than Me", filePath: "songs/2.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Face The Music", filePath: "songs/3.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Headline", filePath: "songs/4.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Saturdays", filePath: "songs/5.mp3", coverPath: "covers/cover.jpg"},
    {songName: "Holding On To Heartache", filePath: "songs/6.mp3", coverPath: "covers/cover.jpg"}
]

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
})
//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
        //Update Seekbar
        progress= parseInt((audioElement.currentTime/audioElement.duration)* 100);
        myProgressBar.value = progress;
    })

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
