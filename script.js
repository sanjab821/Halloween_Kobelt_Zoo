let currentIndex = 0;  // Startindex des Sliders
const slides = document.querySelectorAll(".slider .slides figure"); // Alle Bilder

// Funktion zur Anzeige des aktuellen Bilds
function showSlide(index) {
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentIndex = 0;  // Zurück zum ersten Bild
    } else if (index < 0) {
        currentIndex = totalSlides - 1;  // Zum letzten Bild
    } else {
        currentIndex = index;
    }

    // Verschiebe die .slides div, um das aktuelle Bild anzuzeigen
    const offset = -currentIndex * 100;
    document.querySelector(".slider .slides").style.transform = `translateX(${offset}%)`;
}

// Nächste Folie
document.querySelector(".next").addEventListener("click", () => {
    showSlide(currentIndex + 1);
});

// Vorherige Folie
document.querySelector(".prev").addEventListener("click", () => {
    showSlide(currentIndex - 1);
});

// Initiale Anzeige des ersten Bilds
showSlide(currentIndex);









    // Datum und Uhrzeit für den Countdown festlegen
    const countdownDate = new Date("Oct 30, 2025 23:59:59").getTime();

    // Aktualisierung des Countdowns jede Sekunde
    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        // Berechnung der Zeit für Tage, Stunden, Minuten und Sekunden
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        
        
        // Ausgabe der Ergebnisse
        document.getElementById("days").innerHTML = days+"d&nbsp;";
        document.getElementById("hours").innerHTML = hours+":";
       
        if(minutes<10){
            document.getElementById("minutes").innerHTML = "0"+minutes+":";
        }else{
             document.getElementById("minutes").innerHTML = minutes+":";
        }
        
        if(seconds<10){
            document.getElementById("seconds").innerHTML = "0"+seconds;
        }else{
            document.getElementById("seconds").innerHTML = seconds;
        }
        

        // Wenn der Countdown abgelaufen ist
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "Countdown abgelaufen!";
        }
    }, 1000);









    // JavaScript, um die Blitzelemente dynamisch zu erstellen
const numberOfBlitze = 20; // Anzahl der Blitze
for (let i = 0; i < numberOfBlitze; i++) {
 const blitz = document.createElement('div');
 blitz.classList.add('blitz');
 blitz.style.setProperty('--top', Math.random() * 100);
 blitz.style.setProperty('--left', Math.random() * 100);
 blitz.style.setProperty('--duration', Math.random() * 2 + 1); // Dauer zwischen 1s und 3s
 document.body.appendChild(blitz);
}








document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll("#video-gallery .slider .slides figure");
    const slidesContainer = document.querySelector("#video-gallery .slider .slides");

    function showSlide(index) {
        const totalSlides = slides.length;
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;
    }

    document.querySelector("#video-gallery .next").addEventListener("click", () => {
        showSlide(currentIndex + 1);
    });

    document.querySelector("#video-gallery .prev").addEventListener("click", () => {
        showSlide(currentIndex - 1);
    });

    showSlide(currentIndex);
});



// JavaScript-Funktion hinzufügen, um das Menü beim Klicken zu schließen
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu-button').checked = false; // Menü schließen
    });
});



window.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('background-audio');
    audio.volume = 0.7; // Lautstärke auf 10% setzen
    audio.play();
});

window.addEventListener('scroll', function() {
    const audio = document.getElementById('background-audio');
    if (!audio.playing) {
        audio.volume = 0.7; // Lautstärke auf 10% setzen
        audio.play();
    }
});

HTMLMediaElement.prototype.playing = false; // Playing Flag hinzufügen

const audio = document.getElementById('background-audio');

audio.onplay = function() {
    this.playing = true;
};

audio.onpause = function() {
    this.playing = false;
};

