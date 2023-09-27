let plusHour = document.querySelector("#plusHour")
let minusHour = document.querySelector("#minusHour")
let plusMinut = document.querySelector("#plusMinut")
let minusMinut = document.querySelector("#minusMinut")
let plusSecond = document.querySelector("#plusSecond")
let minusSecond = document.querySelector("#minusSecond")
let hour = document.querySelector("#hour")
let minut = document.querySelector("#minut")
let second = document.querySelector("#second")

let start = document.querySelector("#start")
let stop = document.querySelector("#stop")
let clear = document.querySelector("#clear")





let h = 0
let m = 0
let s = 0
let inter;




plusHour.onclick = () => {
    if (h < 9) {
        stopConfettiInterval()
        clearInterval(intervalId);
        h++
        startTimer()
        hour.innerHTML = `0${h}`
    } else if (h >= 24) {
        h = 0
        hour.innerHTML = "00"
    } else {
        h++
        hour.innerHTML = h
    }
}
plusMinut.onclick = () => {
    if (m < 9) {
        stopConfettiInterval()
        clearInterval(intervalId);
        m++
        startTimer()
        minut.innerHTML = `0${m}`
    } else if (m >= 59) {
        m = 0
        minut.innerHTML = `00`
    } else {
        m++
        minut.innerHTML = m
    }
}
plusSecond.onclick = () => {
    if (s < 9) {
        stopConfettiInterval()
        clearInterval(intervalId);
        s++
        startTimer()
        second.innerHTML = `0${s}`
    } else if (s >= 59) {
        s = 0
        second.innerHTML = `00`
    } else {
        s++
        second.innerHTML = s
    }
}
minusHour.addEventListener('click', () => {
    if (count > 0) {
        count--
        counter.innerHTML = count
    } else {
        counter.innerHTML = 0
    }
})


minusHour.onclick = () => {
    if (h > 0) {
        h--
 
      hour.innerHTML = `0${h}`;

    } else {
        h = 0
        hour.innerHTML = "00"
    }

    


}
minusMinut.onclick = () => {
    if (m > 0) {
        m--
        // minut.innerHTML = m
      minut.innerHTML = `0${m}`;

    } else {
        m = 0
        minut.innerHTML = "00"
    }
}
minusSecond.onclick = () => {
    if (s > 0) {
        s--
        second.innerHTML = s
    } else {
        s = 0
        second.innerHTML = "00"
    }
}




const audio = document.getElementById('tick-tock');
const span = document.querySelectorAll("span");


function stopConfettiInterval() {
    clearInterval(intervalId); // setInterval() tarafından döndürülen ID'yi kullanarak confetti animasyonunu durdurur
  }

function animate() {
  span.forEach(item => {
    item.classList.add("active");
  });
}

function stopAnimation() {
  span.forEach(item => {
    item.classList.remove("active");
    
  });
}

function playTickTockSound() {
    let audio = new Audio('./Clock-Ticking-C-www.fesliyanstudios.com.mp3');
    audio.currentTime = 0; // Sesin baştan çalmasını sağlar.
    audio.loop = true;
}

function stopTickTockSound() {
  audio.pause();
  audio.currentTime = 0;
 

   
  
}

function startTimer() {
  animate();
  playTickTockSound()
  audio.play();

 
  inter = setInterval(() => {

    if (s > 0) {
      s--;
      second.innerHTML = s < 10 ? `0${s}` : s;
    } else if (m > 0) {
      s = 59;
      second.innerHTML = s;
      m--;
      minut.innerHTML = m < 10 ? `0${m}` : m;
    } else if (h > 0) {
      s = 59;
      second.innerHTML = s;
      m = 59;
      minut.innerHTML = m < 10 ? `0${m}` : m;
      h--;
      hour.innerHTML = h < 10 ? `0${h}` : h;
    } else if (h === 0 && m === 0 && s === 0) {

      clearInterval(inter);
      stopAnimation();
      stopTickTockSound();


    function startConfetti() {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
      
      // Belirli aralıklarla konfeti animasyonunu başlatmak için setInterval() kullanın
      intervalId=setInterval(startConfetti, 100); // Her 2 saniyede bir tekrarlanır
    }
   
  }, 1000);

}




function stopTimer() {
  clearInterval(inter);
  stopAnimation();
  stopTickTockSound();
   stopConfettiInterval()
   clearInterval(intervalId);
  
}

function clearTimer() {
  clearInterval(inter);
  stopAnimation();
  stopTickTockSound();
  stopConfettiInterval()
  clearInterval(intervalId);
  audio.pause();
  h = 0;
  m = 0;
  s = 0;

  hour.innerHTML = "00";
  minut.innerHTML = "00";
  second.innerHTML = "00";
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('clear').addEventListener('click', clearTimer);