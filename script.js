console.log(
    "Welcome to Apple Music"
);
//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('WAOYF.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar'); 


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
myProgressBar.addEventListener('timeupdate', ()=>{
        console.log('timeupdate');
        //Update Seekbar
    })


