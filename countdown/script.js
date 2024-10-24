var snowContainer;

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    snowflake.style.width = `${Math.random() * 10 + 5}px`;
    snowflake.style.height = snowflake.style.width;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflake.style.opacity = Math.random();

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

var countDownDate = new Date("Nov 30, 2024 22:59:59").getTime();

var x = setInterval(function() {
    // Ottieni la data e l'ora attuali
    var now = new Date().getTime();

    // Calcola la distanza tra ora e la data di fine
    var distance = countDownDate - now;

    // Calcola giorni, ore, minuti e secondi
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Visualizza il risultato nell'elemento con id="countdown"
    document.getElementById("countdownTimer").innerHTML = days + "G " + hours + "H " + minutes + "M " + seconds + "S ";

    // Se il countdown è finito, scrivi un messaggio
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdownTimer").innerHTML = "INIZIA A SPACCHETTARE";
    }
    },1000);
document.addEventListener("DOMContentLoaded", () => {
    snowContainer= document.getElementById('snow-container');
    setInterval(createSnowflake, 100);

})


