const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");
const play = document.querySelector("#controls #play ");
const prev = document.querySelector("#controls #prev");
const next = document.querySelector("#controls #next");
const replay = document.querySelector("#replay");
const duration = document.querySelector("#duration");
const currentTime = document.querySelector("#current-time");
const progressBar = document.querySelector("#progress-bar");
const volume = document.querySelector("#volume");
const volumeBar = document.querySelector("#volume-bar");
const ul = document.querySelector("ul") 
const musicSum = document.querySelector("#musicSum")


const player = new musıcPlayer(musıcList);

window.addEventListener('load', ()=>{
    let musıc = player.getMusıc();
    displayMusic(musıc);
    displayMusicList(player.musıcList);
    isPlayingNow();
    // musicSayısıGöster(player.musıcList)
  
   musicSayısıGöster(player.index+1,player.musıcList.length)
   
})

function displayMusic(musıc){
    title.innerText = musıc.getName();
    singer.innerText = musıc.singer;
    image.src="ımg/" + musıc.ımg;
    audio.src="mp3/" + musıc.file
 

}

play.addEventListener("click", () => {
    const isMusıcPlay= container.classList.contains("playing")
    isMusıcPlay ? pauseMusic() : playMusic();
    
})




prev.addEventListener("click", () => {
    prevMusic();
   
    musicSayısıGöster(player.index+1,player.musıcList.length)
})

next.addEventListener("click", ()=>{
    nextMusic();
    
    musicSayısıGöster(player.index+1,player.musıcList.length)
})
replay.addEventListener("click",()=>{
    const isMixMusic= container.classList.contains("mix");
    isMixMusic ? replayMusic() : mixMusic ();




musicSayısıGöster(player.index+1,player.musıcList.length)
})


const pauseMusic = () =>{
    container.classList.remove("playing")
    play.querySelector("i").classList="fa-solid fa-play"
    audio.pause();
   
}

const playMusic = () =>{
    container.classList.add("playing")
    play.querySelector("i").classList="fa-solid fa-pause"
    audio.play();
}

const prevMusic = ()=>{
    player.prev()
    let musıc = player.getMusıc();
    displayMusic(musıc);
    playMusic();
    isPlayingNow();
    mixMusic();
    
}

const nextMusic = () =>{
    player.next();
    let musa = player.getMusıc();
    displayMusic(musa);
    playMusic();
    isPlayingNow();
    mixMusic()
 
}

const replayMusic = () =>{
    container.classList.remove("mix")
   
    
 
    replay.querySelector("i").classList="fa-solid fa-reply"
    player.replay();
    let musa = player.getMusıc();
    displayMusic(musa);
    playMusic();
    isPlayingNow();
  

}

const mixMusic = () =>{
    container.classList.add("mix");
    
    replay.querySelector("i").classList="fa-solid fa-repeat"
        player.mixMusic();
        let rep = player.getMusıc();
        displayMusic(rep);
        playMusic();
        isPlayingNow();
    
    

}

const calculateTime = (toplamSaniye) => {
    const dakika = Math.floor(toplamSaniye/60);
    const saniye = Math.floor(toplamSaniye % 60);
    const guncellenenSayı = saniye <10 ? `0${saniye}` : `${saniye}`;
    const sonuc = `${dakika}:${guncellenenSayı}`;
    return sonuc;
}

audio.addEventListener("loadedmetadata", () =>{
    duration.textContent = calculateTime(audio.duration);
    progressBar.max = Math.floor(audio.duration)
})


audio.addEventListener("timeupdate", () => {
    progressBar.value = Math.floor(audio.currentTime)
    currentTime.textContent= calculateTime(progressBar.value)
})


progressBar.addEventListener("input", () =>{
    currentTime.textContent=calculateTime(progressBar.value);
    audio.currentTime=progressBar.value;
})

let sesDurumu = "sessli";

volumeBar.addEventListener("input", (e) =>{
    const value = e.target.value;
   audio.volume=value/100;
   if(value==0){
    audio.muted=true;
    sesDurumu="sessiz";
    volume.classList="fa-solid fa-volume-xmark"
   }else{
    audio.muted=false;
    sesDurumu="sessli";
    volume.classList="fa-solid fa-volume-high";
   }
})

volume.addEventListener("click", () =>{
    if(sesDurumu==="sessli"){
        audio.muted=true;
        sesDurumu="sessiz";
        volume.classList="fa-solid fa-volume-xmark"
      volumeBar.value=0;
    }else{
        audio.muted=false;
        sesDurumu="sessli";
        volume.classList="fa-solid fa-volume-high";
        volumeBar.value=100;
    }
})


const displayMusicList = (list) =>{
    for(let i=0; i<list.length; i++){
        let liTag=`
        <li li-index='${i}' onclick="selectedMusic(this)" class="list-group-item d-flex justify-content-between align-items-center " >
        <span >${list[i].getName()} </span>
        <span id="music-${i}" class="badge text-dark rounded-pill"></span>
        <audio class="music-${i}" src="mp3/${list[i].file}"></audio>
</li> 
`;
        ul.insertAdjacentHTML("beforeend", liTag);
      let   liAudiDuration= ul.querySelector(`#music-${i}`)
        let liAudioTag = ul.querySelector(`.music-${i}`)


        liAudioTag.addEventListener("loadeddata", () =>{

            liAudiDuration.innerText=calculateTime(liAudioTag.duration)
           
        })
    }
}

//  const musicSayısıGöster = (list) =>{
//     for(let i=0; i<list.length; i++){
        
//             let sıra=`<span li-index='${i}'class='badge bg-primary float-start mt-2'>${i}/${list.length}</span>`;
//             musicSum.innerHTML = sıra
         
//     }
//  }

 const selectedMusic = (li) =>{
    player.index = li.getAttribute("li-index")
 
    displayMusic(player.getMusıc());
    playMusic();
    isPlayingNow();
    musicSayısıGöster(player.index,player.musıcList.length)
 
   
 }

 const isPlayingNow= () =>{
    for(let li of ul.querySelectorAll("li")){
        if(li.classList.contains("playing")){
            li.classList.remove("playing")
        }
        if(li.getAttribute("li-index")==player.index){
            li.classList.add("playing")
           

        }
        }
    }
    audio.addEventListener("ended",() =>{
     
        mixMusic()
        musicSayısıGöster(player.index+1,player.musıcList.length)
     
      })

     
      const musicSayısıGöster = (musicSırası,toplamMusic) =>{
                  
                   let sıra=`<span class='badge bg-light float-start mt-2 text-dark' style="border-radius:8px; ">${musicSırası}/${toplamMusic}</span>`;
             musicSum.innerHTML = sıra
                 
         }
         
