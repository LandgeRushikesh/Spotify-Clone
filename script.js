
let currentSong = new Audio()//to play one song at a time
let pausedAt = 0;//for playing the song from where it is paused
let isPaused = false //for checking whether the song is paused or not 

// convert seconds to minutes for song time
function convertSecondsToMinutes(seconds) {
    // Round the seconds to the nearest whole number
    const roundedSeconds = Math.round(seconds);
    
    // Calculate minutes by dividing the total seconds by 60
    const minutes = Math.floor(roundedSeconds / 60);
    
    // Calculate remaining seconds using modulo operation
    const remainingSeconds = roundedSeconds % 60;
    
    // Format the seconds to always have two digits (e.g., 02, 12)
    const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
    
    // Combine minutes and formatted seconds
    return `${minutes}:${formattedSeconds}`;
}

let getsongs = async ()=>{
    // fetch data from a song folder
    let song = await fetch("http://127.0.0.1:3000/spotify_clone/songs/")
    let response =await song.text()//convert it to text
    let div = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let i = 0;i < as.length; i++) {
        const element = as[i]
        if(element.href.endsWith(".mp3")){
            // split() method - The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
            songs.push( element.href)//pushing song name to songs array
             
        } 
    }
    let songList = document.body.querySelector(".songList")
    for (const song of songs) {
        let parts = song.split('/')
        let songName = parts[parts.length-1]
        songName = songName.replaceAll("%20"," ")
        songName.trim()
        songList.innerHTML = songList.innerHTML + `
                <ol>
                    <li class="play">
                        <i class="fa-solid fa-music"></i>
                        <p class="info">${songName}</p>
                        <div class="play-btn play"><i class="fa-solid fa-play "></i></div>
                    </li>
                </ol>`
    }
    return songs
}
async function main() {
    let song = await getsongs();
    let list = Array.from(document.body.querySelector(".songList").getElementsByTagName("li"))

    list.forEach(element =>{
        element.addEventListener("click",()=>{
            if(element.querySelector(".play-btn").classList.contains("play")){
                element.querySelector(".play-btn").innerHTML = '<i class="fa-solid fa-pause"></i>'
                element.querySelector(".play-btn").classList.remove("play")
                element.querySelector(".play-btn").classList.add("pause")
                playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'
                playMusic(element.querySelector(".info").textContent,isPaused,pausedAt)
                
            }
            else if(element.querySelector(".play-btn").classList.contains("pause")){
                element.querySelector(".play-btn").innerHTML = '<i class="fa-solid fa-play "></i>'
                element.querySelector(".play-btn").classList.remove("pause")
                element.querySelector(".play-btn").classList.add("play")
                playBtn.innerHTML = '<i class="fa-solid fa-play "></i>'
                pausedAt = currentSong.currentTime
                isPaused = true
                currentSong.pause();
            } 
        })
    })
} 

let playMusic = (track,isPaused,pausedAt)=>{
    // In JavaScript, the Audio.src property is used to set or get the source (URL) of the audio file that you want to play using the Audio object.
    currentSong.src = "http://127.0.0.1:3000/spotify_clone/songs/"+decodeURI(track)
    if(isPaused){
        currentSong.currentTime = pausedAt
    }
    currentSong.play();
    document.body.querySelector(".songInfo").innerText = track;
    document.body.querySelector(".songTime").innerText = "00.00/00.00";   
}

// get song time update
currentSong.addEventListener("timeupdate",()=>{
    // this will show time and duration of song in the format 02:12/03:12
    // The timeupdate event is fired when the time indicated by the currentTime attribute has been updated.
    document.body.querySelector(".songTime").innerText = `${convertSecondsToMinutes(currentSong.currentTime)}/${convertSecondsToMinutes(currentSong.duration)}`
    document.body.querySelector(".indicator").style.left = (currentSong.currentTime/currentSong.duration)*100 + "%";
})




main();