console.log("Welcome To Spotify");

//Initialize the variables
let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myProgressBar');
let gif =document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem')); 
let songs=[
{songName:"Hain Aaj Pehli Baar", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
{songName:"Chimb Bhijle re", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
{songName:"Ye rate ye mausam",filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
{songName:"Mai Agar khaoon", filePath:"songs/4.mp3", coverPath:"covers/4.jpg" },
{songName:"Taal Se Taal Mila", filePath:"songs/5.mp3", coverPath:"covers/5.jpg" },
{songName:"Dilruba", filePath:"songs/6.mp3", coverPath:"covers/6.jpg" },
{songName:"Kalank", filePath:"songs/7.mp3", coverPath:"covers/7.jpg" },
{songName:"Raanjhana ve", filePath:"songs/8.mp3", coverPath:"covers/8.jpg" },
{songName:"Nazm Nazm sa ", filePath:"songs/9.mp3", coverPath:"covers/9.jpg" },
{songName:"Kitna Payar Tuze Rab ne", filePath:"songs/10.mp3", coverPath:"covers/10.jpg" }
]
songItems.forEach((element,i )=>{
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused  || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        }
        else{
            audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    } 
})
//Listen to events
audioElement.addEventListener('timeupdate',()=>{
   
    //update seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
} )

const  makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle'); 
       
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex =parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle'); 
        audioElement.src=`songs/${songIndex+1}.mp3`;    
        audioElement.currentTime=0;
         audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })

})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
    songIndex=0;
    }
    else{
        songIndex +=1;
    }

    audioElement.src=`songs/${songIndex+1}.mp3`;    
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 9){
    songIndex=0;
    }
    else{
        songIndex -=1;
    }

    audioElement.src=`songs/${songIndex+1}.mp3`;    
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
